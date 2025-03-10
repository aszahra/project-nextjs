"use client";

import { useEffect, useState } from 'react';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol modal
  const [newUser, setNewUser] = useState({ name: '', email: '' }); // State untuk form input

  useEffect(() => {
    // Fetch data dari file JSON di public
    fetch('/users.json')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data); // Inisialisasi filteredUsers dengan semua data
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Fungsi untuk menangani perubahan input pencarian
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredUsers([]);
    } else {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(term)
      );
      setFilteredUsers(filtered);
    }
  };

  // Fungsi untuk membuka modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
    setNewUser({ name: '', email: '' }); // Reset form input
  };

  // Fungsi untuk menangani perubahan input form
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  // Fungsi untuk menambahkan pengguna baru
  const addUser = () => {
    if (!newUser.name || !newUser.email) {
      alert('Nama dan Email harus diisi!');
      return;
    }

    const newId = users.length + 1; // Generate ID baru
    const updatedUsers = [
      ...users,
      { id: newId, name: newUser.name, email: newUser.email },
    ];

    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers); // Update filteredUsers jika tidak ada pencarian
    closeModal(); // Tutup modal setelah menambahkan
  };

  return (
    <div>
      <h1>Daftar Pengguna</h1>

      {/* Input Pencarian */}
      <input
        type="text"
        placeholder="Cari berdasarkan nama..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: '8px',
          marginBottom: '16px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      />

            {/* Tombol Add */}
            <button
        onClick={openModal}
        style={{
          padding: '8px 16px',
          marginBottom: '16px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add User
      </button>


      {/* Tabel Pengguna */}
      {filteredUsers.length > 0 && (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>ID</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Nama</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '10px' }}>{user.id}</td>
                <td style={{ padding: '10px' }}>{user.name}</td>
                <td style={{ padding: '10px' }}>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pesan Jika Tidak Ada Hasil atau Belum Mencari */}
      {searchTerm.trim() !== '' && filteredUsers.length === 0 && (
        <p>Tidak ada pengguna yang ditemukan.</p>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '8px',
              width: '400px',
            }}
          >
            <h2>Tambah Pengguna Baru</h2>
            <form>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px' }}>
                  Nama:
                </label>
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleInputChange}
                  style={{
                    padding: '8px',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '8px' }}>
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  style={{
                    padding: '8px',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={addUser}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#dc3545',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
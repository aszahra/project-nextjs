// app/page.tsx
import React from "react";
// Interface untuk data dummy
interface PengajuanCuti {
  no: number;
  nama: string;
  jabatan: string;
  divisi: string;
}

const Home: React.FC = () => {
  // Data dummy untuk tabel
  const dataDummy: PengajuanCuti[] = [
    { no: 1, nama: "John Doe", jabatan: "Manager", divisi: "HRD" },
    { no: 2, nama: "Jane Smith", jabatan: "Staff", divisi: "Marketing" },
    { no: 3, nama: "Alice Johnson", jabatan: "Supervisor", divisi: "IT" },
    { no: 4, nama: "Bob Brown", jabatan: "Analyst", divisi: "Finance" },
    { no: 5, nama: "Charlie Davis", jabatan: "Developer", divisi: "IT" },
  ];

  return (
    <div className="mt-7 m-20">
      {/* Judul Aplikasi */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

      {/* Card Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Card Cuti Diajukan */}
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Cuti Diajukan</h2>
          <p className="text-4xl font-bold mt-2">12</p>
        </div>

        {/* Card Cuti Disetujui */}
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Cuti Disetujui</h2>
          <p className="text-4xl font-bold mt-2">8</p>
        </div>

        {/* Card Cuti Ditolak */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Cuti Ditolak</h2>
          <p className="text-4xl font-bold mt-2">4</p>
        </div>
      </div>

      {/* Tabel Data Pengajuan Cuti */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Data Pengajuan Cuti
        </h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Jabatan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Divisi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dataDummy.map((item) => (
              <tr key={item.no}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.no}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.nama}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.jabatan}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.divisi}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Grafik Pengajuan Cuti
        </h2>
        <div className="relative h-64">
          {/* Simulasi Grafik Batang */}
          <svg className="w-full h-full" viewBox="0 0 400 200">
            {/* Garis Horizontal (Axis) */}
            <line
              x1="0"
              y1="180"
              x2="400"
              y2="180"
              stroke="#e5e7eb"
              strokeWidth="2"
            ></line>
            {/* Batang Data */}
            <rect
              x="30"
              y="120"
              width="40"
              height="60"
              fill="#10b981"
            ></rect>{" "}
            {/* Jan */}
            <rect
              x="110"
              y="80"
              width="40"
              height="100"
              fill="#3b82f6"
            ></rect>{" "}
            {/* Feb */}
            <rect
              x="190"
              y="150"
              width="40"
              height="30"
              fill="#f59e0b"
            ></rect>{" "}
            {/* Mar */}
            <rect
              x="270"
              y="100"
              width="40"
              height="80"
              fill="#ef4444"
            ></rect>{" "}
            {/* Apr */}
            <rect
              x="350"
              y="60"
              width="40"
              height="120"
              fill="#8b5cf6"
            ></rect>{" "}
            {/* May */}
            {/* Label Data */}
            <text
              x="50"
              y="195"
              fontSize="10"
              textAnchor="middle"
              fill="#6b7280"
            >
              Jan
            </text>
            <text
              x="130"
              y="195"
              fontSize="10"
              textAnchor="middle"
              fill="#6b7280"
            >
              Feb
            </text>
            <text
              x="210"
              y="195"
              fontSize="10"
              textAnchor="middle"
              fill="#6b7280"
            >
              Mar
            </text>
            <text
              x="290"
              y="195"
              fontSize="10"
              textAnchor="middle"
              fill="#6b7280"
            >
              Apr
            </text>
            <text
              x="370"
              y="195"
              fontSize="10"
              textAnchor="middle"
              fill="#6b7280"
            >
              May
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;

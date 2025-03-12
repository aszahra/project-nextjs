"use client";

import { useState, useMemo, useEffect } from "react";

interface LeaveRequest {
  id: number;
  name: string;
  nip: string;
  position: string;
  department: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
}

export default function LeaveForm() {
  const [requests, setRequests] = useState<LeaveRequest[]>([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    fetch("/pengajuan.json") // Pastikan file ini ada di public/leave_requests.json
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);

  const filteredData = useMemo(() => {
    let filtered = requests.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.nip.includes(search)
    );

    filtered.sort((a: any, b: any) => {
      if (a[sortBy] < b[sortBy]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [search, sortBy, sortOrder, requests]);

  const paginatedData = useMemo(() => {
    const startIndex = (page - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, page]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Cari nama atau NIP..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        className="mb-4 p-2 border rounded w-full"
      />

      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("id")}>
              ID {sortBy === "id" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("name")}>
              Nama {sortBy === "name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className="border p-2 cursor-pointer" onClick={() => handleSort("nip")}>
              NIP {sortBy === "nip" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th className="border p-2">Jabatan</th>
            <th className="border p-2">Departemen</th>
            <th className="border p-2">Jenis Cuti</th>
            <th className="border p-2">Tanggal Mulai</th>
            <th className="border p-2">Tanggal Selesai</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.id}</td>
              <td className="border p-2">{item.name}</td>
              <td className="border p-2">{item.nip}</td>
              <td className="border p-2">{item.position}</td>
              <td className="border p-2">{item.department}</td>
              <td className="border p-2">{item.leaveType}</td>
              <td className="border p-2">{item.startDate}</td>
              <td className="border p-2">{item.endDate}</td>
              <td className="border p-2">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
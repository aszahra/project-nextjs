"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isMasterMenuOpen, setIsMasterMenuOpen] = useState(false);

  return (
    <nav className="bg-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <a href="/" className="text-white font-bold text-lg">
              ASZ's Task
            </a>
          </div>

          {/* Menu Items */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Dashboard */}
              <a
                href="/dashboard"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </a>

              {/* Master Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsMasterMenuOpen(!isMasterMenuOpen)}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                >
                  Master
                </button>
                {isMasterMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <a
                      href="/master/departemen"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Departemen
                    </a>
                    <a
                      href="/master/jabatan"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Jabatan
                    </a>
                    <a
                      href="/master/pegawai"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Pegawai
                    </a>
                  </div>
                )}
              </div>

              {/* Cuti */}
              <a
                href="/cuti"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Cuti
              </a>

              {/* Pengajuan Cuti */}
              <a
                href="/pengajuan-cuti"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Pengajuan Cuti
              </a>

              {/* Laporan */}
              <a
                href="/laporan"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Laporan
              </a>

              <a
                href="/users"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Users
              </a>

              <a
                href="/logout"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
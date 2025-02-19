"use client";

import { useEffect, useState } from "react";

export default function User() {
    const [total, setTotal] = useState(0)
    
    const tambah = () => {
        setTotal(total+1)
    }

    useEffect(() => {
        tambah()
    },[])

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-2xl font-bold text-gray-800">{total}</h1>
      <button className="bg-emerald-800 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition" onClick={tambah}>
        Click Here!
      </button>
    </div>
  );
}

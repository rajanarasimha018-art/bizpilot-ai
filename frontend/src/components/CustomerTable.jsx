import React from "react";

const customers = [
  {
    name: "Rahul Sharma",
    phone: "9876543210",
    orders: 18,
    purchase: "₹32,400",
    status: "VIP",
  },
  {
    name: "Priya Reddy",
    phone: "9123456789",
    orders: 9,
    purchase: "₹14,800",
    status: "Active",
  },
  {
    name: "Kiran Kumar",
    phone: "9988776655",
    orders: 3,
    purchase: "₹4,500",
    status: "Regular",
  },
  {
    name: "Sneha Patel",
    phone: "9000011111",
    orders: 12,
    purchase: "₹21,000",
    status: "VIP",
  },
];

export default function CustomerTable() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold mb-5">
        Customer List
      </h2>

      <table className="w-full">

        <thead className="text-slate-400 text-left">

          <tr>

            <th className="pb-4">Customer</th>

            <th>Phone</th>

            <th>Orders</th>

            <th>Total Purchase</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {customers.map((c) => (

            <tr
              key={c.phone}
              className="border-t border-slate-800"
            >

              <td className="py-4">{c.name}</td>

              <td>{c.phone}</td>

              <td>{c.orders}</td>

              <td>{c.purchase}</td>

              <td>

                <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">

                  {c.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}
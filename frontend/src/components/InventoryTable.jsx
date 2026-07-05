import React from "react";

const products = [
  {
    name: "Rice",
    category: "Grocery",
    stock: 12,
    price: "₹65/kg",
    status: "Low",
    ai: "Reorder in 2 days",
  },
  {
    name: "Sunflower Oil",
    category: "Grocery",
    stock: 48,
    price: "₹170/L",
    status: "Healthy",
    ai: "Stock level is good",
  },
  {
    name: "Milk",
    category: "Dairy",
    stock: 0,
    price: "₹30",
    status: "Out",
    ai: "Order immediately",
  },
  {
    name: "Sugar",
    category: "Grocery",
    stock: 67,
    price: "₹48/kg",
    status: "Healthy",
    ai: "No action required",
  },
  {
    name: "Tea Powder",
    category: "Beverages",
    stock: 19,
    price: "₹220",
    status: "Low",
    ai: "Restock this week",
  },
];

export default function InventoryTable() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Inventory List
          </h2>

          <p className="text-slate-400 text-sm">
            Current Stock Overview
          </p>
        </div>

        <button className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
          + Add Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-sm">

              <th className="text-left py-3">Product</th>

              <th className="text-left">Category</th>

              <th className="text-left">Stock</th>

              <th className="text-left">Price</th>

              <th className="text-left">Status</th>

              <th className="text-left">AI Suggestion</th>

            </tr>
          </thead>

          <tbody>

            {products.map((item) => (

              <tr
                key={item.name}
                className="border-b border-slate-800 hover:bg-slate-800/40 transition"
              >

                <td className="py-4 text-white font-medium">
                  {item.name}
                </td>

                <td className="text-slate-300">
                  {item.category}
                </td>

                <td className="text-white">
                  {item.stock}
                </td>

                <td className="text-white">
                  {item.price}
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.status === "Healthy"
                        ? "bg-green-500/20 text-green-400"
                        : item.status === "Low"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="text-indigo-300 text-sm">
                  {item.ai}
                </td>

              </tr>

            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}
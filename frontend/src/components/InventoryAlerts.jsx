import React from 'react';

const inventory = [
  { name: 'Wireless Headphones', sku: 'WH-1000', stock: 12, max: 100, status: 'Critical' },
  { name: 'Mechanical Keyboard', sku: 'MK-87', stock: 24, max: 100, status: 'Low' },
  { name: '4K Monitor 27"', sku: '4K-M27', stock: 8, max: 50, status: 'Critical' },
];

export default function InventoryAlerts() {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Inventory Alerts</h3>
          <p className="text-xs text-slate-400">Items requiring attention</p>
        </div>
        <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
          3 ALERTS
        </span>
      </div>

      <div className="space-y-4">
        {inventory.map((item, i) => (
          <div key={i} className="p-3 rounded-xl bg-slate-950/40 border border-white/5 hover:border-white/10 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm font-medium text-white">{item.name}</p>
                <p className="text-xs text-slate-500">SKU: {item.sku}</p>
              </div>
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                item.status === 'Critical' 
                  ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                  : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
              }`}>
                {item.status}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    item.status === 'Critical' ? 'bg-gradient-to-r from-red-500 to-red-400' : 'bg-gradient-to-r from-yellow-500 to-yellow-400'
                  }`}
                  style={{ width: `${(item.stock / item.max) * 100}%` }}
                ></div>
              </div>
              <span className="text-xs text-slate-400 font-mono">{item.stock}/{item.max}</span>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-xs font-medium text-indigo-400 hover:text-indigo-300 border border-white/10 hover:border-indigo-500/30 rounded-xl transition-colors">
        View All Inventory
      </button>
    </div>
  );
}
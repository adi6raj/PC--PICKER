import React, { useState } from 'react';

const pcParts = {
  CPU: ['Intel i5', 'Intel i7', 'AMD Ryzen 5', 'AMD Ryzen 7'],
  GPU: ['NVIDIA RTX 3060', 'NVIDIA RTX 4070', 'AMD RX 6600'],
  RAM: ['8GB DDR4', '16GB DDR4', '32GB DDR5'],
  Storage: ['512GB SSD', '1TB SSD', '2TB HDD'],
  Motherboard: ['ASUS Prime', 'MSI B450', 'Gigabyte A520']
};

export default function PCPicker() {
  const [selectedParts, setSelectedParts] = useState({
    CPU: '',
    GPU: '',
    RAM: '',
    Storage: '',
    Motherboard: ''
  });

  const handleChange = (component, value) => {
    setSelectedParts(prev => ({ ...prev, [component]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3x1 font-bold mb-6">🛠️ PC Picker</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {Object.entries(pcParts).map(([component, options]) => (
          <div key={component} className="bg-white p-4 rounded-xl shadow-md">
            <label className="block font-semibold mb-2">{component}</label>
            <select
              className="w-full p-2 border rounded-md"
              value={selectedParts[component]}
              onChange={e => handleChange(component, e.target.value)}
            >
              <option value="">Select {component}</option>
              {options.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-xl font-bold mb-4">🧾 Your Build Summary</h2>
        <ul className="space-y-2">
          {Object.entries(selectedParts).map(([component, value]) => (
            <li key={component} className="flex justify-between">
              <span className="font-medium">{component}:</span>
              <span>{value || 'Not selected'}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

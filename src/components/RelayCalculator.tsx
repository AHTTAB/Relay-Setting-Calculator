import React, { useState } from 'react';

export default function RelayCalculator() {
  const [results, setResults] = useState<{ rTotal: number; xTotal: number; zTotal: number } | null>(null);
  const [lineLength, setLineLength] = useState<number>(48.553);
  const [lineR, setLineR] = useState<number>(0.0700);
  const [lineX, setLineX] = useState<number>(0.3959);
  const [ctPrimary, setCtPrimary] = useState<number>(1000);
  const [ctSecondary, setCtSecondary] = useState<number>(1);
  const [ttPrimary, setTtPrimary] = useState<number>(220000);
  const [ttSecondary, setTtSecondary] = useState<number>(100);

  const calculate = () => {
    const rTotal = lineLength * lineR;
    const xTotal = lineLength * lineX;
    const zTotal = Math.sqrt(rTotal ** 2 + xTotal ** 2);
    setResults({ rTotal, xTotal, zTotal });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">MiCOM Relay Setting Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* ... existing input forms ... */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Line Parameters</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Length (km)</label>
              <input type="number" value={lineLength} onChange={(e) => setLineLength(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Resistance (Ω/km)</label>
              <input type="number" value={lineR} onChange={(e) => setLineR(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Reactance (Ω/km)</label>
              <input type="number" value={lineX} onChange={(e) => setLineX(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">CT & TT Parameters</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">CT Primary (A)</label>
                <input type="number" value={ctPrimary} onChange={(e) => setCtPrimary(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">CT Secondary (A)</label>
                <input type="number" value={ctSecondary} onChange={(e) => setCtSecondary(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">TT Primary (V)</label>
                <input type="number" value={ttPrimary} onChange={(e) => setTtPrimary(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">TT Secondary (V)</label>
                <input type="number" value={ttSecondary} onChange={(e) => setTtSecondary(Number(e.target.value))} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button onClick={calculate} className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700">Calculate</button>
      </div>

      {results && (
        <div className="mt-6 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Calculated Results</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm text-gray-600">Total Resistance (Ω)</p>
              <p className="text-2xl font-bold">{results.rTotal.toFixed(4)}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm text-gray-600">Total Reactance (Ω)</p>
              <p className="text-2xl font-bold">{results.xTotal.toFixed(4)}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded">
              <p className="text-sm text-gray-600">Total Impedance (Ω)</p>
              <p className="text-2xl font-bold">{results.zTotal.toFixed(4)}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-green-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-green-700">Download Report (PDF)</button>
          </div>
        </div>
      )}
    </div>
  );
}

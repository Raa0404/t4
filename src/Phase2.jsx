import React, { useState } from 'react';

export default function Phase2({ solId, userName, onBack }) {
  const [accountNumber, setAccountNumber] = useState('');

  return (
    <div className="min-h-screen bg-yellow-100 p-6">
      <div className="flex justify-between">
        <button onClick={onBack} className="bg-gray-500 text-white px-3 py-1 rounded">Back</button>
        <div className="text-orange-600 font-bold">© P.Raa</div>
      </div>
      <h2 className="text-xl font-bold mt-4">Hello, {userName} (SOL: {solId})</h2>
      <input
        className="border p-2 rounded mt-6 w-full"
        placeholder="Enter Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <p className="mt-4 text-gray-700">[All accounts under this CIF will be shown here]</p>
      <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded">Proceed</button>
    </div>
  );
}
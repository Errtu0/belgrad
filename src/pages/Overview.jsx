import React, { useContext } from 'react';
import { TripContext } from '../context/TripContext';

export default function Overview() {
  const { tripData, setTripData, resetTrip } = useContext(TripContext);

  return (
    <div className="min-h-screen bg-[#FFDE59] p-4 pb-24 flex justify-center">
      <div className="w-full max-w-md space-y-6">
        
        {/* Main Title Card */}
        <div className="bg-white border-4 border-black p-6 shadow-neo-lg transform -rotate-1">
          <input 
            className="text-4xl font-black w-full bg-transparent border-none focus:ring-0 uppercase tracking-tighter"
            value={tripData.tripTitle}
            onChange={(e) => setTripData({...tripData, tripTitle: e.target.value})}
          />
          <div className="mt-4 flex gap-2">
            <span className="bg-[#B3FF66] border-2 border-black px-3 py-1 font-black text-sm uppercase">
              {tripData.dates}
            </span>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#FF91FB] border-4 border-black p-4 shadow-neo font-black uppercase text-center">
            {tripData.groupSize} People 👥
          </div>
          <button 
            onClick={resetTrip}
            className="bg-[#5CE1E6] border-4 border-black p-4 shadow-neo font-black uppercase active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            Reset 🚩
          </button>
        </div>

        {/* Accommodation Cards */}
        <h2 className="text-2xl font-black uppercase italic tracking-widest mt-8">Where we staying:</h2>
        {tripData.accommodations.map((acc, i) => (
          <div key={acc.id} 
            className={`p-5 border-4 border-black shadow-neo ${i % 2 === 0 ? 'bg-white rotate-1' : 'bg-[#FFBD59] -rotate-1'}`}>
            <p className="text-xs font-black uppercase mb-1 underline">{acc.type}</p>
            <p className="font-bold text-lg">{acc.address}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
import React, { useContext, useState } from 'react';
import { TripContext } from '../context/TripContext';

export default function Places() {
  const { tripData, setTripData } = useContext(TripContext);
  const [selectedDay, setSelectedDay] = useState(1);

  // Safety check: If tripData is missing or still loading
  if (!tripData) return <div className="p-10 font-black text-center uppercase">Loading Belgrade Data...</div>;

  const addToItinerary = (place) => {
    const uniqueId = window.crypto.randomUUID(); 
    const newItem = {
      id: uniqueId,
      time: "12:00",
      place: place.name,
      category: place.category,
      distance: "10 min",
      notes: place.desc,
      done: false
    };

    const newItinerary = { ...tripData.itinerary };
    newItinerary[selectedDay] = [...(newItinerary[selectedDay] || []), newItem];
    setTripData({ ...tripData, itinerary: newItinerary });
    alert(`📍 ${place.name} added to Day ${selectedDay}!`);
  };

  return (
    <div className="min-h-screen bg-[#5CE1E6] p-4 pb-32 flex justify-center">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-4xl font-black bg-white border-4 border-black p-4 shadow-neo uppercase">Belgrade Guide 📖</h1>

        {/* RESET DATA BUTTON */}
        <button 
          onClick={() => { if(window.confirm("Reset all data?")) { localStorage.clear(); window.location.reload(); } }}
          className="w-full bg-red-500 text-white border-4 border-black p-2 font-black text-xs uppercase shadow-neo active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
          ⚠️ CRASH FIX: Reset Old Data ⚠️
        </button>

        <div className="bg-black text-white p-4 border-4 border-black shadow-neo">
          <p className="font-black text-xs uppercase mb-2 text-[#B3FF66]">Add to which day?</p>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map(d => (
              <button 
                key={d} 
                onClick={() => setSelectedDay(d)}
                className={`flex-1 py-1 border-2 border-white font-black transition-all ${selectedDay === d ? 'bg-[#B3FF66] text-black' : ''}`}
              >
                D{d}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {tripData?.places?.map(place => (
            <div key={place.id} className="bg-white border-4 border-black p-4 shadow-neo flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black uppercase leading-tight">{place.name}</h3>
                  <span className="inline-block mt-1 bg-[#FFDE59] border-2 border-black px-2 py-0.5 text-[10px] font-black uppercase">
                    {place.category}
                  </span>
                </div>
                <span className="text-3xl">{place.emoji}</span>
              </div>
              
              <p className="font-bold text-sm text-slate-600 border-l-4 border-black pl-2 py-1 my-2">
                {place.desc}
              </p>
              
              <button 
                onClick={() => addToItinerary(place)}
                className="w-full bg-[#FF91FB] border-4 border-black py-3 font-black uppercase text-xs active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
              >
                Add to Plan +
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
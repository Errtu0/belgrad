import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TripContext } from '../context/TripContext';
import TimelineItem from '../components/TimelineItem';
import { ChevronLeft, Plus } from 'lucide-react';

export default function TimelinePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tripData, setTripData } = useContext(TripContext);
  const dayId = parseInt(id);
  const items = tripData.itinerary[dayId] || [];

  const handleEdit = (index, field, value) => {
    const newItinerary = { ...tripData.itinerary };
    newItinerary[dayId][index][field] = value;
    setTripData({ ...tripData, itinerary: newItinerary });
  };

  const handleDelete = (index) => {
    if (window.confirm("Remove this from the plan?")) {
      const newItinerary = { ...tripData.itinerary };
      newItinerary[dayId].splice(index, 1);
      setTripData({ ...tripData, itinerary: newItinerary });
    }
  };

  const addNewCustomItem = () => {
    const uniqueId = `custom-${Date.now()}`;
    const newItem = {
      id: uniqueId,
      time: "12:00",
      place: "New Stop",
      category: "Walk",
      distance: "5 min",
      notes: "",
      done: false
    };
    const newItinerary = { ...tripData.itinerary };
    newItinerary[dayId] = [...items, newItem];
    setTripData({ ...tripData, itinerary: newItinerary });
  };

  return (
    <div className="min-h-screen bg-[#B3FF66] p-4 pb-32 flex justify-center">
      <div className="w-full max-w-md">
        
        <header className="flex justify-between items-center mb-6">
           <button 
             onClick={() => navigate('/')} 
             className="bg-white border-4 border-black p-2 shadow-neo active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
           >
             <ChevronLeft strokeWidth={4} />
           </button>
           <h1 className="text-4xl font-black uppercase italic tracking-tighter">Day {dayId}</h1>
        </header>

        <div className="flex gap-2 overflow-x-auto pb-6 no-scrollbar">
          {[1, 2, 3, 4, 5].map(d => (
            <button 
              key={d} 
              onClick={() => navigate(`/day/${d}`)}
              className={`px-6 py-2 border-4 border-black font-black uppercase shadow-neo shrink-0 transition-all ${
                dayId === d ? 'bg-black text-white -translate-y-1' : 'bg-white text-black'
              }`}
            >
              D{d}
            </button>
          ))}
        </div>

        <div className="space-y-2">
          {items.length > 0 ? (
            items.map((item, idx) => (
              <TimelineItem 
                key={item.id} 
                item={item} 
                onEdit={(field, val) => handleEdit(idx, field, val)}
                onDelete={() => handleDelete(idx)}
              />
            ))
          ) : (
            <div className="bg-white/50 border-4 border-dashed border-black p-10 text-center font-black uppercase text-slate-600 mb-6">
              Nothing planned yet!
            </div>
          )}
          
          <button 
            onClick={addNewCustomItem}
            className="w-full py-4 bg-[#FFDE59] border-4 border-black shadow-neo font-black uppercase flex items-center justify-center gap-2 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all"
          >
            <Plus strokeWidth={4} /> Add Custom Stop
          </button>
        </div>
      </div>
    </div>
  );
}
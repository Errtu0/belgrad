import React from 'react';
import { Trash2, CheckCircle2 } from 'lucide-react';

export default function TimelineItem({ item, onEdit, onDelete }) {
  return (
    <div className="relative pl-8 pb-10 border-l-4 border-black last:border-0">
      {/* Dot */}
      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-black border-4 border-white" />
      
      <div className={`border-4 border-black p-5 shadow-neo transition-all ${item.done ? 'bg-[#B3FF66] rotate-1' : 'bg-white -rotate-1'}`}>
        <div className="flex justify-between items-center mb-2">
          <span className="bg-black text-white px-3 py-1 font-black text-xs tracking-tighter italic">
            {item.time}
          </span>
          <button onClick={onDelete} className="text-red-500 hover:scale-110 transition-transform">
            <Trash2 size={18} strokeWidth={3} />
          </button>
        </div>

        <h4 className="text-2xl font-black uppercase leading-none mb-1">{item.place}</h4>
        <p className="text-xs font-bold text-slate-400 mb-4">📍 {item.distance}</p>
        
        <textarea 
          className="w-full border-2 border-black p-2 font-bold text-sm bg-slate-100 mb-4 focus:bg-white outline-none"
          value={item.notes}
          onChange={(e) => onEdit('notes', e.target.value)}
        />

        <button 
          onClick={() => onEdit('done', !item.done)}
          className={`w-full py-2 border-4 border-black flex items-center justify-center gap-2 font-black uppercase text-xs transition-all ${
            item.done ? 'bg-black text-white' : 'bg-[#FFDE59] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
          }`}
        >
          <CheckCircle2 size={16} />
          {item.done ? "Mission Accomplished" : "Mark as Visited"}
        </button>
      </div>
    </div>
  );
}
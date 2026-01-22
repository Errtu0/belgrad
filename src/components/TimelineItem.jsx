import React from 'react';
import { Trash2, CheckCircle2, GripVertical } from 'lucide-react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function TimelineItem({ item, onEdit, onDelete }) {
  // Setup drag and drop hook
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div 
      ref={setNodeRef} 
      style={style} 
      className="relative pl-8 pb-10 border-l-4 border-black last:border-0"
    >
      {/* Dot */}
      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-black border-4 border-white" />
      
      <div className={`border-4 border-black p-5 shadow-neo transition-all ${item.done ? 'bg-[#B3FF66] rotate-1' : 'bg-white -rotate-1'}`}>
        
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            {/* Drag Handle */}
            <div {...attributes} {...listeners} className="cursor-grab active:cursor-grabbing p-1 bg-slate-200 border-2 border-black">
              <GripVertical size={16} />
            </div>
            
            {/* Editable Time */}
            <input 
              className="bg-black text-white px-2 py-1 font-black text-xs tracking-tighter italic w-20 outline-none focus:ring-2 focus:ring-blue-400"
              value={item.time}
              onChange={(e) => onEdit('time', e.target.value)}
            />
          </div>

          <button onClick={onDelete} className="text-red-500 hover:scale-110 transition-transform">
            <Trash2 size={18} strokeWidth={3} />
          </button>
        </div>

        {/* Editable Place Name */}
        <input 
          className="text-2xl font-black uppercase leading-none mb-1 w-full bg-transparent border-b-2 border-transparent focus:border-black outline-none"
          value={item.place}
          onChange={(e) => onEdit('place', e.target.value)}
        />
        
        <p className="text-xs font-bold text-slate-400 mb-4">📍 {item.distance}</p>
        
        {/* Editable Notes */}
        <textarea 
          className="w-full border-2 border-black p-2 font-bold text-sm bg-slate-100 mb-4 focus:bg-white outline-none"
          value={item.notes}
          placeholder="Add notes..."
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
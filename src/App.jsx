import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Calendar, Music, Ghost, Search } from 'lucide-react';
import { TripProvider } from './context/TripContext';
import Overview from './pages/Overview';
import TimelinePage from './pages/TimelinePage';
import Places from './pages/Places';

export default function App() {
  return (
    <TripProvider>
      <Router>
        <div className="min-h-screen bg-[#FFDE59]">
          <div className="max-w-md mx-auto bg-white min-h-screen shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative pb-24">
            <Routes>
              {/* Home / Overview */}
              <Route path="/" element={<Overview />} />
              
              {/* Timeline Days */}
              <Route path="/day/:id" element={<TimelinePage />} />
              
              {/* Master Places List */}
              <Route path="/places" element={<Places />} />
              
              
              {/* Fallback for broken links */}
              <Route path="*" element={<Overview />} />
            </Routes>

            {/* NEOBRUTALIST NAVBAR */}
            <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] bg-white border-4 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex justify-around p-2 z-50">
              <Link to="/" className="p-2 hover:bg-[#FFDE59] border-2 border-transparent hover:border-black transition-all">
                <Home size={28} color="black" strokeWidth={3} />
              </Link>
              <Link to="/day/1" className="p-2 hover:bg-[#B3FF66] border-2 border-transparent hover:border-black transition-all">
                <Calendar size={28} color="black" strokeWidth={3} />
              </Link>
              <Link to="/places" className="p-2 hover:bg-[#5CE1E6] border-2 border-transparent hover:border-black transition-all">
                <Search size={28} color="black" strokeWidth={3} />
              </Link>
              
            </nav>
          </div>
        </div>
      </Router>
    </TripProvider>
  );
}
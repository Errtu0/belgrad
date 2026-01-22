import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      <main className="w-full max-w-md bg-white min-h-screen shadow-lg relative">
        {children}
      </main>
    </div>
  );
}
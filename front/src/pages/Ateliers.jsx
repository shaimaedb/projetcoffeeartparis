import React from 'react';

const DUMMY_WORKSHOPS = [
  { id: 1, title: 'Initiation au Tournage & Latte Art', price: 75, date: 'Samedi 13 Juin', time: '14:00 - 16:30', places: 4 },
  { id: 2, title: 'Modelage d\'un set à café', price: 60, date: 'Dimanche 14 Juin', time: '10:30 - 13:00', places: 2 },
];

export default function Ateliers() {
  return (
    <div className="bg-[#fbf9f6] min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl font-light tracking-wide text-center mb-4">Nos Ateliers Créatifs</h2>
        <p className="text-gray-500 text-center max-w-lg mx-auto mb-12 text-sm">Venez partager un moment de convivialité unique. Apprenez les gestes de la terre tout en dégustant nos meilleurs crus.</p>

        <div className="space-y-6">
          {DUMMY_WORKSHOPS.map(workshop => (
            <div key={workshop.id} className="bg-white border border-gray-200 p-6 rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-800">{workshop.date} à {workshop.time}</span>
                <h3 className="font-serif text-xl text-gray-900 mt-1 mb-2">{workshop.title}</h3>
                <p className="text-xs text-gray-500">Places restantes : <span className="font-bold text-red-600">{workshop.places} places</span></p>
              </div>
              <div className="flex items-center space-x-6 w-full md:w-auto justify-between md:justify-end">
                <span className="font-serif text-xl font-medium">{workshop.price} €</span>
                <button onClick={() => alert('Réservation simulée !')} className="bg-[#2c2520] text-white text-xs uppercase tracking-wider px-4 py-2 font-semibold hover:bg-black transition">
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
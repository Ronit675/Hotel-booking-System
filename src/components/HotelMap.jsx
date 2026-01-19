import { Building2 } from 'lucide-react';
import Floors from './Floors';

const HotelMap = ({ rooms, hoveredRoom, setHoveredRoom, lastBookedRooms }) => {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 rounded-lg">
          <Building2 className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">Hotel Map</h2>
        <div className="ml-auto bg-white/10 px-4 py-2 rounded-lg">
          <p className="text-purple-200 text-sm font-semibold">← Lift/Stairs</p>
        </div>
      </div>
      
      <div className="space-y-4 sm:space-y-6">
        {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map(floor => (
          <Floors
            key={floor}
            floor={floor}
            rooms={rooms}
            hoveredRoom={hoveredRoom}
            setHoveredRoom={setHoveredRoom}
            lastBookedRooms={lastBookedRooms}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 justify-center items-center p-4 bg-white/5 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-green-500/40 to-emerald-600/40 border-2 border-green-400/60 rounded-lg"></div>
          <span className="text-green-200 font-bold text-sm">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-red-500/40 to-pink-600/40 border-2 border-red-400/60 rounded-lg"></div>
          <span className="text-red-200 font-bold text-sm">Occupied</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-green-500/40 to-emerald-600/40 border-2 border-green-400/60 rounded-lg ring-4 ring-yellow-400"></div>
          <span className="text-yellow-200 font-bold text-sm">Last Booked</span>
        </div>
      </div>
    </div>
  );
};

export default HotelMap;
import { Layers } from 'lucide-react';
import Room from './Room';
import { getFloorRooms } from '../utils/roomUtils';

const Floors = ({ floor, rooms, hoveredRoom, setHoveredRoom, lastBookedRooms }) => {
  const floorRooms = getFloorRooms(floor);
  const floorOccupied = floorRooms.filter(r => rooms[r]?.occupied).length;
  const floorAvailable = floorRooms.length - floorOccupied;

  return (
    <div className="bg-gradient-to-r from-white/5 to-transparent rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-white/30 transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4">
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-black text-lg min-w-[140px] ${
          floor === 10 ? 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-200 border-2 border-yellow-400/50' : 'bg-white/10 text-white'
        }`}>
          <Layers className="w-5 h-5" />
          <span>Floor No. {floor}</span>
        </div>
        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-lg text-xs font-bold border border-green-400/30">
            {floorAvailable} Rooms Available
          </span>
          <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg text-xs font-bold border border-red-400/30">
            {floorOccupied} Rooms Occupied
          </span>
          {floor === 10 && (
            <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-lg text-xs font-bold border border-yellow-400/30">
              Top Floor
            </span>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-10 gap-2 sm:gap-3">
        {floorRooms.map(roomNum => (
          <Room
            key={roomNum}
            roomNum={roomNum}
            isOccupied={rooms[roomNum]?.occupied}
            isHovered={hoveredRoom === roomNum}
            isLastBooked={lastBookedRooms.includes(roomNum)}
            onHover={() => setHoveredRoom(roomNum)}
            onLeave={() => setHoveredRoom(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default Floors;
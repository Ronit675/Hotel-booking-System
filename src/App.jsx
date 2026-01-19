import { useState, useEffect } from 'react';
import { Building2, Users, CheckCircle2, Clock, TrendingDown, Layers } from 'lucide-react';
import StatusCard from './components/StatusCard';
import BookingCenter from './components/BookingCenter';
import BookedRoomResults from './components/BookedRoomDetails';
import HotelLayout from './components/HotelMap';
import { 
  initializeRooms, 
  findOptimalRooms, 
  getOccupancyStats 
} from './utils/roomUtils';

function App() {
  const [rooms, setRooms] = useState({});
  const [numRooms, setNumRooms] = useState(1);
  const [bookingResult, setBookingResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredRoom, setHoveredRoom] = useState(null);
  const [lastBookedRooms, setLastBookedRooms] = useState([]);

  useEffect(() => {
    setRooms(initializeRooms());
  }, []);

  const handleBookRooms = () => {
    if (numRooms < 1 || numRooms > 5) {
      alert('Please enter a number between 1 and 5');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const availableRooms = Object.keys(rooms)
        .map(Number)
        .filter(roomNum => !rooms[roomNum].occupied);

      const result = findOptimalRooms(availableRooms, numRooms);

      if (result) {
        const newRooms = { ...rooms };
        result.rooms.forEach(roomNum => {
          newRooms[roomNum].occupied = true;
        });
        setRooms(newRooms);
        setLastBookedRooms(result.rooms);
        setBookingResult({
          success: true,
          rooms: result.rooms.sort((a, b) => a - b),
          travelTime: result.travelTime
        });
      } else {
        setBookingResult({
          success: false,
          message: `Not enough rooms available. Only ${availableRooms.length} rooms left.`
        });
        setLastBookedRooms([]);
      }
      setIsLoading(false);
    }, 500);
  };

  const handleRandomOccupancy = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newRooms = { ...rooms };
      Object.keys(newRooms).forEach(roomNum => {
        newRooms[roomNum].occupied = Math.random() > 0.5;
      });
      setRooms(newRooms);
      setBookingResult(null);
      setLastBookedRooms([]);
      setIsLoading(false);
    }, 400);
  };

  const handleReset = () => {
    setIsLoading(true);
    setTimeout(() => {
      setRooms(initializeRooms());
      setBookingResult(null);
      setLastBookedRooms([]);
      setNumRooms(1);
      setIsLoading(false);
    }, 400);
  };

  const stats = getOccupancyStats(rooms);
  const occupancyRate = ((stats.occupied / stats.total) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 p-3 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in">
            <div className="relative">
              <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 rounded-full animate-ping"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Grand Hotel
            </h1>
          </div>
          <p className="text-purple-200 text-base sm:text-lg font-medium tracking-wide">
            Smart Room Reservation System
          </p>
          <div className="mt-3 inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30">
            <p className="text-cyan-300 text-sm font-semibold">97 Rooms • 10 Floors • Optimal Allocation</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatusCard
            icon={Building2}
            label="Total Rooms"
            value={stats.total}
            gradient="from-blue-500/20 to-blue-600/10"
            iconBg="bg-blue-500/30"
            textColor="text-blue-200"
            secondaryIcon={Layers}
          />
          <StatusCard
            icon={CheckCircle2}
            label="Available"
            value={stats.available}
            gradient="from-green-500/20 to-emerald-600/10"
            iconBg="bg-green-500/30"
            textColor="text-green-200"
            secondaryIcon={TrendingDown}
          />
          <StatusCard
            icon={Users}
            label="Occupied"
            value={stats.occupied}
            gradient="from-red-500/20 to-pink-600/10"
            iconBg="bg-red-500/30"
            textColor="text-red-200"
          />
          <StatusCard
            icon={Clock}
            label="Occupancy Rate"
            value={`${occupancyRate}%`}
            gradient="from-purple-500/20 to-fuchsia-600/10"
            iconBg="bg-purple-500/30"
            textColor="text-purple-200"
          />
        </div>

        {/* Booking Controls */}
        <div className="mb-8">
          <BookingCenter
            numRooms={numRooms}
            setNumRooms={setNumRooms}
            onBook={handleBookRooms}
            onRandom={handleRandomOccupancy}
            onReset={handleReset}
            isLoading={isLoading}
          />
          <BookedRoomResults res={bookingResult} />
        </div>

        {/* Hotel Layout */}
        <HotelLayout
          rooms={rooms}
          hoveredRoom={hoveredRoom}
          setHoveredRoom={setHoveredRoom}
          lastBookedRooms={lastBookedRooms}
        />
      </div>
    </div>
  );
}

export default App;
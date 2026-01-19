import { CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';

const BookingCenter = ({ 
  numRooms, 
  setNumRooms, 
  onBook, 
  onRandom, 
  onReset, 
  isLoading 
}) => {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-2 rounded-lg">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">Book Rooms Here</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-1">
          <label className="block text-purple-200 text-sm font-semibold mb-2 tracking-wide">
            Number of Rooms (1-5):
          </label>
          <input
            type="number"
            min="1"
            max="5"
            value={numRooms}
            onChange={(e) => setNumRooms(parseInt(e.target.value) || 1)}
            className="w-full bg-white/10 border-2 border-purple-400/50 rounded-xl px-4 py-3.5 text-white text-lg font-bold placeholder-purple-300/50 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-all"
            placeholder="Enter 1-5"
          />
        </div>

        <button
          onClick={onBook}
          disabled={isLoading}
          className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white font-black py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-2xl hover:shadow-pink-500/50 flex items-center justify-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <CheckCircle2 className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Confirm Booking</span>
        </button>

        <button
          onClick={onRandom}
          disabled={isLoading}
          className="group relative bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 hover:from-blue-700 hover:via-cyan-700 hover:to-teal-700 text-white font-black py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <Sparkles className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Random Allocate</span>
        </button>

        <button
          onClick={onReset}
          disabled={isLoading}
          className="group relative bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 hover:from-red-700 hover:via-orange-700 hover:to-yellow-700 text-white font-black py-3.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-2xl hover:shadow-orange-500/50 flex items-center justify-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <RefreshCw className={`w-5 h-5 relative z-10 ${isLoading ? 'animate-spin' : ''}`} />
          <span className="relative z-10">Deallocate All</span>
        </button>
      </div>
    </div>
  );
};

export default BookingCenter;
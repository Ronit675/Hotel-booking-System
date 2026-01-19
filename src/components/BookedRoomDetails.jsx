import { CheckCircle2, XCircle, Clock } from 'lucide-react';

const BookedRoomResult = ({ res }) => {
  if (!res) return null;

  const ifsuccess = res.success;

  return (
    <div className={`mt-6 p-6 rounded-2xl border-2 transition-all duration-500 ${
      ifsuccess 
        ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/50 shadow-lg shadow-green-500/20' 
        : 'bg-gradient-to-r from-red-500/20 to-pink-500/20 border-red-400/50 shadow-lg shadow-red-500/20'
    }`}>
      {ifsuccess ? (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-500/30 p-2 rounded-lg">
              <CheckCircle2 className="w-7 h-7 text-green-300" />
            </div>
            <h3 className="text-2xl font-black text-white">Rooms Booked!</h3>
          </div>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-green-100 text-sm font-semibold mb-2">ROOMS ALLOCATED</p>
              <p className="text-white text-xl font-black tracking-wide">
                {res.rooms.join(' • ')}
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Clock className="w-6 h-6 text-green-300" />
              <div>
                <p className="text-green-100 text-sm font-semibold">TIME TO REACH THE ROOM</p>
                <p className="text-white text-xl font-black">{res.travelTime} mins</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <div className="bg-red-500/30 p-2 rounded-lg">
            <XCircle className="w-7 h-7 text-red-300" />
          </div>
          <div>
            <h3 className="text-xl font-black text-white mb-1">Booking Unsuccessful</h3>
            <p className="text-red-100 font-medium">{res.message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookedRoomResult;
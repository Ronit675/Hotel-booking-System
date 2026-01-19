const Room = ({ roomNum, isOccupied, isHovered, isLastBooked, onHover, onLeave }) => {
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative aspect-square rounded-xl flex flex-col items-center justify-center
        transition-all duration-300 transform cursor-pointer
        ${isOccupied 
          ? 'bg-gradient-to-br from-red-500/40 to-pink-600/40 border-2 border-red-400/60 shadow-lg shadow-red-500/30' 
          : 'bg-gradient-to-br from-green-500/40 to-emerald-600/40 border-2 border-green-400/60 shadow-lg shadow-green-500/30'
        }
        ${isHovered ? 'scale-110 z-10 shadow-2xl' : 'hover:scale-105'}
        ${isLastBooked ? 'ring-4 ring-yellow-400 ring-offset-2 ring-offset-transparent animate-pulse' : ''}
      `}
    >
      <span className={`text-xs sm:text-sm font-black ${isOccupied ? 'text-red-100' : 'text-green-100'}`}>
        {roomNum}
      </span>
      <div className={`w-2 h-2 rounded-full mt-1 ${isOccupied ? 'bg-red-300' : 'bg-green-300'}`}></div>
      
      {isHovered && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap z-20 shadow-xl border border-white/20">
          Room {roomNum}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default Room;
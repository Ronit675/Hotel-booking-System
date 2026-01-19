import React from 'react';

const StatusCard = ({ icon: Icon, label, value, gradient, iconBg, textColor, secondIcon: SecondaryIcon }) => {
  return (
    <div className={`group bg-gradient-to-br ${gradient} backdrop-blur-xl rounded-2xl p-6 border ${textColor.replace('text-', 'border-')}/30 hover:${textColor.replace('text-', 'border-')}/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-${textColor.split('-')[1]}-500/20`}>
      <div className="flex items-center justify-between mb-3">
        <div className={`${iconBg} p-3 rounded-xl group-hover:${iconBg.replace('/30', '/50')} transition-colors`}>
          <Icon className={`w-6 h-6 ${textColor.replace('text-', 'text-').replace('/50', '/300')}`} />
        </div>
        {SecondaryIcon && <SecondaryIcon className={`w-5 h-5 ${textColor}/50`} />}
      </div>
      <p className={`${textColor} text-sm font-medium mb-1`}>{label}</p>
      <p className="text-white text-3xl font-black">{value}</p>
    </div>
  );
};

export default StatusCard;

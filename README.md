# 🏨 Grand Hotel - Room Reservation System

A sophisticated hotel room reservation system built with React, Vite, and Tailwind CSS. Features an AI-powered optimal room allocation algorithm that minimizes travel time between booked rooms.

## 🌟 Features

- **Smart Room Allocation**: Automatically selects optimal rooms based on:
  - Priority to same floor
  - Minimized travel time (vertical: 2 min/floor, horizontal: 1 min/room)
  - Dynamic algorithm for multi-floor bookings
  
- **Interactive Hotel Visualization**: 
  - 97 rooms across 10 floors
  - Real-time occupancy status
  - Hover tooltips for room details
  - Highlighted last booked rooms

- **Booking Features**:
  - Book 1-5 rooms at a time
  - Travel time calculation
  - Success/failure notifications
  - Random occupancy generator
  - Reset functionality

- **Modern UI/UX**:
  - Beautiful gradient designs
  - Smooth animations and transitions
  - Fully responsive (mobile, tablet, desktop)
  - Real-time statistics dashboard

## 📋 Project Structure

```
hotel-reservation-system/
├── src/
│   ├── components/
│   │   ├── StatsCard.jsx          # Statistics card component
│   │   ├── BookingControls.jsx    # Booking interface controls
│   │   ├── BookingResult.jsx      # Booking result display
│   │   ├── Room.jsx                # Individual room component
│   │   ├── Floor.jsx               # Floor layout component
│   │   └── HotelLayout.jsx         # Main hotel visualization
│   ├── utils/
│   │   └── roomUtils.js            # Room allocation algorithms
│   ├── App.jsx                     # Main application component
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Create the Vite project**:
```bash
npm create vite@latest hotel-reservation-system -- --template react
cd hotel-reservation-system
```

2. **Install dependencies**:
```bash
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. **Copy all project files** to their respective locations as shown in the project structure.

4. **Run the development server**:
```bash
npm run dev
```

5. **Open your browser** and navigate to:
```
http://localhost:5173
```

## 🎯 How It Works

### Room Allocation Algorithm

The system uses a sophisticated algorithm to allocate rooms optimally:

1. **Same Floor Priority**: First attempts to find all rooms on the same floor
2. **Travel Time Calculation**: 
   - Vertical travel: 2 minutes per floor
   - Horizontal travel: 1 minute per room
3. **Optimization**: Tests all possible combinations to find minimum travel time
4. **Multi-floor Support**: Spans across floors when necessary, minimizing total travel time

### Example Scenarios

**Scenario 1**: Book 4 rooms
- Available: Floor 1 (101, 102, 105, 106)
- Result: Selects all 4 from Floor 1 (total travel: 5 minutes)

**Scenario 2**: Book 4 rooms, only 2 available on Floor 1
- Available: Floor 1 (101, 102), Floor 2 (201, 202, 203, 210)
- Result: Selects Floor 2 rooms (201, 202, 203, 210) to minimize travel

## 🎨 Customization

### Styling

All styles use Tailwind CSS utility classes. Customize colors, gradients, and animations in:
- `tailwind.config.js` - Theme configuration
- `src/index.css` - Global styles and custom animations
- Component files - Component-specific styling

### Room Configuration

Modify room layout in `src/utils/roomUtils.js`:
```javascript
// Change number of floors or rooms per floor
export const initializeRooms = () => {
  // Customize your hotel structure here
}
```

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 🚀 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

## 🔧 Technologies Used

- **React 18** - UI Framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon set
- **JavaScript ES6+** - Modern JavaScript

## 📊 Performance Features

- Lazy loading components
- Optimized re-renders with React hooks
- Efficient algorithm with O(n choose k) complexity
- Smooth animations with CSS transitions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Created as part of SDE 3 assessment for Unstop

## 🙏 Acknowledgments

- Design inspiration from modern hotel booking systems
- Algorithm optimization techniques from computer science principles
- UI/UX patterns from contemporary web applications

---

**Note**: This is a frontend implementation. For a full-stack MERN application, you would need to add:
- Node.js/Express backend
- MongoDB database
- REST API endpoints
- Real-time updates with Socket.io
- User authentication

Happy Coding! 🎉
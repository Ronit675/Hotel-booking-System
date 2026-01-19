/**
 * Initialize all hotel rooms
 * Floors 1-9: 10 rooms each (101-110, 201-210, etc.)
 * Floor 10: 7 rooms (1001-1007)
 */
export const initializeRooms = () => {
  const rooms = {};
  
  // Floors 1-9: 10 rooms each
  for (let floor = 1; floor <= 9; floor++) {
    for (let room = 1; room <= 10; room++) {
      const roomNum = floor * 100 + room;
      rooms[roomNum] = { occupied: false, floor };
    }
  }
  
  // Floor 10: 7 rooms
  for (let room = 1; room <= 7; room++) {
    const roomNum = 1000 + room;
    rooms[roomNum] = { occupied: false, floor: 10 };
  }
  
  return rooms;
};

/**
 * Calculate travel time between two rooms
 * Vertical: 2 minutes per floor
 * Horizontal: 1 minute per room
 */
export const calculateTravelTime = (room1, room2) => {
  const floor1 = room1 >= 1000 ? 10 : Math.floor(room1 / 100);
  const floor2 = room2 >= 1000 ? 10 : Math.floor(room2 / 100);
  const pos1 = room1 % 100 || (room1 - 1000);
  const pos2 = room2 % 100 || (room2 - 1000);

  const verticalTime = Math.abs(floor1 - floor2) * 2;
  const horizontalTime = Math.abs(pos1 - pos2);

  return verticalTime + horizontalTime;
};

/**
 * Calculate total travel time for a set of rooms
 * (from first to last room in the booking)
 */
export const getTotalTravelTime = (roomNumbers) => {
  if (roomNumbers.length <= 1) return 0;
  const sorted = [...roomNumbers].sort((a, b) => a - b);
  return calculateTravelTime(sorted[0], sorted[sorted.length - 1]);
};

/**
 * Get all combinations of k elements from array
 */
export const getCombinations = (arr, k) => {
  if (k > arr.length || k <= 0) return [];
  if (k === arr.length) return [arr];
  if (k === 1) return arr.map(el => [el]);

  const result = [];
  const helper = (start, combo) => {
    if (combo.length === k) {
      result.push([...combo]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      combo.push(arr[i]);
      helper(i + 1, combo);
      combo.pop();
    }
  };
  helper(0, []);
  return result;
};

/**
 * Find optimal room allocation based on booking rules
 * Priority 1: Same floor
 * Priority 2: Minimize total travel time
 */
export const findOptimalRooms = (availableRooms, count) => {
  if (availableRooms.length < count) return null;

  // Group rooms by floor
  const roomsByFloor = {};
  availableRooms.forEach(room => {
    const floor = room >= 1000 ? 10 : Math.floor(room / 100);
    if (!roomsByFloor[floor]) roomsByFloor[floor] = [];
    roomsByFloor[floor].push(room);
  });

  let bestCombination = null;
  let minTravelTime = Infinity;

  // Priority 1: Try same floor first
  for (const floor in roomsByFloor) {
    const floorRooms = roomsByFloor[floor].sort((a, b) => a - b);
    if (floorRooms.length >= count) {
      const combinations = getCombinations(floorRooms, count);
      combinations.forEach(combo => {
        const travelTime = getTotalTravelTime(combo);
        if (travelTime < minTravelTime) {
          minTravelTime = travelTime;
          bestCombination = combo;
        }
      });
    }
  }

  // Priority 2: Multi-floor if necessary
  if (!bestCombination) {
    const sortedRooms = availableRooms.sort((a, b) => a - b);
    const combinations = getCombinations(sortedRooms, count);
    combinations.forEach(combo => {
      const travelTime = getTotalTravelTime(combo);
      if (travelTime < minTravelTime) {
        minTravelTime = travelTime;
        bestCombination = combo;
      }
    });
  }

  return bestCombination ? { rooms: bestCombination, travelTime: minTravelTime } : null;
};

/**
 * Get room numbers for a specific floor
 */
export const getFloorRooms = (floor) => {
  if (floor === 10) {
    return Array.from({ length: 7 }, (_, i) => 1001 + i);
  }
  return Array.from({ length: 10 }, (_, i) => floor * 100 + i + 1);
};

/**
 * Get occupancy statistics
 */
export const getOccupancyStats = (rooms) => {
  const total = Object.keys(rooms).length;
  const occupied = Object.values(rooms).filter(r => r.occupied).length;
  return { total, occupied, available: total - occupied };
};
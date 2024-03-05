let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Timed event',
    description: 'Timed event',
    type: 'MMA',
    eventDate: todayStr,
    start: todayStr + 'T12:00:00',
    end: todayStr + 'T14:00:00',
    backgroundColor: '',
    borderColor: '',
  },
  {
    id: createEventId(),
    title: 'Test 1',
    description: 'Description test 1',
    type: 'Boxe',
    eventDate: '2024-02-15',
    start: '2024-02-15T10:30:00',
    end: '2024-02-15T11:30:00',
    backgroundColor: '#32CD32', // Light green
    borderColor: '#32CD32', // Light green
  },
  {
    id: createEventId(),
    title: 'Test 2',
    description: 'Description test 2',
    type: 'Boxe',
    eventDate: todayStr,
    start: todayStr + 'T17:00:00',
    end: todayStr + 'T18:30:00',
    backgroundColor: '#DC143C', // Red
    borderColor: '#DC143C', // Red
  }
]

export function createEventId() {
  return String(eventGuid++)
}

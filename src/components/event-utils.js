let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Timed event',
    description: 'Monke',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'Test',
    description: 'I need a longer description so here I am writting random things',
    start: '2024-02-15T10:30:00',
    startStr: '2024-02-15T10:30:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}

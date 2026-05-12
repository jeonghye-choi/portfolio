import type { Moment } from '../types'

const momentImageBaseUrl = '/moments/'

export const moments: Moment[] = [
    {
    id: 'seoul-1998',
    location: 'Seoul',
    date: '1998.08',
    imageUrl: `${momentImageBaseUrl}seoul.jpeg`,
  },
  {
    id: 'paris-2027',
    location: 'Paris',
    date: '2027.01',
    imageUrl: `${momentImageBaseUrl}paris.jpeg`,
  },
  {
    id: 'germany-2027',
    location: 'Germany',
    date: '2027.03',
    imageUrl: `${momentImageBaseUrl}germany.jpeg`,
  },
  {
    id: 'amsterdam-2027',
    location: 'Amsterdam',
    date: '2027.06',
    imageUrl: `${momentImageBaseUrl}amsterdam.jpeg`,
  },
  {
    id: 'barcelona-2027',
    location: 'Barcelona',
    date: '2027.08',
    imageUrl: `${momentImageBaseUrl}barcelona.jpeg`,
  },
  {
    id: 'lisbon-2026',
    location: 'Lisbon',
    date: '2026.04',
    imageUrl: `${momentImageBaseUrl}lisbon.jpeg`,
  }
]
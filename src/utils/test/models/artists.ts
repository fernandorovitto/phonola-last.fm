import { Artist, ArtistInfo } from '@Store/artists/types';

export const artist: Artist = {
  avatar: {
    lg: '',
    md: '',
    sm: '',
    xl: '',
    xxl: '',
  },
  listeners: 10000,
  mbid: 'cc0b7089-c08d-4c10-b6b0-873582c17fd6',
  name: 'Megadeth',
  url: '',
};

export const artist2: Artist = {
  avatar: {
    lg: '',
    md: '',
    sm: '',
    xl: '',
    xxl: '',
  },
  listeners: 10000,
  mbid: 'cc0b7089-c08d-4c10-b6b0-873582c17fd7',
  name: 'Pantera',
  url: '',
};

export const artistInfo: ArtistInfo = {
  bio: {
    content: 'Long text to show',
    published: '12-08-2000',
    summary: 'Short text',
  },
  image: {
    extra: '',
    lg: '',
    md: '',
    sm: '',
    xl: '',
    xxl: '',
  },
  isOntour: true,
  mbid: 'cc0b7089-c08d-4c10-b6b0-873582c17fd8',
  name: 'Iron Maiden',
  relatedArtists: [{ name: 'Pantera' }, { name: 'Megadeth' }],
  stats: {
    listeners: 322323,
    playcount: 43534555,
  },
};

export const artists: Artist[] = [artist, artist2];

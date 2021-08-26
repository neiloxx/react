export interface ICard {
  name: string;
  image: string;
  url: string;
  cities: Array<ICity>;
}

export interface ICity {
  name: string;
  url: string;
  watchers: number;
}

const cards = [
  {
    name: 'czech republic',
    image: './public/assets/images/czech.jpg',
    url: '0#',
    cities: [
      {
        name: 'prague',
        url: '0#',
        watchers: 121,
      },
      {
        name: 'brno',
        url: '0#',
        watchers: 13,
      },
      {
        name: 'liberec',
        url: '0#',
        watchers: 19,
      },
      {
        name: 'ostrava',
        url: '0#',
        watchers: 58,
      },
      {
        name: 'plzen',
        url: '0#',
        watchers: 26,
      },
    ],
  },
  {
    name: 'germany',
    image: './public/assets/images/germany.jpg',
    url: '0#',
    cities: [
      {
        name: 'berlin',
        url: '0#',
        watchers: 387,
      },
      {
        name: 'munich',
        url: '0#',
        watchers: 132,
      },
      {
        name: 'frankfurt',
        url: '0#',
        watchers: 195,
      },
      {
        name: 'humburg',
        url: '0#',
        watchers: 58,
      },
      {
        name: 'stuttgart',
        url: '0#',
        watchers: 26,
      },
    ],
  },
  {
    name: 'france',
    image: './public/assets/images/france.jpg',
    url: '0#',
    cities: [
      {
        name: 'paris',
        url: '0#',
        watchers: 1213,
      },
      {
        name: 'marseille',
        url: '0#',
        watchers: 103,
      },
      {
        name: 'lyon',
        url: '0#',
        watchers: 193,
      },
      {
        name: 'marseille',
        url: '0#',
        watchers: 103,
      },
      {
        name: 'lyon',
        url: '0#',
        watchers: 193,
      },
    ],
  },
  {
    name: 'spain',
    image: './public/assets/images/spain.jpg',
    url: '0#',
    cities: [
      {
        name: 'Madrid',
        url: '0#',
        watchers: 121,
      },
      {
        name: 'Barcelona',
        url: '0#',
        watchers: 13,
      },
    ],
  },
  {
    name: 'italy',
    image: './public/assets/images/italy.jpg',
    url: '0#',
    cities: [
      {
        name: 'Rome',
        url: '0#',
        watchers: 121,
      },
      {
        name: 'Milan',
        url: '0#',
        watchers: 13,
      },
      {
        name: 'Naples',
        url: '0#',
        watchers: 13,
      },
    ],
  },
];

export default cards;

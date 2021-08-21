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
];

export default cards;

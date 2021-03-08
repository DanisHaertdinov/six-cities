import {Offer} from './types/offer';

const offers: Offer[] = [
  {
    id: 4232,
    city: `Paris`,
    photos: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`],
    title: `Lorem ipsum dolor sit amet, consectetur`,
    description: `Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur`,
    isPremium: true,
    isFavorite: false,
    type: `room`,
    rating: 3.8,
    numberOfBedrooms: 2,
    capacity: 4,
    price: 125,
    goods: [`Wifi`, `Heating`, `Cable TV`, `Coffee machine`, `Kitchen`, `Towels`],
    host: {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
      isSuper: true,
    },
    reviews: [11, 12]
  },
  {
    id: 4233,
    city: `Paris`,
    photos: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
    title: `Lorem ipsum dolor sit amet, consectetur`,
    description: `Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur`,
    isPremium: true,
    isFavorite: true,
    type: `house`,
    rating: 4,
    numberOfBedrooms: 4,
    capacity: 5,
    price: 200,
    goods: [`Wifi`, `Heating`, `Kitchen`, `Towels`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: true,
    },
    reviews: [11, 12, 13]
  },
  {
    id: 4234,
    city: `Cologne`,
    photos: [`img/apartment-03.jpg`, `img/room.jpg`],
    title: `Lorem ipsum dolor sit amet, consectetur`,
    description: `Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur`,
    isPremium: false,
    isFavorite: true,
    type: `hotel`,
    rating: 2,
    numberOfBedrooms: 1,
    capacity: 1,
    price: 110,
    goods: [`Wifi`, `Heating`, `Cable TV`, `Coffee machine`, `Kitchen`, `Towels`],
    host: {
      avatar: `img/avatar-max.jpg`,
      name: `Max`,
      isSuper: false,
    },
    reviews: [11, 12, 13, 14]
  },
  {
    id: 4235,
    city: `Cologne`,
    photos: [`img/apartment-03.jpg`, `img/room.jpg`, `img/studio-01.jpg`],
    title: `Lorem ipsum dolor sit amet, consectetur`,
    description: `Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur`,
    isPremium: true,
    isFavorite: true,
    type: `room`,
    rating: 4.5,
    numberOfBedrooms: 3,
    capacity: 3,
    price: 325,
    goods: [`Wifi`, `Heating`, `Towels`],
    host: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Angelina`,
      isSuper: false,
    },
    reviews: [12, 13]
  },
];

export {offers};

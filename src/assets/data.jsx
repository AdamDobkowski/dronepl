/** @format */
import React from 'react';
import { FaPhotoVideo } from 'react-icons/fa';
import { BsStarHalf } from 'react-icons/bs';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { GiField } from 'react-icons/gi';
import { MdOutlineCameraIndoor } from 'react-icons/md';
import { IoCarSport } from 'react-icons/io5';
import done1 from './imges/done1.jpg';
import done2 from './imges/done2.jpg';
import done3 from './imges/done3.jpg';
import done4 from './imges/done4.jpg';
import done5 from './imges/done5.jpg';
import done6 from './imges/done6.jpg';
import comp1 from './imges/company/arbet.png';
import comp2 from './imges/company/Budimex.png';
import comp3 from './imges/company/DAFLogo.png';
import comp4 from './imges/company/Ford.png';
import comp5 from './imges/company/HerbGoldap.png';
import comp6 from './imges/company/KUEHNE-NAGEL.jpeg';
import comp7 from './imges/company/msLogo.png';
import comp8 from './imges/company/MSrodowiska.jpeg';
import comp9 from './imges/company/TGBradt.png';

export const specs = [
  {
    id: 1,
    icon: <FaPhotoVideo style={{ fontSize: '40px' }} />,
    title: 'Fotografia i Wideo',
    desc: 'Profesjonalne zdjęcia i film. Realizuję produkcje wideo oraz sesje fotograficzne reklamowe, korporacyjne, nieruchomości, wydarzeń i teledysków, a także reportaży. Moje prace cechuje wysoka jakość oraz niepowtarzalna estetyka.',

    btn: 'KONTAKT',
  },
  {
    id: 2,
    icon: <BsStarHalf style={{ fontSize: '40px' }} />,
    // icon: 'DOM2',
    title: 'Eventy',
    desc: 'Ślub, koncert, wydarzenie sportowe, wyścigi samochodowe czy event firmowy. To idealne okazje zasługujące na uwiecznienie z wyjątkowej powietrznej perspektywy. Realizuję klasyczne nagrania wideo z drona jak i dynamiczne ujęcia z drona FPV.',

    btn: 'KONTAKT',
  },
  {
    id: 3,
    icon: <HiOutlineOfficeBuilding style={{ fontSize: '40px' }} />,
    // icon: 'DOM3',
    title: 'Budynki',
    desc: 'Z podniebnej perspektywy każda nieruchomość wygląda atrakcyjniej. Dzięki fotografiom i wideo z drona lepiej zaprezentujesz swoją firmę lub dużo szybciej sprzedaż nieruchomość. Oprócz klasycznych zdjęć i filmów reklamowych, wykonuję też timelapsy i Panoramy sferyczne 360 stopni.',

    btn: 'KONTAKT',
  },
  {
    id: 4,
    icon: <IoCarSport style={{ fontSize: '40px' }} />,
    // icon: 'DOM4',
    title: 'Samochody',
    desc: 'Uchwycenie odpowiednich ujęć to dopiero połowa drogi do celu. Realizuję projekty od nagrania, po gotowy produkt w postaci filmu.',

    btn: 'KONTAKT',
  },
  {
    id: 5,
    icon: <MdOutlineCameraIndoor style={{ fontSize: '40px' }} />,
    // icon: 'DOM4',
    title: 'Wnętrza',
    desc: 'Uchwycenie odpowiednich ujęć to dopiero połowa drogi do celu. Realizuję projekty od nagrania, po gotowy produkt w postaci filmu.',

    btn: 'KONTAKT',
  },
  {
    id: 6,
    icon: <GiField style={{ fontSize: '40px' }} />,
    // icon: 'DOM4',
    title: 'Nieruchomości',
    desc: 'Uchwycenie odpowiednich ujęć to dopiero połowa drogi do celu. Realizuję projekty od nagrania, po gotowy produkt w postaci filmu.',

    btn: 'KONTAKT',
  },

  // {
  //   id: 5,
  //   icon: 'DOM5',
  //   title: 'Nieruchomości5',
  //   desc: '5Z podniebnej perspektywy każda nieruchomość wygląda atrakcyjniej. Dzięki fotografiom i wideo z drona lepiejzaprezentujesz swoją firmę lub dużo szybciej sprzedażnieruchomość. Oprócz klasycznych zdjęć i filmów reklamowych,wykonuję też timelapsy i Panoramy sferyczne 360 stopni.',
  //   btn: 'KONTAKT',
  // },
  // {
  //   id: 6,
  //   icon: 'DOM6',
  //   title: 'Nieruchomości6',
  //   desc: '6Z podniebnej perspektywy każda nieruchomość wygląda atrakcyjniej. Dzięki fotografiom i wideo z drona lepiejzaprezentujesz swoją firmę lub dużo szybciej sprzedażnieruchomość. Oprócz klasycznych zdjęć i filmów reklamowych,wykonuję też timelapsy i Panoramy sferyczne 360 stopni.',
  //   btn: 'KONTAKT',
  // },
];

export const company = [
  {
    id: 1,
    icon: 'Arbet Investment Group',
    imgs: comp1,
  },
  {
    id: 2,
    icon: 'Budimex',
    imgs: comp2,
  },
  {
    id: 4,
    icon: 'Ford Polska',
    imgs: comp4,
  },
  {
    id: 5,
    icon: 'Urząd Miasta Gołdap',
    imgs: comp5,
  },
  {
    id: 6,
    icon: 'Kuehne-Nagel',
    imgs: comp6,
  },
  {
    id: 7,
    icon: 'Ministerstwo Sprawiedliwości',
    imgs: comp7,
  },
  {
    id: 8,
    icon: 'Ministerstwo Środowiska',
    imgs: comp8,
  },
  {
    id: 3,
    icon: 'DAF Trucks',
    imgs: comp3,
  },
  {
    id: 9,
    icon: 'Togguslav Brandt',
    imgs: comp9,
  },
];

export const CarouselaData = [
  {
    id: 1,
    imgs: done1,
    p: 'lorem',
  },
  {
    id: 2,
    imgs: done2,
    p: 'lorem',
  },
  {
    id: 3,
    imgs: done3,
    p: 'lorem',
  },
  {
    id: 4,
    imgs: done4,
    p: 'lorem',
  },
  {
    id: 5,
    imgs: done5,
    p: 'lorem',
  },
  {
    id: 6,
    imgs: done6,
    p: 'lorem',
  },
  {
    id: 7,
    imgs: done4,
    p: 'lorem',
  },
  {
    id: 8,
    imgs: done5,
    p: 'lorem',
  },
  {
    id: 9,
    imgs: done6,
    p: 'lorem',
  },
];

export const motionStyle = {
  initial: { opacity: 0, y: 20 },
  // animate={{ opacity: 1, scale: 1 }}
  whileInView: { opacity: 1, y: 0 },
  // viewport: { once: true },
  transition: { duration: 0.5 },
};

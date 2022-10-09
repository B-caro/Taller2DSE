import React from 'react';
import {ScrollView} from 'react-native';
import VideoGallery from '../Components/videogallery';

const proximamente = [
  {
    name: '1899',
    type: 'Serie',
    date: '17-11-22',
    video: 'https://www.youtube.com/embed/2JV1KjA1nc8',
  },
  {
    name: 'THE PERIPHERAL',
    type: 'Serie',
    date: '21-10-22',
    video: 'https://www.youtube.com/embed/aXGkP-9i2j0',
  },
  {
    name: 'THE WITCHER: EL ORIGEN DE LA SANGRE',
    type: 'Serie',
    date: '25-12-22',
    video: 'https://www.youtube.com/embed/kiXQUNtv5CY',
  },
  {
    name: 'FALL',
    type: 'Pelicula',
    date: '07-10-22',
    video: 'https://www.youtube.com/embed/aa5MXOMN1lM',
  },
  {
    name: 'LOS RENGLONES TORCIDOS DE DIOS',
    type: 'Pelicula',
    date: '28-11-22',
    video: 'https://www.youtube.com/embed/VpZjyY4wPi0',
  },
  {
    name: 'The Matrix Resurrections',
    type: 'Pelicula',
    date: '28-11-22',
    video: 'https://www.youtube.com/embed/9ix7TUGVYIo',
  },
];

export default function Proximamente() {
  return (
    <ScrollView>
      {proximamente.map((u, i) => (
        <VideoGallery
          key={i}
          nombre={u.name}
          url={u.video}
          tipo={u.type}
          fecha={u.date}
        />
      ))}
    </ScrollView>
  );
}

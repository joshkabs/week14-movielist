import React, { useState } from 'react';
import './App.css';
import Stars from './components/stars';

// import UserForm from './UserForm';
import MovieReviews from './components/MovieReviews';
import AddAMovie from './components/AddAMovie';
import AddComment from './components/AddComment';

let initialMovies = [
  {
    image:
      'https://tse2.mm.bing.net/th?id=OIP.WldSetPM_LL0gc1h4mgu0AHaJ4&pid=Api&P=0',
    name: 'Top Gun',
    rate: '8.2',
    synopsis:
      'Top Gun (1986) As students at the United States Navys elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom. 2. Top Gun: Maverick (2022)'
  },
  {
    image: 'https://wallpapercave.com/wp/wp8214214.jpg',
    name: 'Avatar The Way of Water',
    rate: '9.2',
    synopsis:
      'Set more than a decade after the events of the first film, Avatar: The Way of Water launches the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.'
  },
  {
    image:
      'https://tse2.mm.bing.net/th?id=OIP.iwJey06EMvvMyY8aY6JFVQHaEK&pid=Api&P=0',
    name: 'Mario',
    rate: '8.3',
    synopsis:
      'Brooklyn plumbers Mario (Hoskins) and Luigi (Leguizamo) get the shock of their lives when they discover a parallel world populated by the intelligent descendants of dinosaurs. Its up to our unlikely heroes to battle the evil King Koopa and his Goomba guards, free the beautiful Princess Daisy and save mankind in this adventure of a lifetime.'
  },
  {
    image:
      'https://tse2.mm.bing.net/th?id=OIP.82quCK_ZiCrW__PcmSRmiAHaDt&pid=Api&P=0',
    name: 'Jurassic World',
    rate: '8.4',
    synopsis:
      'Experience the epic conclusion to the Jurassic era as two generations unite for the first time. Chris Pratt and Bryce Dallas Howard are joined by Oscar®-winner Laura Dern, Jeff Goldblum and Sam Neill in Jurassic World Dominion, a bold, timely and breathtaking new adventure that spans the globe. From Jurassic World architect and director Colin Trevorrow, Dominion takes place four years after Isla Nublar has been destroyed. Dinosaurs now live—and hunt—alongside humans all over the world. '
  }
];

function App() {
  let [movies, setMovies] = useState(initialMovies);

  return (
    <div className="Movies">
      <AddAMovie setMovies={setMovies} />

      <MovieReviews movies={movies} setMovies={setMovies} />
    </div>
  );
}

export default App;

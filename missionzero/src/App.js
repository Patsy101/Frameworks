import './App.css';
import { useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/Navbar';
import Section from './components/section';
import { BrowserRouter as Router } from 'react-router-dom';
import Banner from '../src/styling/Banner.png';

//searchicon can be imported from fontawesome
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=fc038834';
const movie1 = {
  Title: 'Mt Taranaki, New Plymouth',
  Place: '',
  imdbID: 'tt2084949',
  Type: 'Place',
  Poster:
    'https://www.newzealand.com/assets/Tourism-NZ/Other/f03827ca15/img-1536160912-8531-27762-p-F97841B9-E186-CED1-28383A3065394D07-2544003__aWxvdmVrZWxseQo_FocalPointCropWzU1MCwxNjAwLDUwLDUwLDc1LCJwbmciLDY1LDIuNV0.png',
};

const movie2 = {
  Title: 'Lake Wanaka,Queenstown',
  Place: '',
  imdbID: 'tt2381249',
  Type: 'Place',
  Poster:
    'https://www.newzealand.com/assets/Tourism-NZ/Wanaka/92ca1ae269/img-1536310649-590-13278-20DD4B36-98C4-3ACD-BD26444D3737BB1A__aWxvdmVrZWxseQo_FocalPointCropWzU1MCwxNjAwLDUyLDYzLDc1LCJqcGciLDY1LDIuNV0.jpg',
};

const movie3 = {
  Title: 'Wellington CBD',
  Place: '',
  imdbID: 'tt0412935',
  Type: 'Place',
  Poster:
    'https://www.newzealand.com/assets/Tourism-NZ/Wellington/a0270b9c65/img-1536175632-8358-28882-5B708F8A-F226-CC55-5DA34096B1ACE6B6__aWxvdmVrZWxseQo_FocalPointCropWzU1MCwxNjAwLDUwLDUwLDc1LCJqcGciLDY1LDIuNV0.jpg',
};

const movie4 = {
  Title: 'Mt Cook, Canterbury',
  Place: ' ',
  imdbID: 'tt0412935',
  Type: 'Place',
  Poster:
    'https://www.newzealand.com/assets/Tourism-NZ/Other/img-1536260466-2170-24620-p-712A8924-03B0-0BFD-28FE9F2B4701BEF4-2544003__aWxvdmVrZWxseQo_CropResizeWzMwMCwzMDAsODAsImpwZyJd.jpg',
};

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };
  useEffect(() => {
    searchMovies('Lord of the Rings');
  }, []);
  return (
    <div className="app">
      <Router>
        <Navbar></Navbar>
      </Router>
      <div className="Section">
        <Section></Section>
      </div>
      <img src={Banner} className="Banner"></img>
      <div className="container">
        {/* Movie 1 */}
        <div className="movie">
          <div>
            <p>{movie1.Place}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== 'N/A'
                  ? movie1.Poster
                  : 'https://via.placeholder.com/400'
              }
              alt={movie1.Title}
            />
          </div>
          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
        {/* Movie 2 */}
        <div className="movie">
          <div>
            <p>{movie2.Place}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== 'N/A'
                  ? movie2.Poster
                  : 'https://via.placeholder.com/400'
              }
              alt={movie1.Title}
            />
          </div>
          <div>
            <span>{movie2.Type}</span>
            <h3>{movie2.Title}</h3>
          </div>
        </div>
        {/* Movie 3 */}
        <div className="movie">
          <div>
            <p>{movie3.Place}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== 'N/A'
                  ? movie3.Poster
                  : 'https://via.placeholder.com/400'
              }
              alt={movie1.Title}
            />
          </div>
          <div>
            <span>{movie3.Type}</span>
            <h3>{movie3.Title}</h3>
          </div>
        </div>
        {/* Movie 4 */}
        <div className="movie">
          <div>
            <p>{movie4.Place}</p>
          </div>
          <div>
            <img
              src={
                movie1.Poster !== 'N/A'
                  ? movie4.Poster
                  : 'https://via.placeholder.com/400'
              }
              alt={movie4.Title}
            />
          </div>
          <div>
            <span>{movie4.Type}</span>
            <h3>{movie4.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

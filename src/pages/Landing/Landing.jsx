import React from 'react';
import { getDocs, collection } from 'firebase/firestore';
import StyledLanding from './StyledLanding';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AuthGaurd from '../../HOC/AuthGaurd';
import { db } from '../../config/firebase';
import Movie from '../../components/Movie/Movie';

function Landing() {
  const [movieList, setMovieList] = React.useState([]);

  const movieCollectionRef = collection(db, 'movies');

  React.useEffect(() => {
    const getMovieList = async () => {
      // Read the data from database and set movie list to be = data;
      try {
        const data = await getDocs(movieCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setMovieList(filteredData);

        console.log('this data', data, filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getMovieList();
  }, []);

  return (
    <StyledLanding>
      <NavBar />
      <h2>Movies</h2>

      <div className="movie_div">
        {movieList.map((movie) => (
          <Movie movie={movie} key={movie?.id} />
        ))}
      </div>
      <Footer />
    </StyledLanding>
  );
}

export default AuthGaurd(Landing);

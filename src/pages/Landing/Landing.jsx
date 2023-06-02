/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { getDocs, addDoc, collection } from 'firebase/firestore';
import StyledLanding from './StyledLanding';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AuthGaurd from '../../HOC/AuthGaurd';
import { db } from '../../config/firebase';
import Movie from '../../components/Movie/Movie';
import useAlert from '../../hooks/UseAlert';
import Loader from '../../components/Loader/Loader';

function Landing() {
  const [movieList, setMovieList] = React.useState([]);
  const [movieForm, setMovieForm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [newMovie, setNewMovie] = React.useState({
    title: '',
    releaseDate: '',
    gotAnOscar: false,
  });

  const { AlertComponet, displayAlert, alertMsg } = useAlert();

  const movieCollectionRef = collection(db, 'movies');

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.releaseDate) {
      displayAlert('missing movie info');
      return;
    }

    setLoading(true);

    await addDoc(movieCollectionRef, newMovie)
      .then((res) => console.log('res', res))
      .catch((er) => console.error(er))
      .finally(() => setLoading(false));
  };

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
        displayAlert('an erro occured in useEffect');
      }
    };

    getMovieList();
  }, []);

  return (
    <StyledLanding>
      {alertMsg.show && <AlertComponet />}

      {loading && <Loader />}

      <NavBar />
      <h2>Movies</h2>

      {movieForm && (
        <form onSubmit={handlesubmit}>
          <p>create new movie</p>
          <input
            type="text"
            placeholder="title"
            value={newMovie.title}
            onChange={({ target: { value } }) =>
              setNewMovie((prev) => ({ ...prev, title: value }))
            }
          />

          <input
            type="text"
            placeholder="releas date"
            value={newMovie.releaseDate}
            onChange={({ target: { value } }) =>
              setNewMovie((prev) => ({ ...prev, releaseDate: +value }))
            }
          />

          <label htmlFor="oscar">
            will get an oscar
            <input
              id="oscar"
              type="checkbox"
              placeholder="releas date"
              onChange={({ target: { checked } }) =>
                setNewMovie((prev) => ({ ...prev, gotAnOscar: checked }))
              }
            />
          </label>

          <button type="submit">submit movie</button>
        </form>
      )}

      <div className="movie_div">
        <p className="togle_form" onClick={() => setMovieForm((prev) => !prev)}>
          {movieForm ? 'cancel' : 'create Movie'}
        </p>

        {movieList.map((movie) => (
          <Movie movie={movie} key={movie?.id} />
        ))}
      </div>
      <Footer />
    </StyledLanding>
  );
}

export default AuthGaurd(Landing);

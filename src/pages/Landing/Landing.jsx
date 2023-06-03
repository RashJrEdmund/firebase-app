/* eslint-disable */
import React from 'react';
import {
  getDocs,
  addDoc,
  deleteDoc,
  collection,
  doc,
  updateDoc,
} from 'firebase/firestore';
import StyledLanding from './StyledLanding';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import AuthGaurd from '../../HOC/AuthGaurd';
import { db } from '../../config/firebase';
import Movie from '../../components/Movie/Movie';
import useAlert from '../../hooks/UseAlert';
import Loader from '../../components/Loader/Loader';
import useDialogue from '../../hooks/useDialogue';

function Landing() {
  const [movieList, setMovieList] = React.useState([]);
  const [movieForm, setMovieForm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [newTitle, setNewTitle] = React.useState(false);
  const [newMovie, setNewMovie] = React.useState({
    title: '',
    releaseDate: '',
    gotAnOscar: false,
  });

  const { AlertComponet, displayAlert, alertMsg } = useAlert();
  const { DialogueComponent, dialogueDetails, displayDialogue } = useDialogue();

  const movieCollectionRef = collection(db, 'movies');

  const closeForm = () => {
    setNewMovie({
      title: '',
      releaseDate: '',
      gotAnOscar: false,
    });

    setLoading(false);
  };

  const getMovieList = async () => {
    // Read the data from database and set movie list to be = data;
    try {
      const data = await getDocs(movieCollectionRef);
      const filteredData = data.docs.map((docu) => ({
        ...docu.data(),
        id: docu.id,
      }));
      setMovieList(filteredData);

      console.log('this data', data, filteredData);
    } catch (err) {
      displayAlert('an erro occured in useEffect');
    }

    closeForm();
  };

  const deleteMovie = async (movieId) => {
    // takes 3 parameters
    const movie = doc(db, 'movies', movieId);
    const options = {
      message2: '',
      message3: 'you are about to delete this movie',
      agreeTxt: 'Delete',
      disagreeTxt: 'Cancel',
      fxntoCall: async () => {
        setLoading(true);
        deleteDoc(movie).finally(() => getMovieList());
      },
    };

    displayDialogue(options);
  };

  const upDateTitle = (movieId) => {
    const movie = doc(db, 'movies', movieId);
    updateDoc(movie); // this takes 2 param, the old and the updated one
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (!newMovie.title || !newMovie.releaseDate) {
      displayAlert('missing movie info');
      return;
    }

    setLoading(true);

    await addDoc(movieCollectionRef, newMovie)
      .then((res) => {
        console.log('res', res);
        getMovieList();
      })
      .catch((er) => console.error(er))
      .finally(() => {
        setLoading(false);
        setMovieForm(false);
      });
  };

  React.useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <StyledLanding>
        {alertMsg.show && <AlertComponet />}
        {dialogueDetails.show && <DialogueComponent />}

        {loading && <Loader />}

        <NavBar />
        <h2>Movies</h2>

        {movieForm && (
          <form onSubmit={handlesubmit}>
            <p>upload movie</p>
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
          <p
            className="togle_form"
            onClick={() => setMovieForm((prev) => !prev)}
          >
            {movieForm ? 'cancel' : '+Add Movie'}
          </p>

          {movieList.map((movie) => (
            <Movie key={movie?.id} movie={movie} deleteMovie={deleteMovie} />
          ))}
        </div>
      </StyledLanding>

      <Footer />
    </>
  );
}

export default AuthGaurd(Landing);

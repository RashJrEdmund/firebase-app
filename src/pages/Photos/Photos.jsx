/* eslint-disable */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Images from '../../components/Images/Images';
import Footer from '../../components/Footer/Footer';
import StyledPhotos from './StyledPhotos';
import { storage } from '../../config/firebase';
import Loader from '../../components/Loader/Loader';
import useAlert from '../../hooks/UseAlert';
import { ref, uploadBytes } from 'firebase/storage';

const arrImages = [
  {
    src: 'https://cn.i.cdn.ti-platform.com/content/2017/ben-10/showpage/sa/b10_sq.28167bbe.png',
    title: 'Kid Ben 10',
    id: 1,
  },
  {
    src: 'https://m.media-amazon.com/images/M/MV5BYmQwYTc1ZDEtMzU3My00OTIzLWE1YmEtYmUyMmMzZTI2ZWNlXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_FMjpg_UX1000_.jpg',
    title: 'Ben Tennison',
    id: 2,
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfaM3dTU3ixL-omfx5LlHsgR_7t4SdBLXsg&usqp=CAU',
    title: 'Iron Man',
    id: 3,
  },
  {
    src: 'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-1.jpg?fit=1200%2C680',
    title: 'Spiderman',
    id: 4,
  },
];

export default function Photos() {
  const [imgForm, setImgForm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const [imgPreview, setImgPreview] = React.useState(null);

  const { AlertComponet, displayAlert, alertMsg } = useAlert();
  const fileRef = useRef();

  const formErrorHandler = (msg) => {
    displayAlert(msg);
    fileRef.current.value = '';
  };

  const handleSetFile = ({ target: { files } }) => {
    const previewPath = URL.createObjectURL(files[0]);

    if (
      !['jpeg', 'png', 'svg', 'jpg'].includes(files[0].type.split('/').pop())
    ) {
      return formErrorHandler('invalid file type');
    }

    const { size } = files[0];
    if (size / (1024 * 1024) > 3) {
      return formErrorHandler('file too large, 3Mb at most');
    }

    setFile(files[0]);
    setImgPreview(previewPath);
  };

  const handleFilesubmit = async (e) => {
    e.preventDefault();
    if (!file) return displayAlert('no file detected');

    setLoading(true);
    const projectImagesRef = ref(
      storage,
      `projectImages/${file.name + '-' + Date.now()}` // the path to where we storing. and plus, projectImages is the online folder
    );

    await uploadBytes(projectImagesRef, file)
      .then((res) => {
        setLoading(false);
        setTimeout(() => setImgPreview(null), 2500);

        displayAlert('file uploaded');
      })
      .catch(() => {
        setLoading(false);
        displayAlert('could not upload file');
      })
      .finally(() => setFile(null));
  };

  return (
    <>
      <StyledPhotos>
        {alertMsg.show && <AlertComponet />}
        {loading && <Loader message="uploading file..." />}

        <NavBar />

        {!imgForm && (
          <form onSubmit={handleFilesubmit}>
            <p>upload a file</p>
            {imgPreview && (
              <div
                className="preview_img"
                title="preview"
                style={{ backgroundImage: `Url(${imgPreview})` }}
              />
            )}

            <input
              ref={fileRef}
              type="file"
              // accept="image/jpeg, image/png, image/jpg, image/svg"
              placeholder="add file"
              onChange={handleSetFile}
            />

            <button type="submit">Upload file</button>
          </form>
        )}

        <div className="movie_div">
          <p className="togle_form" onClick={() => setImgForm((prev) => !prev)}>
            {imgForm ? 'cancel' : '+Add File'}
          </p>

          {arrImages.map((image) => (
            <Images image={image} key={image.id} />
          ))}
        </div>
      </StyledPhotos>
      <Footer />
    </>
  );
}

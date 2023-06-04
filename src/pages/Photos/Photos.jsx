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
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { handleFileUpload } from '../../services/utils';

export default function Photos() {
  const [imgForm, setImgForm] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const [imgPreview, setImgPreview] = React.useState(null);
  const [onlineImgList, setOnlineImgList] = React.useState(
    []
  ); /* onlineImgList is supposed to look like {src: string, title: string, id: number} */

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const utilObj = {
      fileRef,
      file,
      setFile,
      setImgPreview,
      setLoading,
      displayAlert,
      getOnlineImages,
    };

    handleFileUpload(utilObj);
  };

  // const getOnlineImages = () => {
  //   const onlineImageRef = ref(storage, 'projectImages/');

  //   listAll(onlineImageRef).then((res) => {
  //     res.items.forEach((imgObj) => {
  //       console.log('this imgObj', imgObj);
  //       getDownloadURL(imgObj).then((imgUrl) => {
  //         setOnlineImgList((prev) => {
  //           const newId = 1; /*  || prev.length > 0 ? prev.pop().id + 1 : 1 */
  //           const newImgItem = {
  //             src: imgUrl,
  //             title: imgObj.name,
  //             id: newId,
  //           };

  //           return [...prev, newImgItem];
  //         });
  //       });
  //     });
  //   });
  // };

  const [imgArr, setImagArr] = React.useState([]);

  const getOnlineImages = () => {
    const onlineImageRef = ref(storage, 'projectImages/');

    listAll(onlineImageRef).then((res) => {
      console.log('this', res);
      // return;
      // const imgArr = [];
      res.items.forEach(async (imgObj) => {
        console.log('this imgObj', imgObj);
        await getDownloadURL(imgObj).then((imgUrl) => {
          const newImgItem = {
            src: imgUrl,
            title: imgObj.name,
            id: 1 /* || imgArr.length > 0 ? imgArr.pop().id+1 : 1 */,
          };

          // imgArr.push(newImgItem);
          setImagArr((prev) => [...prev, newImgItem]);
        });
      });
    });
  };

  React.useEffect(() => {
    getOnlineImages();
  }, []);

  React.useEffect(() => {
    console.clear();
    console.log('i rendered', onlineImgList);
    // const unique =

    const unique = Array.from(new Set(imgArr));

    setOnlineImgList((prev) => [...prev, ...unique]);
  }, [imgArr]);

  return (
    <>
      <StyledPhotos>
        {alertMsg.show && <AlertComponet />}
        {loading && <Loader message="uploading file..." />}

        <NavBar />

        {!imgForm && (
          <form onSubmit={handleSubmit}>
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

          {onlineImgList?.map((image) => (
            <Images image={image} key={image.id} />
          ))}
        </div>
      </StyledPhotos>
      <Footer />
    </>
  );
}

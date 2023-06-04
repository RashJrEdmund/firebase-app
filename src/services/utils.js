/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../config/firebase';

export const handleFileUpload = async (utilOject) => {
  const {
    fileRef,
    file,
    setFile,
    setImgPreview,
    setLoading,
    displayAlert,
    getOnlineImages,
  } = utilOject;

  if (!file) return displayAlert('no file detected');

  setLoading(true);

  const fileNameAndExtensionArr = `projectImages/${`${file.name
    .split('.')
    .shift()}-${Date.now()}.${file.name.split('.').pop()}`}`;

  // the ref below takes two parrametes
  // storage, from firestore, and the file path inlcuing online folder name

  const projectImagesRef = ref(storage, fileNameAndExtensionArr);

  await uploadBytes(projectImagesRef, file)
    .then(({ metadata: { contentType } }) => {
      setLoading(false);
      setTimeout(() => {
        setImgPreview(null);
        fileRef.current.value = '';
      }, 2500);

      displayAlert(`${contentType?.split('/').shift() || 'file'} uploaded`);
      getOnlineImages();
    })
    .catch(() => {
      setLoading(false);
      displayAlert('could not upload file');
    })
    .finally(() => setFile(null));
};

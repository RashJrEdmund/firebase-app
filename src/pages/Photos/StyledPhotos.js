import styled from '@emotion/styled';

const StyledPhotos = styled.div`
  background-color: #f5f5f5;
  height: fit-content;
  min-height: calc(100vh - 20px);
  padding: 100px 0;

  form {
    display: flex;
    flex-direction: column;
    width: min(97vw, 400px);
    height: fit-content;
    padding: 10px;
    margin: 2rem auto;
    gap: 15px;

    .preview_img {
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 260px;
      background-color: #18191a;
      margin: 0 auto;
      height: 260px;
    }

    input {
      height: 30px;
      padding: 5px;
    }

    button {
      background-color: #18191a;
      color: gold;
      font-weight: 600;
      width: 100%;
      padding: 10px;
      box-shadow: 0 0 10px #222;
    }
  }

  .movie_div {
    padding: 20px;
    width: min(97vw, 700px);
    min-height: 400px;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;

    .togle_form {
      position: absolute;
      color: #000;
      font-weight: 600;
      cursor: pointer;
      top: -40px;
      left: 0;
    }
  }

  @media only screen and (max-width: 650px) {
    .movie_div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 440px) {
    .movie_div {
      grid-template-columns: 1fr;
    }
  }
`;

export default StyledPhotos;

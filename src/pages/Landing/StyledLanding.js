import styled from '@emotion/styled';

const StyledLanding = styled.div`
  background-color: #f5f5f5;
  height: fit-content;
  min-height: calc(100vh - 20px);
  padding: 100px 0;

  .movie_div {
    padding: 20px;
    width: min(97vw, 700px);
    min-height: 400px;
    margin: 3rem auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    gap: 20px;

    .togle_form {
      position: absolute;
      color: #000;
      font-weight: 600;
      cursor: pointer;
      top: -40px;
      left: 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: min(97vw, 400px);
    height: fit-content;
    padding: 10px;
    margin: 2rem auto;
    gap: 15px;

    input {
      height: 30px;
      padding: 5px;
    }

    label {
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: center;
      gap: 10px;
      color: #a52a2a;
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

export default StyledLanding;

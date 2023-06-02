import styled from '@emotion/styled';

const StyledLanding = styled.div`
  background-color: #f5f5f5;
  height: fit-content;
  min-height: 100vh;
  padding: 100px 0;

  .movie_div {
    padding: 20px;
    width: min(97vw, 600px);
    min-height: 400px;
    margin: 3rem auto;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
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
      background-color: blueviolet;
      width: 100%;
      padding: 10px;
      box-shadow: 0 0 10px #222;
    }
  }
`;

export default StyledLanding;

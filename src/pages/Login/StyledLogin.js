import styled from '@emotion/styled';

const StyledLogin = styled.div`
  height: fit-content;
  min-height: 100vh;

  .form_field {
    border: 1px solid #000;
    width: min(97vw, 600px);
    height: fit-content;
    margin: 3rem auto;
    padding: 10px 5px 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      text-align: left;
      width 100%;
      margin: 0 0 10px;
    }

    input {
      width: 100%;
      height: 40px;
      padding: 5px;
      margin: 0 0 5px;
    }

    button {
      width: 100%;
      height: 40px;
      padding: 5px;
      background-color: #000;
      color: #f5f5f5;
      font-size: 17px;
      font-weight: 600;

      &:nth-of-type(2) {
        background-color: steelblue;
      }
    }
  }
`;

export default StyledLogin;

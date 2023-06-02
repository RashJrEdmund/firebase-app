import styled from '@emotion/styled';

const StyledNavBar = styled.div`
  background-color: #000;
  color: #f5f5f4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  min-height: 70px;
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    cursor: pointer;
  }

  ul {
    list-style: none;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 15px;

    li {
      border: 1px solid #000;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
`;

export default StyledNavBar;

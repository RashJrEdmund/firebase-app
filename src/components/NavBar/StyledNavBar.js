import styled from '@emotion/styled';

const StyledNavBar = styled.div`
  background-color: #18191a;
  color: #f5f5f4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  z-index: 3;
  padding: 10px 0;

  .container {
    width: min(100%, 1224px);
    height: fit-content;
    padding: 10px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      cursor: pointer;

      &:hover {
        color: gold;
      }
    }

    ul {
      list-style: none;
      width: fit-content;
      display: flex;
      align-items: center;
      gap: 15px;

      & > li,
      & > span {
        border: 1px solid #000;
        padding: 5px 10px;
        cursor: pointer;
        position: relative;

        &.profile {
          background-color: ${({ location }) =>
            location === 'profile' ? 'gold' : 'unset'};
        }

        &.photos {
          background-color: ${({ location }) =>
            location === 'photos' ? 'gold' : 'unset'};
        }

        /* &.profile {
          background-color: ${({ profile }) => (profile ? 'gold' : 'unset')};
        }

        &.photos {
          background-color: ${({ photos }) => (photos ? 'gold' : 'unset')};
        } */

        &:hover {
          color: gold;
        }
      }
    }
  }
`;

export default StyledNavBar;

import React from 'react';
import styled from '@emotion/styled';

export default function Footer() {
  const StyledFooter = styled.div`
    background-color: #18191a;
    width: 100%;
    height: fit-content;
    padding: 1.5rem 0;

    .container {
      width: min-content(100%, 1224px);
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;
      justify-content: center;

      .col_1,
      .col_2 {
        color: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;

        p {
          &:hover {
            color: #1da1f2;
            cursor: pointer;
          }
        }
      }
    }
  `;

  return (
    <StyledFooter>
      <div className="container">
        <div className="col_1">
          <p>Actors</p>
          <p>Producers</p>
          <p>Top shows</p>
          <p>celebrity News</p>
        </div>
        <div className="col_2">
          <p>About us</p>
          <p>Donate</p>
        </div>
      </div>
    </StyledFooter>
  );
}

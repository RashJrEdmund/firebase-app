/* eslint-disable react/prop-types */
import styled from '@emotion/styled';
import React from 'react';

export default function Movie({ movie, deleteMovie }) {
  const StyledMovie = styled.div`
    height: 250px;
    width: min(100%, 250px);
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 10px;
    background-color: #18191a;
    box-shadow: 0 0 10px #000;
    position: relative;
    margin: 10px auto;

    h2 {
      color: gold;
      text-align: center;
      width: 100%;
    }

    p {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
      color: #f5f5f5;
      margin: 10px 0;
      width: 100%;
      white-space: nowrap;
    }

    label {
      color: #f5f5f5;
      white-space: nowrap;
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%);
      white-space: nowrap;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .del_btn {
      background-color: #a52a2a;
      padding: 2px 5px;
      position: absolute;
      bottom: -20px;
      right: 0;
      transition: 0.4s;

      &:hover {
        scale: 1.05;
      }
    }
  `;

  return (
    <StyledMovie>
      <h2>{movie?.title}</h2>

      <p>release Date: {movie?.releaseDate}</p>

      <label htmlFor={movie.id}>
        got an Oscar
        <input id={movie.id} type="checkbox" checked={movie.gotAnOscar} />
      </label>

      <button
        className="del_btn"
        type="button"
        onClick={() => deleteMovie(movie.id)}
      >
        delete
      </button>
    </StyledMovie>
  );
}

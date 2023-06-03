/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StyledTypes = styled.ul`
  background-color: #18191a;
  width: fit-content;
  min-width: min(90vw, 170px);
  height: fit-content;
  padding: 10px;
  margin: 30px 0 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  list-style: decimal;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > li,
  & > span {
    border: none;
    width: 100%;
  }
`;

const StyledNest = styled.ul`
  background-color: #18191a;
  width: fit-content;
  min-width: min(90vw, 170px);
  height: fit-content;
  padding: 10px;
  position: absolute;
  top: 0;
  left: calc(-50% - 15px);
  transform: translate(-50%);
  list-style: decimal;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    border: none;
    width: 100%;
  }
`;

function NestedTypes() {
  return (
    <StyledNest>
      <li>superhero</li>
      <li>Villain</li>
      <li>UFO</li>
    </StyledNest>
  );
}

export default function Types() {
  const navigate = useNavigate();
  const [showNest, setShowNest] = useState(false);
  return (
    <StyledTypes>
      <li onClick={() => navigate('/photos')}>Photos</li>
      <span
        onMouseOver={() => setShowNest(true)}
        onMouseOut={() => setShowNest(false)}
      >
        <li onClick={() => navigate('/')}>Movies</li>
        {showNest && <NestedTypes />}
      </span>
      <li>Art</li>
    </StyledTypes>
  );
}

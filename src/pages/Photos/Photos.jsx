import React from 'react';
import styled from '@emotion/styled';
import NavBar from '../../components/NavBar/NavBar';
import Images from '../../components/Images/Images';
import Footer from '../../components/Footer/Footer';

const StyledPhotos = styled.div`
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
    gap: 20px;
  }
`;

export default function Photos() {
  const arrImages = [
    {
      src: 'https://cn.i.cdn.ti-platform.com/content/2017/ben-10/showpage/sa/b10_sq.28167bbe.png',
      title: 'ben 10',
      id: 1,
    },
    {
      src: 'https://m.media-amazon.com/images/M/MV5BYmQwYTc1ZDEtMzU3My00OTIzLWE1YmEtYmUyMmMzZTI2ZWNlXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_FMjpg_UX1000_.jpg',
      title: 'ben 10',
      id: 2,
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfaM3dTU3ixL-omfx5LlHsgR_7t4SdBLXsg&usqp=CAU',
      title: 'ben 10',
      id: 3,
    },
    {
      src: 'https://www.denofgeek.com/wp-content/uploads/2021/12/spider-man-1.jpg?fit=1200%2C680',
      title: 'ben 10',
      id: 4,
    },
  ];
  return (
    <>
      <StyledPhotos>
        <NavBar />

        <div className="movie_div">
          {arrImages.map((image) => (
            <Images image={image} key={image.id} />
          ))}
        </div>
      </StyledPhotos>
      <Footer />
    </>
  );
}

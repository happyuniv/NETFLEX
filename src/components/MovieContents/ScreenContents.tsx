import { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../../api';
import { MovieDataType } from '../../App';
import Youtube from 'react-youtube';

type props = {
  movies: MovieDataType[];
  screenMovie: MovieDataType;
  setScreenMovie: React.Dispatch<
    React.SetStateAction<MovieDataType | undefined>
  >;
};

const Container = styled.div`
  flex: 1;
  padding: 1rem;

  @media screen and (max-width: 800px) {
    order: 1;
    flex-basis: 100%;
  }
`;
const YoutubeContainer = styled.div`
  iframe {
    min-height: 30rem;
  }
`;

const Poster = styled.div``;

const ScreenContents = ({ movies, screenMovie, setScreenMovie }: props) => {
  useEffect(() => {
    const getMovieVideo = async () => {
      try {
        const videos = await api.fetchMovieVideo(screenMovie.id);
        const trailerId = videos.results.find(
          (video: { type: string }) => video.type === 'Trailer'
        ).key;
        setVideoId(trailerId);
      } catch (e) {
        console.log(e);
      }
    };
    getMovieVideo();
  }, [screenMovie.id]);

  const [videoId, setVideoId] = useState('');

  const videoOptions = {
    width: '100%',
    height: 'auto',
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  };

  return (
    <>
      <Container>
        {videoId ? (
          <YoutubeContainer>
            <Youtube videoId={videoId} opts={videoOptions} />
          </YoutubeContainer>
        ) : (
          <Poster>{screenMovie.title}</Poster>
        )}
      </Container>
    </>
  );
};

export default ScreenContents;

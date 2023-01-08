import { useEffect, useState } from 'react';
import styled from 'styled-components';
import api, { IMAGE_BASE_URL } from '../../api';
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
    padding: 0 5rem;
  }
`;
const YoutubeContainer = styled.div`
  iframe {
    min-height: 30rem;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
`;

const ScreenContents = ({ movies, screenMovie, setScreenMovie }: props) => {
  useEffect(() => {
    const getMovieVideo = async () => {
      try {
        const videos = await api.fetchMovieVideo(screenMovie.id);
        const trailer = videos.results.find(
          (video: { type: string }) => video.type === 'Trailer'
        );
        if (trailer) setVideoId(trailer.key);
        else changeMovie();
      } catch (e) {
        console.log(e);
      }
    };

    const videoTimer = setTimeout(getMovieVideo, 5000);

    return () => clearTimeout(videoTimer);
  }, [screenMovie.id]);

  const [videoId, setVideoId] = useState('');
  const videoOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 1,
    },
  };

  const changeMovie = () => {
    setVideoId('');
    let randomMovie = movies[Math.floor(Math.random() * movies.length)];
    while (screenMovie.id === randomMovie.id) {
      randomMovie = movies[Math.floor(Math.random() * movies.length)];
    }
    setScreenMovie(randomMovie);
  };

  return (
    <>
      <Container>
        {videoId ? (
          <YoutubeContainer>
            <Youtube
              videoId={videoId}
              opts={videoOptions}
              onEnd={changeMovie}
            />
          </YoutubeContainer>
        ) : (
          <Poster src={`${IMAGE_BASE_URL}/${screenMovie.backdrop_path}`} />
        )}
      </Container>
    </>
  );
};

export default ScreenContents;

import styled from 'styled-components';

const Wrapper = styled.input`
  position: absolute;
  left: calc(50% + 50px);
  transform: translateX(-50%);
  width: 8rem;
  height: 2rem;
  border: none;
  border-radius: 1rem;
  outline: none;
  opacity: 0.9;
  text-align: center;
  /* background-color: inherit; */
  /* background-color: #c9cdd0; */
`;

const SearchMovie = () => {
  return (
    <Wrapper
      type='text'
      placeholder='Search movie'
      onFocus={(e) => {
        e.target.value = '';
        e.target.placeholder = '';
      }}
      onBlur={(e) => {
        e.target.placeholder = 'Search movie';
      }}
    />
  );
};

export default SearchMovie;

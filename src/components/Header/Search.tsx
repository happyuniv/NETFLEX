import styled from 'styled-components';

const Input = styled.input`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 15rem;
  height: 3.5rem;
  border: none;
  border-radius: 1.6rem;
  font-size: 1.6rem;
  text-align: center;
  outline: none;
  opacity: 0.9;
  transition: all 1s;

  &:hover {
    ::placeholder {
      color: white;
    }
    background-color: #776d6d77;
  }

  &:focus {
    background-color: white;
  }
`;

const Search = () => {
  return (
    <>
      <Input
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
    </>
  );
};

export default Search;

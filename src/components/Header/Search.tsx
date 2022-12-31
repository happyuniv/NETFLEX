import { useState } from 'react';
import styled from 'styled-components';

type props = {
  searchMovie: (keyword: string) => void;
};

const Form = styled.form`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Input = styled.input`
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

const Search = ({ searchMovie }: props) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovie(keyword);
  };
  return (
    <>
      <Form onSubmit={handleSearch}>
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
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
      </Form>
    </>
  );
};

export default Search;

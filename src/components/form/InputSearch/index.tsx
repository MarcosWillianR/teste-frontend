import React, { InputHTMLAttributes, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Container } from './styles';

const InputSearch: React.FC<InputHTMLAttributes<HTMLInputElement>> = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container isContainerFocused={isFocused}>
      <FiSearch />
      <input
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  );
};

export default InputSearch;

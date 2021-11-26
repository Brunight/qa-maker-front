import React from 'react';

import { Container, StyledTextarea } from './styles';

const Textarea = (props) => {
  return (
    <Container>
      <StyledTextarea {...props} />
    </Container>
  );
}

export default Textarea;
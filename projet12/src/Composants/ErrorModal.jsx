import React from 'react';
import { StyledModal, ErrorMessage, CloseButton } from '../Pages/userIndex.styled';
function Error({ error, onClose }) {
  if (!error) {
    return null; 
  }

  return (
    <StyledModal>
       <CloseButton onClick={onClose}>&times;</CloseButton>
      <ErrorMessage>
        {error}
      </ErrorMessage>
    </StyledModal>
  );
};

Error.defaultProps = {
  error: "Une erreur inconnue a été rencontrée",
};

export default Error;

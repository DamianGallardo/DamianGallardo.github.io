import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/system';

const CustomIconButton = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '2px solid transparent',
  backgroundColor: theme.palette.background.default,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.selected': {
    border: '2px solid red',
  },
}));

const ImageSelectionButton = ({ selected, onClick }) => {
  return (
    <CustomIconButton onClick={onClick} className={selected ? 'selected' : ''} />
  );
};

export default ImageSelectionButton;

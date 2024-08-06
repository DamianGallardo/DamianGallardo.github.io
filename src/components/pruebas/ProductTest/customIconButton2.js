import { styled } from '@mui/system';
import { IconButton } from '@mui/material';

const CustomIconButton2 = styled(IconButton)(({ theme, isEven }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '2px solid blue',
  backgroundColor: isEven ? '#F0ECE1' : '#D7D5CB', // Alternar colores
  margin: '0 5px',
}));

export default CustomIconButton2
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';

const CustomIconButton1 = styled(IconButton)(({ theme, isEven }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  border: '2px solid blue',
  backgroundColor: isEven ? '#FFF' : '#EAE6CA', // Alternar colores
  margin: '0 5px',
}));

export default CustomIconButton1
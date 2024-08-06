import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button, Typography } from '@material-ui/core';

// Estilos del modal
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: 600,
    width: '80%',
    maxHeight: '80vh',
    overflowY: 'auto',
    textAlign: 'center',
  },
}));

const ProductModal = ({ open, handleClose, product }) => {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>
      <img src={product.image} alt={product.titleAlt} style={{ maxWidth: '100%', maxHeight: 400, objectFit: 'contain' }} />
      <Typography variant="body1" style={{ marginTop: 20 }}>
        {product.description}
      </Typography>
      <Typography variant="subtitle1" style={{ marginTop: 10 }}>
        Specifications:
      </Typography>
      <ul>
        {product.specs.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>
      <Button variant="contained" color="primary" onClick={handleClose} style={{ marginTop: 20 }}>
        Close
      </Button>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="product-modal-title"
      aria-describedby="product-modal-description"
      className={classes.modal}
    >
      {body}
    </Modal>
  );
};

export default ProductModal;

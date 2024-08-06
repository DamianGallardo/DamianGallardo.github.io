import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Typography, Button, Grid, IconButton, Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '60%',  // Ajusta el ancho del modal
    height: 'auto',  // Mantiene la altura original
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default function ProductModal({ open, onClose, product }) {
  const classes = useStyles();

  // Verificación de null para el producto
  if (!product) {
    return null;
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.modal}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Box sx={{ my: 5 }} /> {/* Espaciador */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={product.image} alt={product.titleAlt} style={{ width: '100%' }} />
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
            <Typography variant="h5" id="simple-modal-title">
              {product.title}
            </Typography>
            <Box mt={3} />
            <Typography variant="body1" id="simple-modal-description">
              {product.description}
            </Typography>
            <Box mt={5} />
            <Typography variant="body1" id="simple-modal-specs">
              {product.specs}
            </Typography>
            <Button variant="contained" color="primary" href={product.link} target="_blank">
              Ficha Técnica
            </Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
}

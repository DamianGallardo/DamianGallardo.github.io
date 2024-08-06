import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import emailjs from 'emailjs-com';

const Formulario = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postulacion_al_puesto_de: 'Ventas',
    document: null,
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [fileSelected, setFileSelected] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        document: file,
      });
      setFileName(file.name);
      setFileSelected(true);
    } else {
      setFormData({
        ...formData,
        document: null,
      });
      setFileName('');
      setFileSelected(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      const result = await emailjs.sendForm('service_1jj0hbi', 'template_ny7hn25', formDataToSend, 'Io4d1xG6ByezQKfG7');
      console.log('Correo enviado:', result.text);
      setMessage('La postulación se ha enviado correctamente.');
      setMessageType('success');
    } catch (error) {
      console.error('Error al enviar correo:', error.text);
      setMessage(`Hubo un error al enviar la postulación. Inténtalo de nuevo.`);
      setMessageType('error');
    } finally {
      setFormData({
        firstname: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        state: '',
        postulacion_al_puesto_de: 'Ventas',
        document: null,
      });
      setFileSelected(false);
      setFileName('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}
    >
      <TextField
        label="Nombre Completo"
        name="firstname"
        value={formData.firstname}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Número de teléfono"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Correo"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Dirección"
        name="address"
        value={formData.address}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Ciudad"
        name="city"
        value={formData.city}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Estado o región"
        name="state"
        value={formData.state}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Postulación al puesto de"
        name="postulacion_al_puesto_de"
        value={formData.postulacion_al_puesto_de}
        onChange={handleChange}
        fullWidth
        required
      />
      <Button
        variant="contained"
        component="label"
        startIcon={<CloudUploadIcon />}
        sx={{
          backgroundColor: fileSelected ? 'green' : 'default',
          '&:hover': {
            backgroundColor: fileSelected ? 'darkgreen' : 'default',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {fileName || 'Adjuntar Documento'}
        <input
          type="file"
          name="document"
          hidden
          onChange={handleFileChange}
        />
      </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
      >
        Enviar
      </Button>
      {message && (
        <Typography
          sx={{ marginTop: 2, color: messageType === 'success' ? 'green' : 'red' }}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Formulario;

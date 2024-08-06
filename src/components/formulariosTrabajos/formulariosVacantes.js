import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Link,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Collapse
} from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import './App.css'; // Asegúrate de crear este archivo para las animaciones

const HubspotForm = ({ formId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '46802650',
          formId: formId,
          target: `#hubspot-form-${formId}`,
          onFormSubmit: () => {
            alert('Gracias por enviar el formulario.');
          }
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [formId]);

  return <div id={`hubspot-form-${formId}`}></div>;
};

const JobList = () => {
  const [openFormIndex, setOpenFormIndex] = useState(null);
  const [locationFilter, setLocationFilter] = useState('');

  const jobs = [
    {
      title: 'Ejecutivo de Ventas',
      location: 'Guadalajara, Jalisco',
      date: 'Networking',
      company: 'Metal Roofing',
      companyLogo: '/assets/logo/MR-Cuadrado_Mesa de trabajo 1.png',
      direction: 'Carr. Guadalajara-Chapala #1208, Col. La Calera C.P. 45680',
      formId: '5359d84e-49af-46b1-93eb-5e722410761b',
      directionUrl: 'https://maps.app.goo.gl/23ZuGpiq9bckD5BH9'
    },
    {
      title: 'Ejecutivo de Ventas',
      location: 'Guadalupe, Nuevo León',
      date: 'Networking',
      company: 'Metal Roofing',
      companyLogo: '/assets/logo/MR-Cuadrado_Mesa de trabajo 1.png',
      direction: 'Eje Metropolitano 34 1867, Valle Soleado, Guadalupe CP. 67115',
      formId: '08c0e82d-facd-4aa5-b3ee-9d21f485113f',
      directionUrl: 'https://maps.app.goo.gl/RjMFowWbowFSqytf9'
    },
    {
      title: 'Ejecutivo de Ventas',
      location: 'López Mateos, Ciudad de México',
      date: 'Hibrido',
      company: 'Metal Roofing',
      companyLogo: '/assets/logo/MR-Cuadrado_Mesa de trabajo 1.png',
      direction: 'Carr. Atizapán Villa Nicolás Romero 46, Mexico Nuevo, CP. 52918',
      formId: 'db2f19ee-c125-4bf8-8204-c486bad4df5e',
      directionUrl: 'https://maps.app.goo.gl/YjZQjNupVirnhdUC6'
    },
    {
      title: 'Gerente de Marketing',
      location: 'Guadalajara, Jalisco',
      date: 'Marketing Digital',
      company: 'Metal Roofing',
      companyLogo: '/assets/logo/MR-Cuadrado_Mesa de trabajo 1.png',
      direction: 'Av. Patria 40, Vallarta la Patria, Zapopan, CP. 45020',
      formId: 'f5f35a08-98fa-45ff-ab6a-a5bde3910e7f',
      directionUrl: 'https://maps.app.goo.gl/ZPsuTPM8anzmjbm27'
    },
    {
      title: 'Operador (Chofer)',
      location: 'Guadalupe, Nuevo León',
      date: 'Manejo de Torton',
      company: 'LIA (Logistica para la industria del Acero)',
      companyLogo: '/assets/Brands/LiaLogistic-Logotipo_Mesa de trabajo 1.png',
      direction: 'Eje Metropolitano 34 1867, Valle Soleado, Guadalupe CP. 67115',
      formId: '2c5617dc-0b57-4c5d-8bf7-516d60fc8a4d',
      directionUrl: 'https://maps.app.goo.gl/RjMFowWbowFSqytf9'
    },
    /* {
      title: 'Compras',
      location: 'Guadalajara, Jalisco',
      date: 'Compras 2',
      company: 'Metal Roofing',
      companyLogo: '/assets/logo/MR-Cuadrado_Mesa de trabajo 1.png',
      direction: 'Modesto Alanis M. #2400-6, Misión del Valle C.P. 67118',
      formId: 'f8af97bf-f533-44cd-8fdf-4cc45a692f32',
      directionUrl: 'https://maps.app.goo.gl/CQMmf3VMtemtYiL8A'
    }*/
  ];

  const filteredJobs = locationFilter
    ? jobs.filter((job) => job.location.includes(locationFilter))
    : jobs;

  const handleToggleForm = (index) => {
    setOpenFormIndex(openFormIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <FormControl style={{ margin: '20px', minWidth: 200 }}>
        <InputLabel id="location-select-label">Ciudad</InputLabel>
        <Select
          labelId="location-select-label"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          label="Ciudad"
        >
          <MenuItem value=""><em>Todos</em></MenuItem>
          <MenuItem value="Jalisco">Jalisco</MenuItem>
          <MenuItem value="Ciudad de México">Ciudad de México</MenuItem>
          <MenuItem value="Nuevo León">Nuevo León</MenuItem>
          <MenuItem value="Sinaloa">Sinaloa</MenuItem>
        </Select>
      </FormControl>

      <TableContainer component={Paper} style={{ maxWidth: '90%', margin: '0 auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vacante</TableCell>
              <TableCell>Descripción de puesto</TableCell>
              <TableCell>Ubicación</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Empresa</TableCell>
              <TableCell>Postúlate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredJobs.map((job, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>{job.title}</TableCell>
                  <TableCell>{job.date}</TableCell>
                  <TableCell>{job.location}</TableCell>
                  <TableCell>
                    <Link href={job.directionUrl} target="_blank" rel="noopener noreferrer">
                      {job.direction}
                    </Link>
                  </TableCell>
                  <TableCell>
                  <div style={{ textAlign: 'left' }}>
                      <img src={job.companyLogo} alt={job.company} style={{ width: '50px', height: 'auto' }} />
                      <div style={{ marginTop: '5px' }}>{job.company}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleToggleForm(index)}>
                      {openFormIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={6} style={{ paddingBottom: 0, paddingTop: 0 }}>
                    <CSSTransition
                      in={openFormIndex === index}
                      timeout={300}
                      classNames="form"
                      unmountOnExit
                    >
                      <div style={{ margin: '20px 0' }}>
                        {openFormIndex === index && <HubspotForm formId={job.formId} />}
                      </div>
                    </CSSTransition>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h4 style={{ textAlign: 'center', fontSize:'30px'}}>Bolsa de Trabajo</h4>
      <JobList />
    </div>
  );
};

export default App;

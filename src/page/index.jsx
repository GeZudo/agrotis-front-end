/* eslint-disable react/jsx-props-no-spreading */
import {
  Grid, MenuItem, Paper, TextField, Typography,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useContext } from 'react';
import FormHeader from '../components/FormHeader';
import agrotis from '../theme';
import propriedades from '../helpers/propriedadesOptions';
import labs from '../helpers/labOptions';
import sendContext from '../context/sendContext';
import GreenSnack from '../components/successSnack';

export default function MaindPage() {
  const {
    nome,
    setNome,
    dataInicial,
    setDataInicial,
    dataFinal,
    setDataFinal,
    propriedade,
    setPropriedade,
    laboratorio,
    setLaboratorio,
    obs,
    setObs,
  } = useContext(sendContext);

  const handleNameChange = ({ target: { value } }) => {
    setNome(value);
  };

  const handlePropriedadeChange = ({ target: { value } }) => {
    setPropriedade(value);
  };

  const handleLabChange = ({ target: { value } }) => {
    setLaboratorio(value);
  };

  const handleObsChange = ({ target: { value } }) => {
    setObs(value);
  };

  return (
    <Paper style={{ maxWidth: '93%' }} square>
      <ThemeProvider theme={agrotis}>
        <FormHeader />
        <Grid container spacing={2} padding="16px">
          <Grid item xs={6}>
            <TextField
              id="nome"
              label="Nome"
              variant="standard"
              fullWidth
              required
              onChange={handleNameChange}
              value={nome}
            />
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Data Inicial"
                value={dataInicial}
                onChange={(newValue) => { setDataInicial(newValue); }}
                renderInput={(params) => <TextField {...params} variant="standard" fullWidth required />}
                required
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Data Final"
                value={dataFinal}
                onChange={(newValue) => { setDataFinal(newValue); }}
                renderInput={(params) => <TextField {...params} variant="standard" fullWidth required />}
                required
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container spacing={2} padding="16px">
          <Grid item xs={6}>
            <TextField
              id="Propriedade"
              label="Propriedade"
              variant="standard"
              value={propriedade}
              onChange={handlePropriedadeChange}
              select
              fullWidth
              required
            >
              {propriedades.map((propriedadeItem) => (
                <MenuItem key={propriedadeItem.CNPJ} value={propriedadeItem.nome}>
                  <div>
                    <Typography variant="subtitle1" component="p">
                      {propriedadeItem.nome}
                    </Typography>
                    <Typography variant="caption" component="p" color="secundary">
                      {propriedadeItem.CNPJ}
                    </Typography>
                  </div>
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="laboratorio"
              label="Laboratório"
              variant="standard"
              value={laboratorio}
              onChange={handleLabChange}
              select
              fullWidth
              required
            >
              {labs.map((lab) => (
                <MenuItem key={lab.id} value={lab.nome}>
                  {lab.nome}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container padding="16px">
          <Grid item xs={12}>
            <TextField
              id="obcervacoes"
              label="Obcervações"
              variant="standard"
              fullWidth
              multiline
              rows={5}
              value={obs}
              onChange={handleObsChange}
            />
          </Grid>
        </Grid>
        <GreenSnack />
      </ThemeProvider>
    </Paper>
  );
}

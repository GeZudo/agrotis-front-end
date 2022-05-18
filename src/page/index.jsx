/* eslint-disable react/jsx-props-no-spreading */
import {
  Grid, Paper, TextField,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import FormHeader from '../components/FormHeader';
import agrotis from '../theme';

export default function MaindPage() {
  const [nome, setNome] = useState(null);

  const handleNameChange = ({ target: { value } }) => {
    setNome(value);
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
        </Grid>
      </ThemeProvider>
    </Paper>
  );
}

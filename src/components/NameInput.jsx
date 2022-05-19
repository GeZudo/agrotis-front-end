import { TextField, Grid } from '@mui/material';
import { useContext } from 'react';
import sendContext from '../context/sendContext';

export default function NameInput() {
  const { nome, setNome } = useContext(sendContext);

  const handleNameChange = ({ target: { value } }) => {
    setNome(value);
  };

  return (
    <Grid item xs={6}>
      <TextField
        id="nome"
        label="Nome"
        variant="standard"
        fullWidth
        required
        onChange={handleNameChange}
        value={nome}
        helperText={`${nome.length}/40`}
        inputProps={{ maxLength: 40 }}
      />
    </Grid>
  );
}

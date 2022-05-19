import {
  Grid, MenuItem, TextField,
} from '@mui/material';
import { useContext } from 'react';
import sendContext from '../context/sendContext';
import labs from '../helpers/labOptions';

export default function LaboratorioMenu() {
  const { laboratorio, setLaboratorio, noLaboratorio } = useContext(sendContext);

  const handleLabChange = ({ target: { value } }) => {
    setLaboratorio(value);
  };

  return (
    <Grid item xs={6}>
      <TextField
        id="laboratorio"
        label="Laboratório"
        variant="standard"
        value={laboratorio}
        onChange={handleLabChange}
        helperText={noLaboratorio && 'Error'}
        error={noLaboratorio}
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
  );
}

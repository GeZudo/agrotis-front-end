import {
  Grid, MenuItem, TextField, Typography,
} from '@mui/material';
import { useContext } from 'react';
import sendContext from '../context/sendContext';
import propriedades from '../helpers/propriedadesOptions';

export default function PropriedadeMenu() {
  const { propriedade, setPropriedade, noPropriedade } = useContext(sendContext);

  const handlePropriedadeChange = ({ target: { value } }) => {
    setPropriedade(value);
  };

  return (
    <Grid item xs={6}>
      <TextField
        id="Propriedade"
        label="Propriedade"
        variant="standard"
        value={propriedade}
        onChange={handlePropriedadeChange}
        helperText={noPropriedade && 'Error'}
        error={noPropriedade}
        className={noPropriedade && 'erro'}
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
  );
}

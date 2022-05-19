import {
  Grid, MenuItem, TextField, Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import sendContext from '../context/sendContext';
import propriedades from '../helpers/propriedadesOptions';

export default function PropriedadeMenu() {
  const { propriedade, setPropriedade, noPropriedade } = useContext(sendContext);
  const [helper, setHelper] = useState('');

  const handlePropriedadeChange = ({ target: { value } }) => {
    setPropriedade(value);
    propriedades.forEach((prop) => {
      if (prop.nome === value) {
        setHelper(`CNPJ ${prop.CNPJ}`);
      }
    });
  };

  return (
    <Grid item xs={6}>
      <TextField
        id="Propriedade"
        label="Propriedade"
        variant="standard"
        value={propriedade}
        onChange={handlePropriedadeChange}
        helperText={noPropriedade ? 'Error' : helper}
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
              {helper ? null : (
                <Typography variant="caption" component="p" color="secundary">
                  {`CNPJ ${propriedadeItem.CNPJ}`}
                </Typography>
              )}
            </div>
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
}

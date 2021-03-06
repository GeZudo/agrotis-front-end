/* eslint-disable react/jsx-props-no-spreading */
import { ptBR } from 'date-fns/locale';
import { Grid, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useContext } from 'react';
import sendContext from '../context/sendContext';

export default function FinalDate() {
  const { dataFinal, setDataFinal, noDataFinal } = useContext(sendContext);

  return (
    <Grid item xs={3}>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
        <DatePicker
          label="Data Final"
          value={dataFinal}
          onChange={(newValue) => { setDataFinal(newValue); }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              fullWidth
              required
              className={noDataFinal && 'erro'}
              helperText={noDataFinal && 'Error'}
              error={noDataFinal}
            />
          )}
          required
        />
      </LocalizationProvider>
    </Grid>
  );
}

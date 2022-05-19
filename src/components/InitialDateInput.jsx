/* eslint-disable react/jsx-props-no-spreading */
import { Grid, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useContext } from 'react';
import sendContext from '../context/sendContext';

export default function InitialDate() {
  const { dataInicial, setDataInicial, noDataInicial } = useContext(sendContext);

  return (
    <Grid item xs={3}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Data Inicial"
          value={dataInicial}
          onChange={(newValue) => { setDataInicial(newValue); }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              fullWidth
              required
              helperText={noDataInicial && 'Error'}
              error={noDataInicial}
            />
          )}
          required
        />
      </LocalizationProvider>
    </Grid>
  );
}

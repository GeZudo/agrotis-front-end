/* eslint-disable react/jsx-props-no-spreading */
import {
  Grid, TextField,
} from '@mui/material';
import { useContext } from 'react';
import sendContext from '../context/sendContext';

export default function MaindPage() {
  const { obs, setObs } = useContext(sendContext);

  const handleObsChange = ({ target: { value } }) => {
    setObs(value);
  };

  return (

    <Grid item xs={12}>
      <TextField
        id="observacoes"
        label="Observações"
        variant="standard"
        fullWidth
        multiline
        rows={5}
        value={obs}
        onChange={handleObsChange}
        helperText={`${obs.length}/1000`}
        inputProps={{ maxLength: 1000 }}
      />
    </Grid>
  );
}

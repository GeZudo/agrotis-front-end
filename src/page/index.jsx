/* eslint-disable react/jsx-props-no-spreading */
import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import FormHeader from '../components/FormHeader';
import agrotis from '../theme';

export default function MaindPage() {
  return (
    <Paper style={{ maxWidth: '93%' }} square>
      <ThemeProvider theme={agrotis}>
        <FormHeader />
      </ThemeProvider>
    </Paper>
  );
}

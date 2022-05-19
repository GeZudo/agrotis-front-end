/* eslint-disable react/jsx-props-no-spreading */
import { Grid, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import FormHeader from '../components/FormHeader';
import agrotis from '../theme';
import SuccessSnack from '../components/SuccessSnack';
import FailSnack from '../components/FailSnack';
import Header from '../components/Header';
import NameInput from '../components/NameInput';
import InitialDate from '../components/InitialDateInput';
import FinalDate from '../components/FinalDateInput';
import PropriedadeMenu from '../components/PropriedadeMenu';
import LaboratorioMenu from '../components/LaboratorioMenu';
import ObsInput from '../components/ObsInput';

export default function MaindPage() {
  return (
    <ThemeProvider theme={agrotis}>
      <Header />
      <div className="form-content">
        <Paper style={{ width: '93%' }} square>
          <FormHeader />
          <Grid container spacing={2} padding="16px">
            <NameInput />
            <InitialDate />
            <FinalDate />
          </Grid>
          <Grid container spacing={2} padding="16px">
            <PropriedadeMenu />
            <LaboratorioMenu />
          </Grid>
          <Grid container padding="16px" paddingBottom={5}>
            <ObsInput />
          </Grid>
        </Paper>
      </div>
      <SuccessSnack />
      <FailSnack />
    </ThemeProvider>
  );
}

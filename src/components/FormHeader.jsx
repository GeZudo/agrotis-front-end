import { Button, Grid, Typography } from '@mui/material';

export default function FormHeader() {
  return (
    <div className="form-header">
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h6" component="h6">
            Teste front-end
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" disableElevation>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

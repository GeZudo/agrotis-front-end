import { Alert, Snackbar } from '@mui/material';
import { useContext } from 'react';
import sendContext from '../context/sendContext';

export default function successSnack() {
  const { fail, setFail } = useContext(sendContext);
  const handleClose = () => {
    setFail(false);
  };
  return (
    <Snackbar
      autoHideDuration={6000}
      open={fail}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert onClose={handleClose} severity="warning" color="error" style={{ backgroundColor: '#D32F2F', color: 'white' }}>
        Preencha os campos obragatórios.
      </Alert>
    </Snackbar>
  );
}

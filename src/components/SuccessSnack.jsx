import { Alert, Snackbar } from '@mui/material';
import { useContext } from 'react';
import sendContext from '../context/sendContext';

export default function successSnack() {
  const { success, setSuccess } = useContext(sendContext);
  const handleClose = () => {
    setSuccess(false);
  };
  return (
    <Snackbar
      autoHideDuration={6000}
      open={success}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert onClose={handleClose} severity="success" color="success" style={{ backgroundColor: '#43A047', color: 'white' }}>
        Cadastro realizado com sucesso!
      </Alert>
    </Snackbar>
  );
}

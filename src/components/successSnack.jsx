import { Alert, Snackbar } from '@mui/material';
import { useContext } from 'react';
import sendContext from '../context/sendContext';

export default function successSnack() {
  const { open, setOpen } = useContext(sendContext);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Snackbar
      autoHideDuration={6000}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
    >
      <Alert onClose={handleClose} severity="success">
        Cadastro realizado com sucesso!
      </Alert>
    </Snackbar>
  );
}

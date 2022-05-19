import { AppBar, Toolbar } from '@mui/material';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <AppBar position="static" color="" style={{ maxHeight: '40px' }}>
      <Toolbar>
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

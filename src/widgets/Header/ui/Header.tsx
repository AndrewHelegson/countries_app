import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../entities/session/model';

export const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar className="flex justify-between">
        <Typography variant="h6" color="inherit" noWrap>
          Countries App
        </Typography>

        <Box className="flex gap-2">
          <Button color="primary" onClick={() => navigate('/')}>
            Главная
          </Button>
          <Button color="inherit" onClick={() => navigate('/country/us')}>
            Пример страны
          </Button>
          <Button color="error" onClick={handleLogout}>
            Выйти
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

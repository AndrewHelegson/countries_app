import {
    Button,
    TextField,
    Typography,
    Stack,
    Paper,
  } from '@mui/material';
  import { useUnit } from 'effector-react';
  import {
    $email,
    $password,
    $loginError,
    setEmail,
    setPassword,
    loginFx,
  } from '../model';
  import { useNavigate, useLocation } from 'react-router-dom';
  
  export const LoginForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const [
      email,
      password,
      error,
      loading,
      setEmailFn,
      setPasswordFn,
      submitLogin,
    ] = useUnit([
      $email,
      $password,
      $loginError,
      loginFx.pending,
      setEmail,
      setPassword,
      loginFx,
    ]);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      try {
        await submitLogin({ email, password });
  
        // редирект после успешного входа
        const from = location.state?.from?.pathname || '/';
        navigate(from);
      } catch {
        // ошибка уже обработана в сторах
      }
    };
  
    return (
      <Paper
        elevation={3}
        className="max-w-sm w-full mx-auto mt-20 p-6 border border-gray-200 rounded-xl"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Typography>
            admin@example.com
            123456
            </Typography>
            <Typography variant="h5" align="center">
              Авторизация
            </Typography>
  
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmailFn(e.target.value)}
              fullWidth
              required
            />
  
            <TextField
              label="Пароль"
              type="password"
              value={password}
              onChange={(e) => setPasswordFn(e.target.value)}
              fullWidth
              required
            />
  
            {error && (
              <Typography variant="body2" color="error">
                {error}
              </Typography>
            )}
  
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? 'Входим...' : 'Войти'}
            </Button>
          </Stack>
        </form>
      </Paper>
    );
  };
  
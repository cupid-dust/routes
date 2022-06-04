import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Link,
  Typography,
} from '@mui/material';
import LoginJWT from '../../components/authentication/login';

const Login: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth='sm' sx={{ py: '80px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 8,
          }}
        ></Box>
        <Card>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              p: 4,
            }}
          >
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'space-between',
                mb: 3,
              }}
            >
              <div>
                <Typography color='textPrimary' gutterBottom variant='h4'>
                  Log in
                </Typography>
                <Typography color='textSecondary' variant='body2'>
                  Log in on the internal platform
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3,
              }}
            >
              <LoginJWT />
            </Box>
            <Divider sx={{ my: 3 }} />
            <Link
              color='textSecondary'
              component={RouterLink}
              to='/authentication/register'
              variant='body2'
            >
              Create new account
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;

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

import RegisterJWT from '../../components/authentication/register';

const Register: FC = () => {
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
            mb: 8,
            display: 'flex',
            justifyContent: 'center',
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
                  Register
                </Typography>
                <Typography color='textSecondary' variant='body2'>
                  Register on the internal platform
                </Typography>
              </div>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                mt: 3,
              }}
            >
              <RegisterJWT />
            </Box>
            <Divider sx={{ my: 3 }} />
            <Link
              color='textSecondary'
              component={RouterLink}
              to='/authentication/login'
              variant='body2'
            >
              Having an account
            </Link>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Register;

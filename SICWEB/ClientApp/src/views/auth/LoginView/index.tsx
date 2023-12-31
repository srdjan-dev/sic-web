import React from 'react';
import type { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Link,
  Typography,
  makeStyles
} from '@material-ui/core';
import type { Theme } from 'src/theme';
import Page from 'src/components/Page';
import JWTLogin from './JWTLogin';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  banner: {
    backgroundColor: theme.palette.background.paper,
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  bannerChip: {
    marginRight: theme.spacing(2)
  },
  methodIcon: {
    height: 30,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  cardContainer: {
    paddingBottom: 80,
    paddingTop: 80,
  },
  cardContent: {
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    minHeight: 400
  },
  currentMethodIcon: {
    height: 40,
    '& > img': {
      width: 'auto',
      maxHeight: '100%'
    }
  }
}));


const LoginView: FC = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Registrarse"
    >
      <div className={classes.banner}>
        <Container maxWidth="md">
          <Box
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <Chip
              color="secondary"
              label="NEW"
              size="small"
              className={classes.bannerChip}
            />
            <Box
              alignItems="center"
              display="flex"
            >
              <Typography
                color="textPrimary"
                variant="h6"
              >
                SIC
              </Typography>
            </Box>
          </Box>
        </Container>
      </div>
      <Container
        className={classes.cardContainer}
        maxWidth="sm"
      >
        <Card>
          <CardContent className={classes.cardContent}>
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              mb={3}
            >
              <div>
                <Typography
                  color="textPrimary"
                  gutterBottom
                  variant="h3"
                >
                  iniciar sesión
                  
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                >
                 Iniciar sesión en la plataforma interna
                </Typography>
              </div>
            </Box>
            <Box
              flexGrow={1}
              mt={3}
            >
              <JWTLogin />
            </Box>
            <Box my={3}>
              <Divider />
            </Box>
            {/* <Link
              component={RouterLink}
              to="/register"
              variant="body2"
              color="textSecondary"
            >
              Crear una nueva cuenta
            </Link> */}
          </CardContent>
        </Card>
      </Container>
    </Page>
  );
};

export default LoginView;

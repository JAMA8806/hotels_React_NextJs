"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './navbar.module.css'
import Link from 'next/link';
import { useContext } from 'react';
import { AppContext } from '@/store/CurrentProvider';

export default function Navbar() {
  const {currentPage} = useContext(AppContext)
  const title = (current) =>{
    switch (current) {
      case 'Detail':
        return "Detalle del hotel"
      case 'Home':
        return "Buscar hotel"
      default:
        return "Bienvenido"
        break;
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}
    className={styles.box}
    >
      <AppBar
      className={styles.bar}
      >
        <Toolbar
        className={styles.toolbar}
        >
          <h3>{title(currentPage)}</h3>
          <Link
          href={"/"}>
            <Typography className={styles.Typography} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home
            </Typography>
          </Link>
          <Typography className={styles.Typography}variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacto
          </Typography>
          <Typography className={styles.Typography}variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Reservas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

import React,  {useState} from 'react';
import { makeStyles } from '@mui/styles';

import {
  AppBar,
  Typography,
  Toolbar,Button,
  IconButton,
  Container,
  Avatar,
  Menu,
  Divider,
  MenuItem
} from "@mui/material";
import Link from 'next/link';
import { AccountCircle } from '@mui/icons-material';
import styles from './Header.module.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function Header() {
  const classes = useStyles();
  const [anchorUserMenu, setAnchorUSerMenu] = useState(false)

  const openUserMenu = Boolean(anchorUserMenu)

  return (
    <>
      <AppBar position="static" elevation={3}>
        <Container maxWidth="lg">
          <Toolbar>  
            <Link href="/" passHref className={styles.title}>
              <Typography variant="h6" className={styles.title}>
                Anunx
              </Typography>
            </Link>         
            <Link href="/product" passHref className={styles.title}>
              <Typography variant="h6" className={styles.title}>
                product
              </Typography>
            </Link>         
            <Link href="/product/list" passHref className={styles.title}>
              <Typography variant="h6" className={styles.title}>
                listProducts
              </Typography>
            </Link>         
            <Link href="/auth/signin" passHref className={styles.title}>
              <Typography variant="h6" className={styles.title}>
                Login
              </Typography>
            </Link>         
            <Link href="/auth/signup" passHref className={styles.title}>
              <Typography variant="h6" className={styles.title}>
                Cadastre-se
              </Typography>
            </Link>          
            <Link href="/user/publish" passHref>
              <Button color="secondary" variant='outlined'>
                Anunciar e vender
              </Button>
            </Link>        
            <IconButton color='secondary' onClick={(e) => setAnchorUSerMenu(e.currentTarget)} className={styles.menuButton}>
              {
                true === false 
                ?  <Avatar src="" />
                :  <AccountCircle />
              }        
              <Typography variant='subtitle2' color='secondary' className={styles.userName}>
                Stefan Picciani  
              </Typography>    
            </IconButton>   

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUSerMenu(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
            >
              <Link href='/user/dashboard' passHref className={styles.linkStyle}>
                <MenuItem>Meus anúncios</MenuItem>              
              </Link>
              <Link href='/user/publish' passHref className={styles.linkStyle}>
                <MenuItem>Publicar novo anúncio</MenuItem>              
              </Link>
              <Divider/>
              <MenuItem>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>       
      </AppBar>
    </>
  );
}

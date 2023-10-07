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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: theme.palette.secondary.main,
  },
  userName: {
    marginLeft: 6,
  },
  linkStyle: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
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
            <Link href="/" passHref className={classes.title}>
              <Typography variant="h6" className={classes.title}>
                Anunx
              </Typography>
            </Link>                
            <Link href="/user/publish" passHref>
              <Button color="secondary" variant='outlined'>
                Anunciar e vender
              </Button>
            </Link>        
            <IconButton color='secondary' onClick={(e) => setAnchorUSerMenu(e.currentTarget)}>
              {
                true === false 
                ?  <Avatar src="" />
                :  <AccountCircle />
              }        
              <Typography variant='subtitle2' color='secondary' className={classes.userName}>
                Stefan Picciani  
              </Typography>    
            </IconButton>   

            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUSerMenu(null)}
              anchorOrigin={{
                vertical: 'bottom',
              }}
            >
              <Link href='/user/dashboard' passHref className={classes.linkStyle}>
                <MenuItem>Meus anúncios</MenuItem>              
              </Link>
              <Link href='/user/publish' passHref className={classes.linkStyle}>
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

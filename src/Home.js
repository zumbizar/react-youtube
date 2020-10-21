import React from 'react'
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Button, List, Divider, ListItem, ListItemIcon, ListItemText, Drawer, Box, ListSubheader } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import VideoCall from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import MoreVert from '@material-ui/icons/MoreVert'

import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'

import VideoLibrary from '@material-ui/icons/VideoLibrary'
import History from '@material-ui/icons/History'

import AddCircle from '@material-ui/icons/AddCircle'



const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
      appBar:{
          boxShadow: 'none',
          zIndex: theme.zIndex.drawer + 1,
    },
    MenuIcon: {
        paddingRight: theme.spacing(2),
        paddingRight: theme.spacing(3)
    },
    icons: {
        paddingRight: theme.spacing(2),
    },
    grow: {
        flexGrow: 1
    },
    logo: {
        height: '25px',
    },
    drawer: {
        width: '240px',
        flexShrink: 0,
      },
      drawerPaper: {
        width: '240px',
        borderRight: 'none'
      },
      listItemText: {
        fontSize: '14px'
      },
      listItem:{
        paddingTop: '4',
        paddingBottom: '4',
      },
      subheader: {
        textTransform: 'uppercase',
      },
  }))


function Home() {
const classes = useStyles()

    return(
        <div className={classes.root}>
            <AppBar color="inherit" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.MenuIcon} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <img src="/images/preto.png" alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <IconButton className={classes.icons} color="inherit">
                    <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons} color="inherit">
                    <AppsIcon />
                    </IconButton>
                    <IconButton className={classes.icons} color="inherit">
                    <MoreVert />
                    </IconButton>
                    
                    <Button startIcon={<AccountCircle />} variant='outlined' color="secondary">Fazer Login</Button>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                <List>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText,
                        }} primary={'Inicio'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<Whatshot />}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText,
                        }} primary={'Em alta'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText,
                        }} primary={'Inscrições'} />
                    </ListItem>
                    
                </List>
                <Divider />

                <List>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText,
                        }} primary={'Biblioteca'} />
                    </ListItem>
                    <ListItem button classes={{root: classes.listItem}}>
                        <ListItemIcon>{<History />}</ListItemIcon>
                        <ListItemText classes={{
                            primary: classes.listItemText,
                        }} primary={'Histórico'} />
                    </ListItem>
                </List>
                <Divider />
                    <Box p={4}>
                        <Typography variant='body2'>
                        Faça login para curtir vídeos, comentar e se inscrever.
                        </Typography>
                        <Box mt={2}>
                            <Button 
                            variant='outlined'
                            color='secondary'
                            startIcon={<AccountCircle />}
                            >
                                Fazer login
                            </Button>
                        </Box>  
                    </Box>
                    <Divider />
                    <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do youtube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>
                    <AddCircle />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText,
                    }}
                    primary={'Videos 360'}
                  />
                </ListItem>
              </List>
                </div>
            </Drawer>
        </div>
    )
}



export default Home
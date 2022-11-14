import React from 'react'
import  Container  from '@mui/material/Container'
import Typography  from '@mui/material/Typography'
import Link from '@mui/material/Link'
import  AppBar  from '@mui/material/AppBar'
import  {makeStyles}  from '@material-ui/core/styles'
import  Toolbar  from '@material-ui/core/Toolbar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import  SwipeableDrawer  from '@material-ui/core/SwipeableDrawer'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import  ListItem  from '@material-ui/core/ListItem'
import { useState } from 'react'
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import {useSelector,useDispatch} from 'react-redux'
import { toggleActions } from '../store/toggle-slice'
const navigationLinks=[
    {name:'Home',href:'#home',},
    {name:'Skills',href:'#skills',},
    {name:'Education',href:'#education',},
    {name:'Projects',href:'#projects',},
    {name:'Contact',href:'#contact',}

]

const useStyles=makeStyles((theme)=>({
    navLeft:{
        marginRight:'auto',
        cursor:'pointer'
    },
    link:{
        marginRight:'1rem',
       
        cursor:'pointer',
        // color:'#fff',
        fontWeight:'bold',
        // color:'red'
    },
    icon:{
        position:'absolute',
        top:'10px',
       right:'20px',
       color:'#EAD4D2'
    },
    list:{
        marginTop:"40px",
        // marginLeft:'1rem'
    },
    span:{
        fontSize:'1.5rem',
    },
    toggle:{
        marginLeft:'1rem',
        display:'flex',
        transform:'scale(1.3)',
        cursor:'pointer',
    }
   
}))

// Main navbar starts
const Navbar = () => {
    const styles=useStyles();
    const [open,setOpen]=useState(false)
    const isDark=useSelector(state=>state.toggle.isDark)
    const dispatch=useDispatch();
    const toggleHandle=()=>{
        dispatch(toggleActions.setDark())
    }
  return (
    <AppBar position='sticky' style={{background :'#023047',color:'#fff'}} >
    <Container maxWidth='md'>
        <Toolbar>
        <div className={styles.navLeft} id='/' >
        
            <Typography style={{display:'flex',fontWeight:'bold'}} ><span className={styles.span} style={{color:'#fb8500'}}>A</span><span>R</span></Typography>
        
        </div>
        <Hidden xsDown>
        {navigationLinks.map((item)=>{
            return(
           
                <div>
                    <Link key={item.href}
                    color='#fff'
                    variant='button'
                    underline='none'
                    sx={{ marginLeft:'1rem',fontWeight:'bold'}}
                    className={styles.link}
                    href={item.href}
                    >{item.name}</Link>
                    
                </div>
                
                
            
        )})}
        </Hidden>
        <div className={styles.toggle} onClick={toggleHandle}>
                        {!isDark && <ToggleOffOutlinedIcon/>}
                        {isDark && <ToggleOnOutlinedIcon/>}
                    </div>
        <Hidden smUp>
            <IconButton style={{color:'#fff'}}>
                <MenuIcon onClick={()=>setOpen(true)}/>
            </IconButton>
        </Hidden>
        </Toolbar>
    </Container>
    <SwipeableDrawer
   
    position='relative' anchor='right' open={open} onOpen={()=>setOpen(true)} onClose={()=>setOpen(false)}>
        <div className={styles.icon}  >
            <IconButton>
                <ChevronRightIcon style={{color:'#023047'}} onClick={()=>setOpen(false)}/>
            </IconButton>
        </div>
        <div className="divider">

        <Divider/>
        </div>
        <List className={styles.list}>

       
        {navigationLinks.map((item)=>(
            <ListItem>
            <Link key={item.href} 
            style={{color:'#023047'}}
            href={item.href}
            variant='button'
            underline='none'
            className={styles.link}
            >{item.name}</Link>
            </ListItem>

        ))}
        </List>
    </SwipeableDrawer>
    </AppBar>
  )
}

export default Navbar
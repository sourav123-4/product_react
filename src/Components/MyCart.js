import React from 'react'
import { Box, Grid, Modal,Typography } from '@material-ui/core'
import { Avatar } from '@material-ui/core';
import { Stack } from '@mui/material';
import { Button } from '@material-ui/core'
import Header from './Header';
import { blue, deepOrange, deepPurple } from '@material-ui/core/colors';
import './Styles/mycart.css'
import { Link } from 'react-router-dom';
function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };  
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Ok</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h3 id="child-modal-title">Your Product was Perchached Succesfully</h3>
            <Link to="/product"><Button onClick={handleClose}>Go To Product Page</Button></Link>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
function MyCart({product,email}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true)
    const handleClose=()=>setOpen(false)
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };  
  return (<div>
      <div className='mycart-header'>
        <Header/>
            <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>{email[0].toUpperCase()+email[1].toUpperCase()}</Avatar>
            </Stack>
      </div>
    <Grid container spacing={3}>{product.map((item)=>{
        return <Grid item xs={4} className="items">
          <img src={item.image} alt="img" width="200px" height="200px"/>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <Button variant='contained' onClick={handleOpen}>Buy Now</Button>
          <Modal 
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant='h6' component="h2">Are you Sure You Want To Buy <span>{item.title}</span></Typography>
                <ChildModal/>
                <Button onClick={handleClose}>Cancel</Button>
            </Box>
          </Modal>
        </Grid>
    })}</Grid>
    </div>
  )
}

export default MyCart
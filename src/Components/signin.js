import {React,useEffect,useState} from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import './Styles/signin.css'
import  Button  from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
function Signin(props) {
  const handleEmail=(e)=>{
    e.preventDefault()
    props.setSignEmail(e.target.value)
  }
  return (
    <div className='signIn'>
      <div className='sigin-header'>
        <Header/>
        <Link to="/signup">
          <Button variant='contained' color='primary'>
            SignUp
          </Button>
        </Link>
        </div>
        
        <hr/>
        <TextField id="standard-basic" label="email" variant="standard" onChange={handleEmail}/>
        <br></br>
        <TextField id="standard-basic" label="Password" variant="standard" onChange={e=>{props.setSignPassword(e.target.value)}}/>
        <br></br><br></br>
        {(props.signEmail==props.Email && props.signPassword==props.password)?(<Link to="/product">
            <Button variant='contained' color='primary'>
              LogIn
            </Button>
        </Link>):(<Link to='/home'><Button variant='contained' color='primary'>
              LogIn
            </Button></Link>)}
        {/* {console.log(email,password)} */}
    </div>
  )
}

export default Signin
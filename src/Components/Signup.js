import {React,useEffect,useState} from 'react'
import Header from './Header'
import {Link} from 'react-router-dom'
import './Styles/signin.css'
import  Button  from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'
import './Styles/signup.css'
function SignUp(props) {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    useEffect(()=>{
      localStorage.setItem("email",JSON.stringify(props.email))
    },[props.email])

    useEffect(()=>{
      localStorage.setItem("password",JSON.stringify(props.password))
    },[props.password])

  return (
    <div className='signIn'>
        <div className='sigup-header'>
        <Header/>
        <Link to="/signin">
          <Button variant='contained' color='primary'>
            SignIn
          </Button>
        </Link>
        </div>
        <hr/>
        <TextField id="standard-basic" label="FirstName" variant="standard" onChange={e=>setFirstName(e.target.value)}/>
        <br></br>
        <TextField id="standard-basic" label="LastName" variant="standard" onChange={e=>setLastName(e.target.value)}/>
        <br></br>
        <TextField id="standard-basic" label="email" variant="standard" onChange={e=>props.setEmail(e.target.value)}/>
        <br></br>
        <TextField id="standard-basic" label="Password" variant="standard" onChange={e=>props.setPassword(e.target.value)}/>
        <br></br><br></br>
        <Link to="/product">
          {(props.email && props.password)?
            <Button variant='contained' color='primary'>
              SignUp
            </Button>:
            <Button variant='contained' disabled>SignUp</Button>
          } 
        </Link>
        {console.log(props.email,props.password)}
    </div>
  )
}

export default SignUp
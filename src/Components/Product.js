import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './Styles/product.css'
import { Button, Grid, TextField} from '@material-ui/core'
import { Box } from '@material-ui/core'
import { InputLabel } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { Select } from '@material-ui/core'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { blue, deepOrange, deepPurple } from '@mui/material/colors';
import { blueGrey } from '@material-ui/core/colors'
function Product({products,setSearch,search,password,email,setProduct,product}) {
  const [page,setPage]=useState(0)
  const [price, setPrice] =useState('')
  const handleChange = (event) => {
    setPrice(event.target.value)
  }
  function prevpage(){
    if(page==1){
      setPage(item=>item-1)
    }
  }
  function nextpage(){
    if(page==0){
      setPage(item=>item+1)
    }
}
  return (
    <div className='container-div'>
      <div className='product-header'>
        <Header/>
        <Stack direction="row" spacing={2}>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{email[0].toUpperCase()+email[1].toUpperCase()}</Avatar>
        </Stack>
        <Link to="/mycart"><Button variant='contained' color='primary'>My Cart</Button></Link>
        </div>
        <hr/>
        <TextField id="standard-basic" label="Search" variant="standard" onChange={e=>setSearch(e.target.value)}/>
        <span width="5px"></span> 
        <FormControl sx={{ m:1, minWidth: 20 }}>
          <InputLabel id="demo-simple-select-label">Price</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={price}
            label="Price"
            onChange={handleChange}
          >
            <MenuItem value={100}>0-100</MenuItem>
            <MenuItem value={200}>0-200</MenuItem>
            <MenuItem value={500}>0-500</MenuItem>
            <MenuItem value={1000}>0-1000</MenuItem>
          </Select>
        </FormControl>
        <br></br><br></br>
        <Grid container spacing={3}>
        {products.filter((val)=>{
          if(search=="" && !price){
            return val
          }else if(val.title.toLowerCase().includes(search.toLowerCase()) && val.price<=price){
            return val
          }
        })
        .map((item)=>{
          if(item.id<=10 && page==0){
            return <Grid item xs={4} className="items">
                <Link to={`/product/${item.id}`}>
                  <img src={item.image} alt="img" width="200px" height="200px"/>
                </Link>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <Button variant='contained' onClick={()=>{
                  setProduct(()=>{
                    if (!product.includes(item)) {
                          return [...product, item]
                      }
                      return [...product]
                })
                }}>Add to Cart</Button>
                </Grid>
          }else if(item.id>10 && page==1){
            return <Grid item xs={4} className="items">
            <Link to={`/product/${item.id}`}>
              <img src={item.image} alt="img" width="200px" height="200px"/>
            </Link>
            <p>{item.title}</p>
            <p>{item.price}</p>
            <Button variant='contained' onClick={()=>{
              setProduct(()=>{
                  if (!product.includes(item)) {
                        return [...product, item]
                    }
                    return [...product]
              })
                  }}>Add to Cart</Button>
            </Grid>
          }
        })}
        </Grid>
      {page==0?"":<Button variant="contained" color='primary' onClick={prevpage}>Prev</Button>}
      {page==1?"":<Button variant="contained" color='primary' onClick={nextpage}>Next</Button>}
    </div>
  )
}

export default Product
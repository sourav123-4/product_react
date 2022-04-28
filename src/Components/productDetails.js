import React from 'react'
import {useParams} from 'react-router-dom'
import Header from './Header'
import './Styles/productDetails.css'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import { Typography } from '@material-ui/core'
function ProductDetails(props) {
    const {id}=useParams()
  return (
        <div className='details-div'>
            <Header/>
            <hr/>
            {
                props.products.map((item)=>{
                    if(id==item.id){
                        return <Card sx={{minwidth:250}} className='details-card'>
                              <CardContent>
                                <Typography>
                                <h3><span>{item.title}</span></h3>
                                </Typography>
                                <Typography>
                              <img src={item.image} alt="img" width="200px" height="200px"/>
                              </Typography>
                              <Typography>
                                <h4>Price: <span>{item.price}</span></h4>
                                <h5>Description: <span>{item.description}</span></h5>
                              </Typography>
                              </CardContent>
                            </Card>
                    }
                })
            }    
        </div>
  )
}

export default ProductDetails
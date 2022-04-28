import './App.css';
import {React,useEffect,useState} from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './Home'
import SignIn from './Components/signin'
import Product from './Components/Product';
import ProductDetails from './Components/productDetails'
import SignUp from './Components/Signup'
import MyCart from './Components/MyCart';
function App() {
  const [products,setProducts]=useState([])
  const [search,setSearch]=useState("")
  const [signEmail,setSignEmail]=useState("")
  const [signPassword,setSignPassword]=useState("")
  const [product,setProduct]=useState([])
  const getProducts=async()=>{
    const res=await fetch('https://fakestoreapi.com/products')
    const data=await res.json()
    console.log(data)
    setProducts(data)
  }
  useEffect(()=>{
    getProducts()
  },[])
  const [email,setEmail]=useState(()=>{
    const saved=localStorage.getItem("email")
    const initialValue=JSON.parse(saved)
    return initialValue || ""
  })
  const [password,setPassword]=useState(()=>{
    const saved1=localStorage.getItem("password")
    const initialValue1=JSON.parse(saved1)
    return initialValue1 || ""
  })
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/signin" element={<SignIn email={email} 
                                               setEmail={setEmail}
                                               password={password}
                                               setPassword={setPassword}
                                               setSignEmail={setSignEmail}
                                               setSignPassword={setSignPassword}
                                               signEmail={signEmail}
                                               signPassword={signPassword} />}/>
        <Route path="/signup" element={<SignUp email={email} 
                                               setEmail={setEmail}
                                               password={password}
                                               setPassword={setPassword} />}/>
        <Route path="/product" element={<Product products={products} 
                                                 search={search} 
                                                 setSearch={setSearch}
                                                 password={password}
                                                 email={email}
                                                 setProduct={setProduct}
                                                 product={product}/>}/>
        <Route path="/product/:id" element={<ProductDetails products={products}/>}/>
        <Route path="/mycart" element={<MyCart product={product} email={email}/>}/>
      </Routes>
    </div>
  );
}

export default App;

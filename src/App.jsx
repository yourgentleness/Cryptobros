import {  Routes, Route, Link, BrowserRouter } from "react-router-dom"
import { Layout, Typography, Space } from 'antd'
import { Navbar } from "./components"
import { Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar /> 
      </div>
      <div className="main">
       <Layout>
          <div className='routes'>
              <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/exchanges' element={<Exchanges/>}/>
                <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
                <Route path='/news' element={<News/>}/>
              </Routes>  
          </div>
        </Layout>
      <div className="footer">
        <Typography.Title level={2} style={{ color: "black", textAlign: "center" }}>Copyright © 2024
          <Link to="/" className="text-red-500">
            Cryptobros Inc. 
          </Link> <br/>
          All Right Reversed.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  )
};

export default App
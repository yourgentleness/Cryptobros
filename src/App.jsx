import {  Routes, Route, Link, BrowserRouter } from "react-router-dom"
import { Layout, Typography, Space } from 'antd'
import { Navbar } from "./components"
import { Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components'

const App = () => {
  return (
    <div className="flex truncate">
      <div className="flex-none">
        <Navbar /> 
      </div>
      <div className="flex-1 w-full ml-64 pl-4">
       <Layout>
          <div className='p-5'>
              <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='/exchanges' element={<Exchanges/>}/>
                <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
                <Route path='/news' element={<News/>}/>
              </Routes>
          </div>
        </Layout>
      <div className="flex flex-col items-center bg-custom-blue p-4">
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
import {  Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, } from '@ant-design/icons'
import icon from '../images/CryptoLogo.png'
const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size={'large'}/>
        <Typography.Title level={2} className='logo-text '>
          <Link to='/'>Cryptobros</Link>
        </Typography.Title>
      </div>
      <div style={{color:'white'}}>
      <Menu style={{ backgroundColor:'rgb(0, 21, 41)'}}>
        <Menu.Item icon ={<HomeOutlined/>}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon ={<FundOutlined/>}>
          <Link to='/cryptocurrencies'>Cryptoccurencies</Link>
        </Menu.Item>
        <Menu.Item icon ={<MoneyCollectOutlined/>}>
          <Link to='/exchanges'>Exchange</Link>
        </Menu.Item>
        <Menu.Item icon ={<BulbOutlined/>}>
          <Link to='/news'>News</Link>
        </Menu.Item>
      </Menu>
      </div>
      
    </div>
  )
}
                                                                                                                                      
export default Navbar

import {  Button, Menu, Typography, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, } from '@ant-design/icons'
import icon from '../images/CryptoLogo.png'
const Navbar = () => {
  return (
    <div className='fixed p-6 h-screen left-0 color bg-custom-blue m-0'>
      <div className='flex p-2 items-center w-full '>
        <Avatar src={icon} size={'large'} className='mb-3'/>
        <Typography.Title level={2} className='ml-2'>
          <Link to='/'>Cryptobros</Link>
        </Typography.Title>
      </div>
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
  )
}
                                                                                                                                      
export default Navbar

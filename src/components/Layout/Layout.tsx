import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import '../../styles/global.scss'

const Layout = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='container'>
        <div className='menu-container'>
          <Menu />
        </div>
        <div className='content-container'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

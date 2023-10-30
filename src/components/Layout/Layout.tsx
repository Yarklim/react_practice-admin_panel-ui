import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Navbar from '../Navbar/Navbar';
import s from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={s.main}>
      <Navbar />
      <div className={s.container}>
        <div className={s.menuContainer}>
          <Menu />
        </div>
        <div className={s.contentContainer}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

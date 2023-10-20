import { Header, Link } from '../app.styled';
import { Outlet } from 'react-router-dom';
import css from './layout.module.css';

const Layout = () => {
  return (
    <>
      <Header>
        <nav className={css['layout-nav']}>
          <Link  to="/">Home</Link>
          <Link  to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

import { Header, Link } from '../app.styled';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

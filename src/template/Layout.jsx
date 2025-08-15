import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = () => {
  return (
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Container className="flex-grow-1">
          <main>
            <Outlet />
          </main>
        </Container>
        <Footer />
      </div>
  );
};

export default Layout;

import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { GlobalStyles } from '../ui';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Hide nav/footer on links page (linktree-style page)
  const isLinksPage = location.pathname === "/links";

  return (
    <div>
      <GlobalStyles />
      {!isLinksPage && <Navigation />}
      <main>{children}</main>
      {!isLinksPage && <Footer />}
    </div>
  );
};

export default Layout;

import Header from "./header";
import Footer from "./footer";

const HeaderFooterWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HeaderFooterWrapper;

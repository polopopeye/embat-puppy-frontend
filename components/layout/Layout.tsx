import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="w-full p-2">
        <Header />
        <main className="w-full xl:max-w-[1900px] mx-auto">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;

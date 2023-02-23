import React from 'react';

type LayoutType = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutType) => {
  return <div className="layout">{children}</div>;
};

export default Layout;

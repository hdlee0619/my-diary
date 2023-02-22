import React, { FC } from 'react';

type Props = {
  children: React.ReactElement;
};

const Layout: FC<Props> = ({ children }): JSX.Element => {
  return <div className="layout">{children}</div>;
};

export default Layout;

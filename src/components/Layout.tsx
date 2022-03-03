import * as React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className="container max-w-7xl mx-auto">{children}</div>;
};

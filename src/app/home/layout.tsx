import Button from "../components/button";
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main>
        {children}
        <Button />
      </main>
    </>
  )
}

export default Layout;
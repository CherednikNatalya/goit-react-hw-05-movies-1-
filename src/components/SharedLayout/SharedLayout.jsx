import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header,  Link } from "../SharedLayout/SharedLayout.styled";

 const SharedLayout = () => {
  return (
    <Container>
      <Header>
        
        <nav>
          <Link to="" end> Home</Link>
          <Link to="about">About</Link>
        
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};


export default SharedLayout
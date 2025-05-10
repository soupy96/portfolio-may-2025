import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Layout() {
  return (
    <Suspense fallback={<Loading />}>
      <MainBG>
        <InnerBG>
          <Nav />
          <Outlet />
          <Footer />
        </InnerBG>
      </MainBG>
    </Suspense>
  );
}

function Loading() {
  return (
    <LoadingText>
      <h2>🌀 Loading...</h2>
    </LoadingText>
  );
}

const LoadingText = styled.h2`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBG = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #070d1f;
`;

const InnerBG = styled.div`
  width: 100%;
`;

export default Layout;

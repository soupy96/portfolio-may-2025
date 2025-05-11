import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Layout() {
  const BackToTopFunc = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Suspense fallback={<Loading />}>
      <MainBG>
        <InnerBG>
          <Nav />
          <Outlet />
          <Footer />
        </InnerBG>
        <BackToTop onClick={BackToTopFunc}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='24'
            viewBox='0 -960 960 960'
            width='24'
          >
            <path
              d='M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z'
              fill='#ffffff'
            />
          </svg>
        </BackToTop>
      </MainBG>
    </Suspense>
  );
}

function Loading() {
  return <LoadingText>🌀 Loading...</LoadingText>;
}

const LoadingText = styled.h2`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBG = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #070d1f;
`;

const InnerBG = styled.div`
  width: 100%;
`;

const BackToTop = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  border-radius: 50%;
  border: 1px #ffffff solid;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: #ffffff;
  }

  path {
    transition: fill 0.5s;
  }

  &:hover path {
    fill: #070d1f;
  }
`;

export default Layout;

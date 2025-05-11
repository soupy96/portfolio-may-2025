import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

function MainPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div>
      <Helmet>
        <title>Big Mike ✌</title>
      </Helmet>
      <BigMainBody>
        <InnerMainBody>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
          <h1>THIS IS A TEST</h1>
        </InnerMainBody>
      </BigMainBody>
    </div>
  );
}

const BigMainBody = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const InnerMainBody = styled.div`
  width: 60%;
  margin: auto;
`;

export default MainPage;

import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import {
  MojiCentral,
  InfoAboutMe,
  WorkExperience,
  WorkTile,
  TileImg,
  TileText,
} from '../assets/css/Styles';

// import AppleMoji from '../assets/imgs/apple-moji-me-comp.png';
import AppleMojiImg from '../assets/imgs/apple-mojio-me-thumb.png';

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
          <MojiCentral>
            <p>This is a test</p>
            <img src={AppleMojiImg} />
            <h1>Big Mike</h1>
            <p>This is a test</p>
          </MojiCentral>
          <InfoAboutMe>
            <h2>I'm a Web Developer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum in pellentesque augue. Aliquam vitae dui vel dui
              finibus fermentum. Nulla aliquam malesuada nunc sit amet
              hendrerit. Phasellus vulputate sagittis neque. Vestibulum id ante
              nec purus porta facilisis. Donec nec diam fringilla, laoreet nunc
              eu, lobortis justo. Etiam eget commodo velit, eget ornare orci.
              Aliquam porta semper gravida. Sed eu orci risus.{' '}
            </p>
          </InfoAboutMe>
          <WorkExperience>
            <h2>Work Experience</h2>
            <WorkTile>
              <TileImg src={AppleMojiImg} />
              <TileText>
                <h4>Canadian Tire</h4>
                <p>Some small text about the time i Worked here</p>
              </TileText>
            </WorkTile>
            <WorkTile>
              <TileImg src={AppleMojiImg} />
              <TileText>
                <h4>SmartWebPros.com Inc</h4>
                <p>Some small text about the time i Worked here</p>
              </TileText>
            </WorkTile>
            <WorkTile>
              <TileImg src={AppleMojiImg} />
              <TileText>
                <h4>Forest City Surplus</h4>
                <p>Some small text about the time i Worked here</p>
              </TileText>
            </WorkTile>
            <WorkTile>
              <TileImg src={AppleMojiImg} />
              <TileText>
                <h4>Blackridge Strategy</h4>
                <p>Some small text about the time i Worked here</p>
              </TileText>
            </WorkTile>
          </WorkExperience>
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

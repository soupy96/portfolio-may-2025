import styled from 'styled-components';

const MojiCentral = styled.div`
  img {
    filter: drop-shadow(0px 15px 85px #0939cc);
  }
`;

const InfoAboutMe = styled.div``;

const WorkExperience = styled.div`
  display: grid;
  column-gap: 50px;
  row-gap: 50px;
  grid-template-columns: auto auto;
  filter: drop-shadow(0px -7px 6px #0633ba);

  h2 {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  div:nth-child(2) {
    background: #020c2b;
    background: -moz-linear-gradient(
      -45deg,
      #020c2b 0%,
      #05227a 68%,
      #0939cc 100%
    );
    background: -webkit-linear-gradient(
      -45deg,
      #020c2b 0%,
      #05227a 68%,
      #0939cc 100%
    );
    background: linear-gradient(135deg, #020c2b 0%, #05227a 68%, #0939cc 100%);
  }

  div:nth-child(3) {
    background: #0939cc;
    background: -moz-linear-gradient(
      45deg,
      #0939cc 0%,
      #05227a 33%,
      #020c2b 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #0939cc 0%,
      #05227a 33%,
      #020c2b 100%
    );
    background: linear-gradient(45deg, #0939cc 0%, #05227a 33%, #020c2b 100%);
  }

  div:nth-child(4) {
    background: #020c2b;
    background: -moz-linear-gradient(
      45deg,
      #020c2b 0%,
      #05227a 64%,
      #0939cc 100%
    );
    background: -webkit-linear-gradient(
      45deg,
      #020c2b 0%,
      #05227a 64%,
      #0939cc 100%
    );
    background: linear-gradient(45deg, #020c2b 0%, #05227a 64%, #0939cc 100%);
  }

  div:nth-child(5) {
    background: #0939cc;
    background: -moz-linear-gradient(
      -45deg,
      #0939cc 0%,
      #05227a 35%,
      #020c2b 100%
    );
    background: -webkit-linear-gradient(
      -45deg,
      #0939cc 0%,
      #05227a 35%,
      #020c2b 100%
    );
    background: linear-gradient(135deg, #0939cc 0%, #05227a 35%, #020c2b 100%);
  }
`;

const WorkTile = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 25px;
  border-top: 5px #0939cc solid;
`;

const TileImg = styled.img``;

const TileText = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export {
  MojiCentral,
  InfoAboutMe,
  WorkExperience,
  WorkTile,
  TileImg,
  TileText,
};

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  bottom: 0;
  background-color: #cadae9;
  position: absolute;
  text-align: center;
  padding: 10px;
  font-size: 0.8rem;
`

function Footer(props) {
  return (
      <Container>
          <div>Background pattern from <a href="https://www.toptal.com/designers/subtlepatterns/">Toptal Subtle Patterns</a></div>
          <div>Animal icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Container>
  )
}

export default Footer;
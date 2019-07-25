import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import AppRouter from './Router';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import Footer from './Footer';

// @client를 안하면 react apollo가 query를 api로 보내려 할 것이다. 우리는 api대신 cache에서 실행하려고 하기때문에 @client를 썼다.
const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 935px;
  width: 100%;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY); // error는 안날거같다. remote가 아니라서 api로 넘어가지 않을거기때문!
  console.log(isLoggedIn);
  return (
    <ThemeProvider theme={Theme}>
      <Wrapper>
        <GlobalStyles />
        <AppRouter isLoggedIn={isLoggedIn} />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
};

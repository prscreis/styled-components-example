import styled from 'styled-components';

import Header from '../components/Header';
import Post from '../components/Post';
import ThemeSwitch from '../components/ThemeSwitch';

const POSTS = [
  { title: 'Styled-components is good', fontSize: 'small' },
  { title: 'Styled-components is very good', fontSize: 'medium' },
  { title: 'Styled-components is awesome', fontSize: 'large' },
];

const PageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  //display: flex;
  //flex: 1;
  //flex-direction: column;
  //height: 100%;
  //width: 100%;

  position: absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.h2`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function Home() {
  return (
    <PageContainer>
      <Header />
      {POSTS.map((post) => (
        <Post key={post.title} {...post} />
      ))}
      <ThemeSwitch />
    </PageContainer>
  );
}

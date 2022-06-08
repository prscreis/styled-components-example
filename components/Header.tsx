import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin: 5px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled.h2`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>My page</Title>
      <Subtitle>This is a styled-components powered page</Subtitle>
    </HeaderWrapper>
  );
}

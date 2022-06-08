import styled from 'styled-components';

const BaseTitle = styled.h1`
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const Title = styled(BaseTitle)<{ fontSize?: FontSize }>`
  font-size: ${(props) =>
    props.fontSize === 'large' ? 40 : props.fontSize === 'small' ? 20 : 30}px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled(BaseTitle)<{ fontSize?: FontSize }>`
  font-size: ${(props) =>
    props.fontSize === 'large' ? 30 : props.fontSize === 'small' ? 15 : 20}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

const PostWrapper = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.backgroundInverse};
  margin: 10px 5px;
  padding: 10px;
`;

type FontSize = 'small' | 'medium' | 'large';

type PostProps = {
  title: string;
  fontSize: FontSize;
};

export default function Post(props: PostProps) {
  return (
    <PostWrapper>
      <Title fontSize={props.fontSize}>{props.title}</Title>
      <Subtitle as="h2" fontSize={props.fontSize}>
        Post subtitle
      </Subtitle>
    </PostWrapper>
  );
}

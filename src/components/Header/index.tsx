import { Container, TitleContainer } from "./styles";

interface IContentHeaderProps {
  title?: string;
}

const Header = ({ title }: IContentHeaderProps) => (
  <Container>
    <TitleContainer>{title}</TitleContainer>
  </Container>
);

export default Header;

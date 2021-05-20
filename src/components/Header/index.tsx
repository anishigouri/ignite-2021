import logoImage from "../../assets/logo.svg";
import { ContainerStyled, ContentStyled } from "./styled";

export function Header() {
  return (
    <ContainerStyled>
      <ContentStyled>
        <img src={logoImage} alt="logo" />
        <button>Nova Transação</button>
      </ContentStyled>
    </ContainerStyled>
  );
}

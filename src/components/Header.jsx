import { Title, HeaderContainer } from "../style/HeaderStyle";
import "../style/HeaderStyle";
import { InputSearchAdress } from "./InputSearchAdress";

export const Header = () => {
  return (
    <HeaderContainer>
      <Title> IP Address Tracker</Title>
      <InputSearchAdress />
    </HeaderContainer>
  );
};

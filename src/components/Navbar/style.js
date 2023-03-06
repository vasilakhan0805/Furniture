import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/Furni..svg";
import { ReactComponent as user } from "../../assets/icons/User.svg";
import { ReactComponent as cart } from "../../assets/icons/Cart.svg";

const Container = styled.header`
  width: 100%;
  background-color: var(--primary-green);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  max-width: 1500px;
  width: 100%;
  padding: 20px 178px;
  margin: auto;
`;
const Furni = styled(logo)``;
const User = styled(user)``;
const Cart = styled(cart)``;

const Wrapper2 = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 95px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: flex-end;
`;
Navigation.Ul = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 43px;
`;
Navigation.Ul.Li = styled.li`
  list-style-type: none;
  color: var(--primary-white);
  padding-bottom: 7px;
  border-bottom: 5px solid transparent;

  :hover {
    border-bottom: 5px solid var(--primary-yellow);
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;
  margin-bottom: 5px;
`;

export { Container, Wrapper, Furni, Wrapper2, Navigation, User, Cart, Icons };

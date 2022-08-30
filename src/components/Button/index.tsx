import { ButtonClick } from "./styles";

interface IButtonProps {
  text: string;
}

const Button = ({ text }: IButtonProps) => {
  return <ButtonClick>{text}</ButtonClick>;
};

export default Button;

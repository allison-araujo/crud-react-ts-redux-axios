import { ButtonClick } from "./styles";

interface IButtonProps {
  text: string;
}

const Button = ({ text, ...rest }: IButtonProps) => {
  return <ButtonClick {...rest}>{text}</ButtonClick>;
};

export default Button;

import { ButtonClick } from "./styles";

type IButtonProps = {
  text: string;
};

const Button = ({ text }: IButtonProps) => {
  return <ButtonClick>{text}</ButtonClick>;
};

export default Button;

import { Button } from "./Button.styles";
import { ButtonProps } from "./types.ButtonExample";

const ButtonExample = ({
  title = "Adicione o texto",
  width = "fit-content",
  background = "#01ab7d",
  border = "1px solid #01ab7d",
  borderRadius = "5px",
  padding = "16px 0px",
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <Button
      {...rest}
      width={width}
      background={background}
      border={border}
      borderRadius={borderRadius}
      padding={padding}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export { ButtonExample };

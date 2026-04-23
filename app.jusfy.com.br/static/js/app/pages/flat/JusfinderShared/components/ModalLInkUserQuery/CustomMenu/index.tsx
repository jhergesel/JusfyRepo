import { Link } from "react-router-dom";
import * as S from "./CustomMenu.styles";

const CustomMenu = ({
  innerRef,
  innerProps,
  isDisabled,
  children,
  selectProps,
}) => {
  const { setInputType } = selectProps;

  if (!isDisabled) {
    return (
      <S.CustomMenuContent ref={innerRef} {...innerProps} id={"without-click"}>
        {children}
        <S.ButtonContainer>
          <Link
            to="#"
            onClick={() => setInputType("text")}
            onTouchStart={() => setInputType("text")}
            id={"without-click"}
          >
            <button className="btn btn-primary btn-sm btn-block">
              Adicionar novo cliente
            </button>
          </Link>
        </S.ButtonContainer>
      </S.CustomMenuContent>
    );
  }

  return null;
};

export { CustomMenu };

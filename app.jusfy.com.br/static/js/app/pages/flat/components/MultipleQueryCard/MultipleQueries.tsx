import Card from "../../../../components/flat/ui/Card";
import * as S from "./MultipleQueries.styles";
import Button from "../../../../components/flat/ui/Button";
import { IMultipleQueries } from "./types.MultipleQueries";

export const MultipleQueryCard = ({
  onClick,
  height = "280.56px",
}: IMultipleQueries) => {
  return (
    <S.Container>
      <Card height={height}>
        <S.CardWrapper>
          <S.TitleWrapper>
            <h1>Múltiplas Consultas</h1>
          </S.TitleWrapper>
          <S.DescriptionWrapper>
            <p>Realize várias consultas no mesmo documento de uma vez só</p>
          </S.DescriptionWrapper>
          <S.ButtonWrapper>
            <Button
              borderRadius="5px"
              padding="10px 40px"
              variant="contained"
              onClick={onClick}
            >
              <S.ButtonContent>Começar</S.ButtonContent>
            </Button>
          </S.ButtonWrapper>
        </S.CardWrapper>
      </Card>
    </S.Container>
  );
};

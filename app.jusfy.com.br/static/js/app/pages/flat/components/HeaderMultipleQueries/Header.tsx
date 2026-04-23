import { Container } from "./HeaderMultipleQueries.styles";

export interface IHeaderMultipleQueries {
  title: string;
  subtitle: string;
}

export const HeaderMultipleQueries = ({
  title,
  subtitle,
}: IHeaderMultipleQueries) => {
  return (
    <Container>
      <span>{subtitle}</span>
      <h1>{title}</h1>
    </Container>
  );
};

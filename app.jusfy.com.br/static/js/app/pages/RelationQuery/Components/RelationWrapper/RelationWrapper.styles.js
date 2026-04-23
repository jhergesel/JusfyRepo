import styled from "styled-components";

export const Container = styled.div `
  position: relative;
  width: fit-content;
`;

export const Wrapper = styled.div `
  padding: 60px 8px 10px;
  row-gap: 40px;
  gap: 40px;
  width: fit-content;
  border: 1px dashed #11734b;
  border-radius: 12px;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;

  ${({ type }) =>
    type === "company_partner"
      ? `
width: 100 % ;
max - width: 1070 px;
padding - left: 19 px;
flex - wrap: wrap;
flex - direction: row;

@media screen and(max - width: 1178 px) {
    max - width: 713 px;
}

@media screen and(max - width: 820 px) {
    max - width: 356 px;
}
`
      : null}

  ${({ close }) =>
    close
      ? `
height: 0;
padding: 0;
opacity: 0;
overflow: hidden;
`
      : ""};
`;

export const Colapse = styled.div `
  background-color: ${({ theme, type }) =>
    type === "search_partners"
      ? "#ffaeae"
      : type === "search_companies"
      ? "#FFF2DE"
      : theme.colors.white.primary};
  font-weight: 700;
  font-size: 14px;
  font-family: ${({ theme }) => theme.typography.primary};
  white-space: nowrap;
  padding: 6px 12px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0;
  left: 50%;
  cursor: pointer;
  z-index: 1;

  &:after {
    content: "";
    margin-top: 2px;
    display: block;
    width: 13px;
    height: 13px;
    background-image: url(/media/relationQuery/colapse-arrow-large.svg);
    background-size: cover;
    transform: ${({ close }) => (close ? "rotate(180deg)" : "")};
    transition: all 0.3s;
  }

  ${({ type }) =>
    type === "search_partners" || type === "search_companies"
      ? `
color: #13734b;`
      : null}
`;
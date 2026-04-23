import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ selected }) => (selected ? "#edfaf5" : "#fafbfd")};
  border: ${({ selected }) => (selected ? "2px" : "1px")} solid
    ${({ selected }) => (selected ? "#41C78F" : "#ebedf3")};
  border-radius: 10px;
  padding: 8px 16px;
  max-width: fit-content;
  cursor: pointer;
  flex-grow: 1;
  margin: ${({ selected }) => (selected ? "0" : "3px")}
    ${({ selected }) => (selected ? "0" : "3px")};
`;

export const Input = styled.input `
  display: none;
`;

export const Label = styled.label `
  position: relative;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: ${({ isSquare }) => (isSquare ? "15%" : "50%")};
  border: 1px solid ${({ selected }) => (selected ? "#41C78F" : "#838383")};
  background-color: ${({ selected }) => (selected ? "#41C78F" : "white")};
  margin: 0;
`;

export const Text = styled.span ``;
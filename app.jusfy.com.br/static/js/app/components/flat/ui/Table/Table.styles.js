import styled from "styled-components";
import DataTable from "react-data-table-component";

export const Table = styled(DataTable)
`
  font-family: ${({ theme }) => theme.typography.primary};
  background-color: ${({ theme }) => theme.colors.white.tertiary};
  padding: 2px;
  font-family: "Noto Sans";
  border-radius: 7px;
  height: fit-content;

  ::-webkit-scrollbar {
    width: 12px;
    height: 3px;
    border-radius: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #41c78f;
    padding-left: 16px;
  }
`;
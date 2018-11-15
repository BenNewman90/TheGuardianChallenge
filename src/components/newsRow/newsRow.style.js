import styled from "styled-components";

export const RowDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 20fr;
  padding: 0.5rem;
  background-color: rgb(152, 208, 223);
  font-size: 1.25rem;
  &:hover {
    background: white;
  }
`;

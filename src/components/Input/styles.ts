import styled from "styled-components";

export const Container = styled.input`
  justify-content: center;
  width: 90%;
  font-size: 16px;
  padding: 25px;
  border: none;
  background-color: #d7dbdd;
  border-radius: 8px;
  margin: 10px;

  @media (min-width: 960px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;

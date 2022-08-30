import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const Input = styled.input`
  display: flex;
  justify-content: center;
  width: 90%;
  font-size: 16px;
  padding: 25px;
  border: none;
  background-color: #d7dbdd;
  border-radius: 8px;
  margin: 10px;
`;

export const Button = styled.button`
  display: flex;
  width: 40%;
  height: 70px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: #fff;
  background-color: #1e90ff;
  flex-direction: column;
`;

export const Column = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

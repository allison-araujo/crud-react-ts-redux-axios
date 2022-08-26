import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const Input = styled.input`
  font-size: 16px;
  padding: 15px;
  width: 50%;
  border: none;
  background-color: #d7dbdd;
  border-radius: 8px;
  margin: 10px;
`;

export const Button = styled.button`
  margin: 40px;
  width: 15%;
  height: 45px;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: #fff;
  background-color: #1e90ff;
  transition: opacity 0.3s;
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

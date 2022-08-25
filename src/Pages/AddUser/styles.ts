import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  padding-top: 10px;
  justify-content: center;
`;
export const Input = styled.input`
  font-size: 16px;
  padding: 15px;
  text-align: left;

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

export const Column = styled.div``;

export const Row = styled.div`
  display: flex;
`;

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const Button = styled.button`
  display: flex;
  width: 97%;
  height: 70px;
  margin: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: #fff;
  background-color: #1e90ff;
  flex-direction: column;
  justify-content: center;

  :hover {
    background-color: aquamarine;
  }
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

export const Text = styled.span`
  display: flex;
  width: 100%;
  font-size: 50px;
  justify-content: center;
  align-items: center;
`;

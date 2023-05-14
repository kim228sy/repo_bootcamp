import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.div`
  width: 300px;
  height: 400px;
  background-color: white;
`;

export const Input = styled.TextInput`
  margin: 10px;
  border-radius: 5px;
  border-color: gainsboro;
  border-width: 1px;
`;

export const CloseContainer = styled.div`
  flex-direction: row;
  margin-top: 20px;
  /* margin-horizontal: 40px; */
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: black;
  font-size: 16px;
  color: white;
  text-align: center;
  /* text-align-vertical: center; */
`;

export const styles = {
  Container,
  Form,
  Input,
  CloseContainer,
  Button,
};

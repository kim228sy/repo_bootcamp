import styled from "styled-components";

export const Container = styled.div`
  margin: 10px;
  padding: 30px;
  background-color: #353839;
  border-radius: 10px;
`;

export const Title = styled.input`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const Content = styled.input`
  margin-top: 10px;
  color: white;
  font-size: 16px;
`;

export const Footer = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;

export const UpdateButton = styled.button`
  margin: 10px;
  font-size: 25px;
  padding: 5px;
  background-color: yellow;
  color: white;
  border-radius: 12.5px;
`;

export const TrashButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 25px;
  padding: 5px;
  background-color: red;
  color: white;
  border-radius: 12.5px;
`;

export const styles = {
  Container,
  Title,
  Content,
  Footer,
  UpdateButton,
  TrashButton,
};

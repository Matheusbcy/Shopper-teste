import styled from "styled-components";

export const ContainerEditProd = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerInfEdit = styled.div`
  margin-left: 30px;
  margin-top: 30px;
`;
export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  font-family: "Roboto", sans-serif;
`;
export const ContainerInput = styled.div`
  width: 600px;
  height: 300px;
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const FileInput = styled.input`
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const SubmitButton = styled.button`
  background-color: rgba(40, 179, 113, 0.7);
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2e8b57;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
`;
export const DataButton = styled.button`
  margin-top: 10px;
  background-color: #00008b;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  width: 100px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4169e1;
  }
`;
export const Table = styled.div``;
export const TableHeader = styled.div`
  font-weight: bold;
  margin-left: 40px;
`;
export const TableItem = styled.div`
  margin-left: 40px;
`;
export const Flex = styled.div`
  display: flex;
`;
export const Row = styled.div`
  width: 400px;
`

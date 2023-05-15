import styled from "styled-components";

export const ContainerNav = styled.div`
  height: 86vh;
  width: 200px;
  background-color: rgba(20, 179, 113, 0.7);
  display: flex;
`;
export const ContainerUl = styled.div`
  margin-top: 30px;
`;
export const List = styled.li`
  height: 50px;
  font-size: 20px;
  padding: 10px;
  width: 200px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(60, 179, 113, 0.7);
  }
`;
export const Link = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-left: 4px;
`;

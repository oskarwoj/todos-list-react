import styled, { css } from "styled-components";

export const TasksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const Button = styled.button`
  border: none;
  color: white;
  width: 30px;
  height: 30px;
  padding: 0;
  transition: background 1s;

  ${({ toogleDone }) =>
    toogleDone &&
    css`
      background-color: hsl(120, 61%, 34%);

      &:hover {
        background-color: hsl(120, 61%, 70%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: hsl(348, 83%, 47%);

      &:hover {
        background-color: hsl(348, 83%, 70%);
      }
    `}
`;

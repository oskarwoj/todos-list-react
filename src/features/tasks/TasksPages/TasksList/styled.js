import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const TaskList = styled.ul`
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
  width: 30px;
  height: 30px;
  border: none;
  transition: 0.3s;
  color: white;
  font-size: 22px;
  padding: 0px;
  cursor: pointer;

  ${({ toogleDone }) =>
    toogleDone &&
    css`
      background-color: green;
    `}
  ${({ edit }) =>
    edit &&
    css`
      background-color: orange;
    `}
    ${({ save }) =>
    save &&
    css`
      background-color: orange;
      font-size: unset;
      width: unset;
      padding: 0px 10px;
    `}
    ${({ remove }) =>
    remove &&
    css`
      background-color: red;
    `}

    &:hover {
    filter: brightness(120%);
  }
  &:active {
    filter: brightness(140%);
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: 0.3s;

  &:hover {
    filter: brightness(120%);
  }
  &:active {
    filter: brightness(140%);
  }
`;

export const EditableContent = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 10px;
  align-items: center;
`;

export const ContentInput = styled.input`
  width: 100%;
  padding: 5px;
  border: 1px solid grey;
  background-color: orange;
  color: grey;
`;

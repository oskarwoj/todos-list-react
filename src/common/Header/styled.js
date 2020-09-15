import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.sectionBackground};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 0 5px ${({ theme }) => theme.shadow};
  font-size: 1em;
  display: block;
  padding: 10px;
  cursor: pointer;
`;

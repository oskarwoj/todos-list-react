import styled from "styled-components";

export const StyledSection = styled.section`
  margin: 10px 0;
  background: ${({ theme }) => theme.sectionBackground};
  box-shadow: 0 0 5px ${({ theme }) => theme.shadow};
`;

export const Header = styled.div`
  border-bottom: 1px solid #${({ theme }) => theme.background};
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

export const Body = styled.div`
  padding: 20px;
  border-top: 3px solid ${({ theme }) => theme.background};
`;

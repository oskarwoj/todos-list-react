import React from "react";
import { Header, StyledSection, Title, Body } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <Header>
      <Title>{title}</Title>
      {extraHeaderContent}
    </Header>
    <Body>{body}</Body>
  </StyledSection>
);

export default Section;

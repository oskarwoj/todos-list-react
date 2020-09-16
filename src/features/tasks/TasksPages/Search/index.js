import React from "react";
import { StyledInput } from "../Form/styled";
import searchQueryParamName from "../../searchQueryParamName";
import { Wrapper } from "./styled";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    console.log(target.value);

    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : "",
    });
  };

  return (
    <Wrapper>
      <StyledInput
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

import styled from "@emotion/styled";
import Button from "./Button";
import Input from "./Input";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  gap: 8px;
  width: 100%;
  margin-bottom: 16px;
`;
function SearchForm({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleTermChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(searchTerm);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder={"# de usuarios"}
        value={searchTerm}
        onChange={handleTermChange}
      />
      <Button type="submit">Listar</Button>
    </Form>
  );
}

export default SearchForm;

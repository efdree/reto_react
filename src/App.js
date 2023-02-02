import { searchUsers } from "./services/users";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import SearchForm from "./components/SearchForm";

function parseUsers(users) {
  return users.map((user) => parseUser(user));
}

function parseUser(user) {
  const { name, dob, gender, email, nat, picture } = user;
  return {
    name,
    dob,
    gender,
    email,
    nat,
    picture,
  };
}

const Container = styled.div`
  padding: 16px;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

function App() {
  const [users, setUsers] = useState([]);

  async function getUsers(query) {
    const data = await searchUsers(query);
    const users = parseUsers(data.results);
    setUsers(users);
  }

  return (
    <Container>
      <Title>Lista de Usuarios</Title>
      <SearchForm onSubmit={getUsers} />
      <UserList users={users} />
    </Container>
  );
}

export default App;

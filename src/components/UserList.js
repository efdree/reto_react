import User from "./User";
import styled from "@emotion/styled";

const HeadColumn = styled.th`
  border-radius: 4px;
  padding: 10px;
  background-color: none;
  border: 1px solid #d3d3d3;
  width: 100%;
  text-align: center;
`;


function UserList({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <HeadColumn>Nombre</HeadColumn>
          <HeadColumn>Apellido</HeadColumn>
          <HeadColumn>Edad</HeadColumn>
          <HeadColumn>Genero</HeadColumn>
          <HeadColumn>Email</HeadColumn>
          <HeadColumn>Nacionalidad</HeadColumn>
          <HeadColumn>Foto</HeadColumn>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User user={user} />
        ))}
        </tbody>
    </table>
  );
}

export default UserList;

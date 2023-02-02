import User from "./User";
import styled from "@emotion/styled";

//Formating the th tag of the table tag
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
    //Creating the structure of the table 
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

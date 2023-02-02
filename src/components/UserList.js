import User from "./User";

function UserList({ users }) {
  return (
    <div>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Genero</th>
        <th>Email</th>
        <th>Nacionalidad</th>
        <th>Foto</th>
      </tr>

      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}

export default UserList;

import styled from "@emotion/styled";

function User({ user }) {
  return (
    <tr>
      <td>{user.name.first}</td>
      <td>{user.name.last}</td>
      <td>{user.dob.age}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td>{user.nat}</td>
      <td>
        <img src={user.picture.thumbnail} alt={user.name.first}></img>
      </td>
    </tr>
  );
}

export default User;

import styled from "@emotion/styled";

// Formating the td tag of the table tag
const Row = styled.td`
  border-radius: 4px;
  padding: 10px;
  background-color: none;
  border: 1px solid #d3d3d3;
  width: 100%;
  text-align: center;
`;

// Formating the img tag
const Thumbnail = styled.img`
width: 100px;
border-radius: 50%;
background-size: 100% auto;
`;

function User({ user }) {
  return (
      <tr>
        <Row>{user.name.first}</Row>
        <Row>{user.name.last}</Row>
        <Row>{user.dob.age}</Row>
        <Row>{user.gender == "male" ? "M" : "F"}</Row>
        <Row>{user.email}</Row>
        <Row>{user.nat}</Row>
        <Row>
          <Thumbnail src={user.picture.thumbnail} alt={user.name.first}></Thumbnail>
       </Row>
      </tr>
  );
}

export default User;

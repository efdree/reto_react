const BASE_URL = "https://randomuser.me/api/";

//Function to get the quantity of users from the api
//The format response of the searchUsers is json
function searchUsers(query) {
  return fetch(`${BASE_URL}?results=${query}`).then((response) =>
    response.json()
  );
}

export { searchUsers };

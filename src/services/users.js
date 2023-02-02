const BASE_URL = "https://randomuser.me/api/";

function searchUsers(query) {
  return fetch(`${BASE_URL}?results=${query}`).then((response) =>
    response.json()
  );
}

export { searchUsers };

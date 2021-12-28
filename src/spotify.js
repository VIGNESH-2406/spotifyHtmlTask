//developer.spotify.com/documentation/web-playback-sdk/quick-start/
//accounts.spotify.com/en/authorize?scope=streaming%20user-read-email%20
//user-modify-playback-state%20user-read-private&response_type=token&
//redirect_uri=http://localhost:3000&client_id=adaaf209fb064dfab873a71817029e0d&show_dialog=true

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000";
const clientId = "9258d291e79c47c79732fa7cacbcc279";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

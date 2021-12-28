export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQCb4kgxT5IsCe2fioxEFXSu50r09wRs8TKXP1p0y5TrpNUACEqML6Rd0sPGnscDAH9Iv6WRcMCJCf-93s56yLG3AU0gBhFqUY8BIg0xEiwNbqZSjEY3WNAulqAl2I6RMR99hnYakrDhiZA2ehGZjIsk9osv1JLcfLPwkLYQl_4fqjHg",
};

const reducer = (state, action) => {
  console.log(action);

  //Action ---TYPE,[PAYLOAD]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;

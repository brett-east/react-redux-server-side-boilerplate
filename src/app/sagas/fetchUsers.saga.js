import axios from 'axios';
export const fetchUsers = function* fetchUsers(action) {
  // const { thing } = action.payload;

  const opts = {
    url: `buildEnvironment.apiDomain/{thing}`
  };

  return yield axios.get(opts);
}

export const endpoint = timeWindowId => `/v5/player_pool/${timeWindowId}`;

export const playerPool = function* playerPool(action) {
  const { timeWindowId } = action.payload;

  const opts = {
    url: `${buildEnvironment.apiDomain}${endpoint(timeWindowId)}`
  };

  return yield request.get(opts);
};

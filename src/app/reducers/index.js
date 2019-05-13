import { usersReducer } from './users.reducer';

const appReducer = (state, action) => {
  const users = usersReducer(state && state.users, action);

  const store = {
    users,
  };

  return store;
};

export default appReducer;

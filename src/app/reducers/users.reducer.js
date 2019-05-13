export const usersReducer = (state = userDefaultShape, { type, payload }, system) => {
  switch (type) {
    case 'USERS_LOADING': return loading(state);
    case 'USERS_SET': return set(state, payload, system);
    case 'USERS_ERROR': return error(state, payload);
    default: return state;
  }
};

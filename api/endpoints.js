module.exports = Object.freeze({
  USERS: {
    GET: {
      GET: () => ({ method: "get", url: `/users`, authentication: true }),
      SESSION: () => ({ method: "get", url: `/sessions` }),
    },
    POST: {
      SESSION: () => ({ method: "post", url: `/sessions` }),
      LOG_OUT_ALL_DEVICES: () => ({ method: "post", url: `/users/logout/all/devices` }),
    },
    PATCH: {
      USER_NAME: () => ({ method: "patch", url: `/users/name` }),
      PASSWORD: () => ({ method: "patch", url: `/users/password` }),
    },
    PUT: {
      PUT: (id) => ({
        method: "put",
        url: `/users?user_id=${id}`,
        authentication: true,
      }),
    },
  },

  ITEMS: {
    GET: {
      GET: () => ({ method: "get", url: `/items`, authentication: true }),
      TOP: (filter) => ({ method: "get", url: `/items/top?filter=${filter}`, authentication: true }),
      GET_DATA: () => ({ method: "get", url: `/item`, authentication: true }),
    },
    POST: {
      POST_RATING: () => ({ method: "post", url: `/items/rating`, authentication: true }),
      ADD_WATCH_LIST: () => ({ method: "post", url: `/items/watchList`, authentication: true }),
    },
    PUT: {
      
    },
  },

  CELEBRITIES: {
    GET: {
      GET: () => ({ method: "get", url: `/celebrities`, authentication: true }),
      GET_DATA: () => ({ method: "get", url: `/celebrity`, authentication: true }),
    },
    POST: {
      
    },
    PUT: {
      
    },
  },

  COMMENTS: {
    POST: {
      REACT: () => ({ method: "post", url: `/comments/react`, authentication: true }),
      COMMENT: () => ({ method: "post", url: `/comments`, authentication: true }),
    },
  },
  
});

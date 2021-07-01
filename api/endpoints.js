module.exports = Object.freeze({
  USERS: {
    GET: {
      GET: ({limit,offset, orderBy, filter}) => ({ method: "get", url: `/users?limit=${limit || 1000}&offset=${offset || 0}&orderBy=${orderBy || ''}&filter=${filter || ''}`, authentication: true }),
      SESSION: () => ({ method: "get", url: `/sessions` }),
    },
    POST: {
      LOG: () => ({ method: "post", url: `/login` }),
      USER: () => ({ method: "post", url: `/users` }),
      ADMINISTRATOR: () => ({ method: "post", url: `/users/administrator` }),
      LOGOUT: () => ({ method: "post", url: `/logout`, authentication: true }),
      LOG_OUT_ALL_DEVICES: () => ({ method: "post", url: `/users/logout/all/devices` }),
      ADD_WATCH_LIST: () => ({ method: "post", url: `/users/watchlist`, authentication: true }),
    },
    PATCH: {
      PASSWORD: () => ({ method: "post", url: `/users/change/password`, authentication: true }),
    },
    PUT: {
      PUT: (id) => ({
        method: "put",
        url: `/users?user_id=${id}`,
        authentication: true,
      }),
    },
    DELETE: (id) => ({ method: "post", url: `/users/${id}`, authentication: true }),
  },

  ITEMS: {
    GET: {
      GET: ( {limit,offset, orderBy, filter} ) => ({ method: "get", url: `/items?limit=${limit || 10}&offset=${offset || 0}&orderBy=${orderBy || ''}&filter=${filter || ''}` }),
      TOP: (filter) => ({ method: "get", url: `/items/top?filter=${filter}`, authentication: true }),
      GET_DATA: (id) => ({ method: "get", url: `/items/${id}`, authentication: true }),
    },
    POST: {
      ITEM: () => ({ method: "post", url: `/items` }),
    },
    PUT: {
      ITEM: (id) => ({ method: "post", url: `/items/edit/${id}` }),
    },
    DELETE: (id) => ({ method: "post", url: `/items/${id}`, authentication: true }),
  },

  CELEBRITIES: {
    GET: {
      GET: ({limit,offset, orderBy, filter}) => ({ method: "get", url: `/celebrities?limit=${limit || 10}&offset=${offset || 0}&orderBy=${orderBy || ''}&filter=${filter || ''}` }),
      GET_DATA: (id) => ({ method: "get", url: `/celebrities/${id}`, authentication: true }),
    },
    POST: {
      CELEBRITY: () => ({ method: "post", url: `/celebrities` }),
    },
    PUT: {
      CELEBRITY: (id) => ({ method: "post", url: `/celebrities/edit/${id}` }),
    },
    DELETE: (id) => ({ method: "post", url: `/celebrities/${id}`, authentication: true }),
  },

  COMMENTS: {
    POST: {
      REACT: (type, id) => ({ method: "post", url: `/comments/${type}/react/${id}`, authentication: true }),
      COMMENT: () => ({ method: "post", url: `/comments`, authentication: true }),
    },
  },

  LINKS: {
    POST: {
      LINK_WITH_CELEBRITY: (id, type) => ({ method: "post", url: `/${type}/link/celebrities/${id}`, authentication: true }),
      LINK_WITH_ITEM: (id, type) => ({ method: "post", url: `/${type}/link/items/${id}`, authentication: true }),
      
      UNLINK_WITH_CELEBRITY: (id, type) => ({ method: "post", url: `/${type}/unlink/celebrity/${id}`, authentication: true }),
      UNLINK_WITH_ITEM: (id, type) => ({ method: "post", url: `/${type}/unlink/item/${id}`, authentication: true }),
    },
  },
  
  RATINGS: {
    GET: {
      GET: (topType, {limit = 10, offset = 0}) => ({ method: "get", url: `/ratings/items?limit=10&offset=0`, authentication: true }),
    },
    POST: {
      POST_RATING: () => ({ method: "post", url: `/ratings`, authentication: true }),
    },
  },
  
});

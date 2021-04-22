module.exports = Object.freeze({
  USERS: {
    GET: {
      SESSION: () => ({
        method: "get",
        url: `/sessions`,
        authentication: true,
      }),
      CHECK_USER_EXIST: (id) => ({
        method: "get",
        url: `/user/exist?user_id=${id}`,
        authentication: true,
      }),
      GET: () => ({ method: "get", url: `/users`, authentication: true }),
      GET_DATA: (id) => ({
        method: "get",
        url: `/user?user_id=${id}`,
        authentication: true,
      }),
    },
    POST: {
      SESSION: () => ({ method: "post", url: `/sessions` }),
      USER: () => ({ method: "post", url: `/users`, authentication: true }),
    },
    PUT: {
      PUT: (id) => ({
        method: "put",
        url: `/users?user_id=${id}`,
        authentication: true,
      }),
    },
  },
  FILES: {
    GET: {
      GET: () => ({ method: "get", url: `/files`, authentication: true }),
    },
    POST: {
      FILE: () => ({ method: "post", url: `/file`, authentication: true }),
    },
    DELETE: (id) => ({
      method: "delete",
      url: `/file?file_id=${id}`,
      authentication: true,
    }),
  },
  PIPE_PRODUCTS: {
    GET: {
      CHECK_PIPE_PRODUCT_EXIST: (id) => ({
        method: "get",
        url: `/pipe/product/exist?pipe_product_id=${id}`,
        authentication: true,
      }),
      GET: () => ({
        method: "get",
        url: `/pipe/products`,
        authentication: true,
      }),
    },
    POST: {
      PIPE_PRODUCT: () => ({
        method: "post",
        url: `/pipe/products`,
        authentication: true,
      }),
    },
    PUT: {
      PUT: (id) => ({
        method: "put",
        url: `/pipe/products?pipe_product_id=${id}`,
        authentication: true,
      }),
    },
  },
  PRICES: {
    GET: {
      PRICES: () => ({ method: "get", url: `/prices`, authentication: true }),
    },
    PUT: {
      PRICE: () => ({ method: "put", url: `/prices`, authentication: true }),
    },
  },

  NAMES: {
    GET: {
      NAMES: (name) => ({
        method: "get",
        url: `/names?name=${name}`,
        authentication: true,
      }),
    },
  },

  ITEMS: {
    GET: {
      CHECK_ITEM_EXIST: (id) => ({
        method: "get",
        url: `/item/exist?item_id=${id}`,
        authentication: true,
      }),
      GET: () => ({ method: "get", url: `/items`, authentication: true }),
      GET_DATA: (id) => ({
        method: "get",
        url: `/item?item_id=${id}`,
        authentication: true,
      }),
    },
    POST: {
      ITEM: () => ({ method: "post", url: `/items`, authentication: true }),
    },
    PUT: {
      PUT: (id) => ({
        method: "put",
        url: `/items?item_id=${id}`,
        authentication: true,
      }),
    },
  },

  ITEM_MOVEMENTS: {
    POST: {
      ITEM_MOVEMENT: () => ({
        method: "post",
        url: `/item_movements`,
        authentication: true,
      }),
    },
  },
});

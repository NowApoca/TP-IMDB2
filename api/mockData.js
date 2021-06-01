module.exports ={
    mockData: (url, method) => {
        const splitUrl = url.split('?')
        return {
            status: dataByEndpoint[splitUrl[0]][method].status,
            async json(){
                return dataByEndpoint[splitUrl[0]][method]
            }
        }
    }
}


const dataByEndpoint = Object.freeze({

    "/users": {
        "get":  {
            status: 200,
            data: [
                {

                },
                {

                },
                {

                },
            ]
        },
        "post": {

        },
        "put": {

        },
        "delete": {

        },
        "patch": {

        },
    },

    "/sessions": {
        "get": {

        },
        "post": {

        },
    },

    "/items/top": {
      "get": {
          status: 200,
          data: [{
              image: './images/movie2.jpg',
              id: 'SOME TITLE',
              rating: 5,
              userRating: 5,
          },{
              image: './images/movie.jpg',
              id: 'SOME TITLE',
              rating: 7,
          },{
              image: './images/movie2.jpg',
              id: 'SOME TITLE',
              rating: 7,
          },{
              image: './images/movie.jpg',
              id: 'SOME TITLE',
              rating: 7,
          },{
              image: './images/movie2.jpg',
              id: 'SOME TITLE',
              rating: 7,
          },{
              image: './images/movie.jpg',
              id: 'SOME TITLE',
              rating: 7,
          },{
              image: './images/movie2.jpg',
              id: 'SOME TITLE',
              rating: 7,
              userRating: 7,
          },{
              image: './images/movie.jpg',
              id: 'SOME TITLE',
              rating: 7,
              userRating: 7,
          }]
      },
    },

    "/items/watchList": {
      "post": {
        status: 204,
        data: null
      }
    },

    "/items/rating": {
      "post": {
        status: 204,
        data: null
      }
    },

    "/items": {
        "get": {
            status: 200,
            data: [{
                image: './images/movie.jpg',
                id: 'SOME TITLE',
                userRating: 10,
                rating: 10,
                isBookmarked: true,
            },{
                image: './images/movie2.jpg',
                id: 'SOME TITLE',
                userRating: 5,
                rating: 5,
                isBookmarked: false,
            },{
                image: './images/movie3.jpeg',
                id: 'SOME TITLE',
                userRating: 9,
                rating: 9,
                isBookmarked: false,
            },{
                image: './images/movie2.jpg',
                id: 'SOME TITLE',
                userRating: 2,
                rating: 2,
                isBookmarked: true,
            },{
                image: './images/movie.jpg',
                id: 'SOME TITLE',
                userRating: 7,
                rating: 7,
                isBookmarked: true,
            },{
                image: './images/movie2.jpg',
                id: 'SOME TITLE',
                userRating: 3,
                rating: 3,
                isBookmarked: true,
            },{
                image: './images/movie2.jpg',
                id: 'SOME TITLE',
                userRating: 8,
                rating: 8,
                isBookmarked: true,
            },{
                image: './images/movie.jpg',
                id: 'SOME TITLE',
                userRating: 5,
                rating: 5,
                isBookmarked: true,
            }]
        },
        "post":  {},
        "put": {

        },
        "delete": {

        },
        "patch": {

        },
    },

    "/item": {
        "get": {
            status: 200,
            data: {
                data: {
                  id: 'SOUND OF MUSIC',
                  image: './images/movie2.jpg',
                  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                  year: 1998,
                  summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  rating: 5,
                  director: 'CHARLES MAGNUS',
                  productor: 'WARNER BROS',
                  writers: ['STEVE MACUL', 'JUAN CHUCRUT', 'OSCAR ALFREDO GALVEZ'],
                  stars: ['STEVE MACUL', 'JUAN CHUCRUT', 'OSCAR ALFREDO GALVEZ', 'JUAN CHUCRUT', 'JUAN CHUCRUT'],
                  productorCountry: 'USA',
                  language: 'EN',
                  releaseDate: '2021-04-23T15:44:57.243Z',
                  duration: 125,
                  genre: 'TERROR',
                  budget: 16.2,
                  earns: 20.2,
                },
                cast: [
                  {
                    name: 'RAUL',
                    surname: 'LOPEZ',
                    image: './images/actor.jpg',
                    characters: ['STEVE PEREZ']
                  },{
                    name: 'RAUL',
                    surname: 'LOPEZ',
                    image: './images/actor2.jpg',
                    characters: ['STEVE PEREZ']
                  },{
                    name: 'RAUL',
                    surname: 'LOPEZ',
                    image: './images/actor.jpg',
                    characters: ['STEVE PEREZ']
                  },{
                    name: 'RAUL',
                    surname: 'LOPEZ',
                    image: './images/actor2.jpg',
                    characters: ['STEVE PEREZ']
                  }
                ],
                relatedMovies: [
                  {
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  }
                ],
                comments: [
                  {
                    comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                    comments: [{
                      comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                      comments: [{
                        comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                        comments: [{
                          comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                          comments: [],
                          upvotes: 15,
                          reactions: {
                            like: 15,
                            dislike: 10,
                          }
                        }],
                        upvotes: 15,
                        reactions: {
                          like: 15,
                          dislike: 10,
                        }
                      }],
                      upvotes: 15,
                      reactions: {
                        like: 15,
                        dislike: 10,
                      }
                    },{
                      comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                      comments: [],
                      upvotes: 15,
                      reactions: {
                        like: 15,
                        dislike: 10,
                      }
                    },{
                      comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                      comments: [],
                      upvotes: 15,
                      reactions: {
                        like: 15,
                        dislike: 10,
                      }
                    }],
                    upvotes: 15,
                    reactions: {
                      like: 15,
                      dislike: 10,
                    }
                  },
                  {
                    comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                    comments: [],
                    isDeleted: true,
                    id: 5,
                    likes: 3,
                    likedByUser: true,
                    favorites: 2,
                    favoritedByUser: false,
                    smiles: 65,
                    smiledByUser: false,
                    frownes: 6,
                    frownedByUser: true,
                  },
                  {
                    comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                    comments: [],
                    isDeleted: true,
                    id: 5,
                    likes: 3,
                    likedByUser: true,
                    favorites: 2,
                    favoritedByUser: false,
                    smiles: 65,
                    smiledByUser: false,
                    frownes: 6,
                    frownedByUser: true,
                  },
                  {
                    comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                    isDeleted: false,
                    id: 5,
                    likes: 3,
                    likedByUser: true,
                    favorites: 2,
                    favoritedByUser: false,
                    smiles: 65,
                    smiledByUser: false,
                    frownes: 6,
                    frownedByUser: true,
                  }
                ]
              }
        },
    },

    "/celebrity": {
        "get": {
            status: 200,
            data: {
                data: {
                  name: 'Juan',
                  rating: 5,
                  image: './images/actor.jpg',
                  surname: 'Perez',
                  country: 'Argentina',
                  language: 'Ingles',
                  biography: 'Perez PerezPerezPerezPerezPerezPerez PerezPerezPerezPerezPerezPerezPerezPerezPerez PerezPerezPerezPerezPerezPerezPerezPerezPerezPerezPerezPerezPerezPerez',
                  bornDate: '2021-04-23T18:41:56.908Z',
                  genres: ['drama','terror','comedia']
                },
                relatedMovies: [
                  {
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie.jpg',
                  },{
                    id: 'title some title',
                    image: './images/movie2.jpg',
                  }
                ],
                comments: [
                  {
                    comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                    comments: [{
                      comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                      comments: [{
                        comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                        comments: [{
                          comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                          comments: [],
                          upvotes: 15,
                          reactions: {
                            like: 15,
                            dislike: 10,
                          }
                        }],
                        upvotes: 15,
                        reactions: {
                          like: 15,
                          dislike: 10,
                        }
                      }],
                      upvotes: 15,
                      reactions: {
                        like: 15,
                        dislike: 10,
                      }
                    },{
                      comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                      comments: [],
                      upvotes: 15,
                      reactions: {
                        like: 15,
                        dislike: 10,
                      }
                    },{
                      comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                      comments: [],
                      upvotes: 15,
                      reactions: {
                        like: 15,
                        dislike: 10,
                      }
                    }],
                    upvotes: 15,
                    reactions: {
                      like: 15,
                      dislike: 10,
                    }
                  },
                  {
                    comment: 'ALGUN COMENTARIO ALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIOALGUN COMENTARIO',
                    comments: [],
                    upvotes: 15,
                    reactions: {
                      like: 15,
                      dislike: 10,
                    }
                  }
                ]
                  
              }
        },
    },

    "/celebrities": {
        "get": {
            status: 200,
            data: [
                {
                  name: 'algun name',
                  type: 'drama',
                  age: '56',
                  image: './images/actor.jpg',
                  id: 'idDeUsuario',
                  rating: 5,
                  userRating: 10,
                },
                {
                  name: 'algun name',
                  type: 'drama',
                  age: '56',
                  image: './images/actor2.jpg',
                  id: 'idDeUsuario1',
                  rating: 4,
                  userRating: 10,
                },
                {

                  name: 'algun name',
                  type: 'drama',
                  age: '56',
                  image: './images/actor.jpg',
                  id: 'idDeUsuario2',
                  rating: 7,
                  userRating: 10,
                },
            ]
        },
        "post": {

        },
        "put": {

        },
        "delete": {

        },
        "patch": {

        },
    },

    "/celebrities/items": {
        "post": {

        },
        "delete": {

        },
    },

    "/items/relations": {
        "get": {

        },
        "post": {

        },
        "put": {

        },
        "delete": {

        },
        "patch": {

        },
    },



    "/items/genres": {
        "post": {

        },
        "delete": {

        },
    },



    "/genres": {
        "get": {

        },
        "post": {

        },
        "put": {

        },
        "delete": {

        },
        "patch": {

        },
    },


    "/celebrities/genres": {
        "post": {

        },
        "delete": {

        },
    },

    "/ratings": {
        "get": {

        },
        "post": {

        },
        "delete": {

        },
    },

    "/roles": {
        "get": {

        },
        "post": {

        },
        "put": {

        },
        "delete": {

        },
        "patch": {

        },
    },

    "/roles": {
        "get": {

        },
        "post": {

        },
        "put": {

        },
        "delete": {

        },
        "patch": {

        },
    },

    "/roles/permissions": {
        "post": {

        },
        "delete": {

        },
    },

    "/commentaries": {
        "post": {

        },
        "delete": {

        },
        "patch": {

        },
    },

    "/reactions": {
        "post": {

        },
    },

    "/comments/react": {
      "post": {
        status: 204,
        data: null
      }
    },

    "/comments": {
      "post": {
        status: 200,
        data: {id: 56}
      }
    },
});
  
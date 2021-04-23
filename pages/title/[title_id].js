import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import TitleContent from '../../components/Organisms/TitleContent'
import {useRouter} from 'next/router'

const testTitleData = {
  data: {
    title: 'SOUND OF MUSIC',
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
      image: null,
      characters: ['STEVE PEREZ']
    },{
      name: 'RAUL',
      surname: 'LOPEZ',
      image: null,
      characters: ['STEVE PEREZ']
    },{
      name: 'RAUL',
      surname: 'LOPEZ',
      image: null,
      characters: ['STEVE PEREZ']
    },{
      name: 'RAUL',
      surname: 'LOPEZ',
      image: null,
      characters: ['STEVE PEREZ']
    }
  ],
  relatedMovies: [
    {
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    },{
      title: 'title some title',
      img: 'img some img',
    }
  ],
  comments: [
    {
      comment: 'ALGUN COMENTARIO',
      comments: [{
        comment: 'ALGUN COMENTARIO',
        comments: [{
          comment: 'ALGUN COMENTARIO',
          comments: [{
            comment: 'ALGUN COMENTARIO',
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
        comment: 'ALGUN COMENTARIO',
        comments: [],
        upvotes: 15,
        reactions: {
          like: 15,
          dislike: 10,
        }
      },{
        comment: 'ALGUN COMENTARIO',
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
      comment: 'ALGUN COMENTARIO',
      comments: [],
      upvotes: 15,
      reactions: {
        like: 15,
        dislike: 10,
      }
    }
  ]
}


export default function Title({user, t}) {
  const router = useRouter()

  //const {title} = router.query.title

  return (
    <div >
      <Header />
      <TitleContent titleData={testTitleData} />
      <Footer />
    </div>
  )
}

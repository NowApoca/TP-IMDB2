import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import CelebrityContent from '../../components/Organisms/CelebrityContent'
import {useRouter} from 'next/router'

const testCelebrityData = {
  data: {
    name: 'Juan',
    rating: 5,
    surname: 'Perez',
    country: 'Argentina',
    language: 'Ingles',
    biography: 'Perez PerezPerezPerezPerezPerezPerez PerezPerezPerezPerezPerezPerezPerezPerezPerez PerezPerezPerezPerezPerezPerezPerezPerezPerezPerezPerezPerezPerezPerez',
    bornDate: '2021-04-23T18:41:56.908Z',
    genres: ['drama','terror','comedia']
  },
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
      <CelebrityContent celebrityData={testCelebrityData} />
      <Footer />
    </div>
  )
}

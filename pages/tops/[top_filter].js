import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import Tops from '../../components/Organisms/Tops'
import {useRouter} from 'next/router'

const testTops = {
    tops: [
        {
          title: 'ALGUN TITULO ADSDSADAS',
          rating: 4,
          isInWatchedList: true,
        },{
          title: 'ALGUN TITULO ADSDSADAS',
          rating: 1,
          isInWatchedList: false,
        },{
          title: 'ALGUN TITULO ADSDSADAS',
          rating: 3,
          isInWatchedList: false,
        },{
          title: 'ALGUN TITULO ADSDSADAS',
          rating: 4,
          isInWatchedList: true,
        },{
          title: 'ALGUN TITULO ADSDSADAS',
          rating: 2,
          isInWatchedList: true,
        }
    ],
}


export default function UserTops({user, t}) {
  const router = useRouter()

  //const {title} = router.query.title

  return (
    <div >
      <Header />
      <Tops
        tops={testTops.tops} />
      <Footer />
    </div>
  )
}

import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import Tops from '../../components/Organisms/Tops'
import {useRouter} from 'next/router'

const testTops = {
    tops: [
        {

        }
    ]
}


export default function UserTops({user, t}) {
  const router = useRouter()

  //const {title} = router.query.title

  return (
    <div >
      <Header />
      <Tops titleData={testTops.tops} />
      <Footer />
    </div>
  )
}

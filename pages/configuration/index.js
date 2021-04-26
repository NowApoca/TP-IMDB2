import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import Configuration from '../../components/Organisms/Configuration'
import {useRouter} from 'next/router'

const testConfigurationData = {
    movies: [],
}


export default function Title({user, t}) {
  const router = useRouter()

  const {name_id} = router.query

  return (
    <div >
      <Header />
      <span>{name_id}</span>
      <Configuration />
      <Footer />
    </div>
  )
}

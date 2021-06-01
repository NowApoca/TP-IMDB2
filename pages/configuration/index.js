import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import Configuration from '../../components/Organisms/Configuration'
import {useRouter} from 'next/router'

export default function Title({user, t}) {
  const router = useRouter()

  return (
    <div >
      <Header />
      <Configuration />
      <Footer />
    </div>
  )
}

import Header from '../components/Organisms/Header'
import Footer from '../components/Organisms/Footer'
import Home from '../components/Organisms/Home'

export default function Root({user, t}) {
  return (
    <div >
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

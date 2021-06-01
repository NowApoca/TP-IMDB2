import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import Tops from '../../components/Organisms/Tops'
import {useRouter} from 'next/router'
import hit from '../../api/hit'
import endpoints from '../../api/endpoints'
import {useEffect, useState} from 'react'


export default function UserTops({user, t}) {

  const router = useRouter();

  const { top_filter } = router.query;

  const [items, setItems] = useState([]);

  useEffect(() => {
    hit(endpoints.ITEMS.GET.TOP(top_filter)).then(result => {
      if(result.status == 200){
        setItems(result.data)
      }
    })
  }, [])

  return (
    <div >
      <Header />
      <Tops
        tops={items} filter={top_filter} />
      <Footer />
    </div>
  )
}

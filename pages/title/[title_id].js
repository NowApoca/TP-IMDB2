import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import TitleContent from '../../components/Organisms/TitleContent'
import {useRouter} from 'next/router'
import hit from '../../api/hit'
import endpoints from '../../api/endpoints'
import {useEffect, useState} from 'react'

export default function Title({user, t}) {

  const router = useRouter();

  const { title_id } = router.query;


  const [itemData, setItemData] = useState(null)

  useEffect( () => {
    hit(endpoints.ITEMS.GET.GET_DATA(title_id)).then(result => {
      if(result.status == 200){
        setItemData(result.data)
      }
    })
  }, [])

  return (
    <div >
      <Header />
      {
        itemData && <TitleContent titleData={itemData} />
      }
      <Footer />
    </div>
  )
}

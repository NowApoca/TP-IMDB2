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

  const [entities, setEntities] = useState([]);

  useEffect(() => {
    if(top_filter){
      hit(endpoints.RATINGS.GET.GET(top_filter, {})).then(result => {
        console.log(result, 'result')
        if(result.status == 200){
          setEntities(result.data)
        }
      })
    }
  }, [top_filter])

  return (

<>
<div className='page-container'>
      <Header />
      <Tops
        tops={entities} filter={top_filter} />
</div>
<Footer />
</>
  )
}

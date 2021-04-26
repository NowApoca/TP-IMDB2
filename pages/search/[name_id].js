import Header from '../../components/Organisms/Header'
import Footer from '../../components/Organisms/Footer'
import FilterSearchResult from '../../components/Molecules/FilterSearchResult'
import {useRouter} from 'next/router'

const testSearchData = {
    movies: [
        {

        },{

        },{

        }
    ],
    series: [
        {

        },{

        },{

        }
    ],
    celebrities: [],
    users: [
        {

        },{

        },{

        }
    ],
}


export default function Title({user, t}) {
  const router = useRouter()

  const {name_id} = router.query

  return (
    <div >
      <Header />
      <span>{name_id}</span>
      <FilterSearchResult 
        label={'movies'}
        type={'movies'}
        data={testSearchData.movies}
        />
      <FilterSearchResult 
        label={'series'}
        type={'series'}
        data={testSearchData.series}
        />
      <FilterSearchResult 
        label={'celebrities'}
        type={'celebrities'}
        data={testSearchData.celebrities}
        />
      <FilterSearchResult 
        label={'users'}
        type={'users'}
        data={testSearchData.users}
        />
      <Footer />
    </div>
  )
}

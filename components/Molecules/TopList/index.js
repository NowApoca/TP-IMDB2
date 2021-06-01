import TopListHeader from './TopListHeader'
import TopListFilters from './TopListFilters'
import OurTable from '../OurTable'
import Rating from '../../Atoms/Rating'
import Bookmark from '../../Atoms/Bookmark'
import RateButton from '../../Atoms/RateButton'
import Popup from '../Popup'
import StarsRate from '../StarsRate'
import {useState} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import { useToasts } from 'react-toast-notifications'

export default function EntityList({tops = [], filter}){

    const columns = [
        { name: "Puesto y titulo", field: "title" },
        { name: "Rating", field: "rating" },
        { name: "Tu rating", field: "yourRating" },
        { name: "Watchlist", field: "watchlist" },
      ];
      const columnsOrder = columns.map((column) => column.field);
    
      const rows = tops.map((element, index) => {
        return {
          columnsOrder: columnsOrder,
          values: {
            title: <div className='top-list-title'>
                <img
                    src={'../' + element.image}
                    className='top-list-title-image'
                />
                <span className='top-list-title-text'>{`${index +1}. `}</span>
                <span className='top-list-title-text'>{element.id || 'ALGUN TITULO'}</span>
            </div>,
            rating:  <Rating rating={element.rating} />,

            yourRating: <TopYourRating item={element} /> ,

            watchlist: <div className='top-list-bookmark-container'>
                  <Bookmark isBookmarked={element.isBookmarked} idItem={element.id} className='top-list-bookmark' />
              </div>,
          },
        };
      });

    return (<div>
        <TopListHeader filter={filter} />
        <TopListFilters />
        <OurTable
            columnsOrder={columnsOrder}
            columns={columns}
            rows={rows}
        />
    </div>)
}

function TopYourRating({item}){

  const [rating, setRatting] = useState(item.userRating);
  const { addToast } = useToasts()

  const handleOnRate = (points) => {
    const body = {
        rating: points,
        item_id: item.id,
    }
    hit(endpoints.ITEMS.POST.POST_RATING(), {body,toasts: {
        addToast, successMessage: 'POST_ROLE_SUCCESSFUL'
    }}).then(result => {
        if(result.status == 200){

        }
    })
  }

  return <Popup
    info={{
        title: 'POPUP_DELETE_USER_TITLE',
        content: <StarsRate value={rating} setter={setRatting} />,
      }}
      type={'danger'}
      onClick={() => {
          handleOnRate(rating)
      }}
      Button={({onClick}) => {
          return <RateButton onClick={onClick} rating={rating} />
      }}
  />
}

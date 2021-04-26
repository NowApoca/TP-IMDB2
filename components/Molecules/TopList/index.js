import TopListHeader from './TopListHeader'
import TopListFilters from './TopListFilters'
import OurTable from '../OurTable'
import Rate from '../../Atoms/RateButton'
import Bookmark from '@material-ui/icons/Bookmark'

export default function EntityList({tops = []}){



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
                    src='../../logo.png'
                    className='top-list-title-image'
                />
                <span className='top-list-title-text'>{`${index +1}. `}</span>
                <span className='top-list-title-text'>{element.title || 'ALGUN TITULO'}</span>
            </div>,
            rating:  <Rate rating={element.rating} />,
            yourRating:  <Rate rating={element.rating} />,
            watchlist: 
              <div className='top-list-bookmark-container'>
                  {
                  element.isInWatchedList?
                  <Bookmark
                        fontSize='inherit'
                        className='top-list-bookmark-watched'
                    />
                  :
                    <Bookmark
                        fontSize='inherit'
                        className='top-list-bookmark-not-watched'
                    />
                  }
                
              </div>,
          },
        };
      });

    return (<div>
        <TopListHeader />
        <TopListFilters />
        <OurTable
            columnsOrder={columnsOrder}
            columns={columns}
            rows={rows}
        />
    </div>)
}
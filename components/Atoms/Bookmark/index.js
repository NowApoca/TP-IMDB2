import Bookmark from '@material-ui/icons/Bookmark'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'
import {useState} from 'react'
import { useToasts } from 'react-toast-notifications'

export default function BookmarkElement({idItem, isBookmarked, className}){

    const { addToast } = useToasts()
    const [isCurrentBookmarked, setIsBookMarked] = useState(isBookmarked)

    const handleBookMark = (id) => {
        const body = {
            itemId: id,
        }
        hit(endpoints.USERS.POST.ADD_WATCH_LIST(), {body,toasts: {
            addToast, successMessage: 'AGREGADO A LA WATCHLIST'
        }}).then(result => {
            if(result.status == 201 || result.status == 204){
                setIsBookMarked(!isCurrentBookmarked)
            }
        })
    }

    return <Bookmark
    style={{
        fontSize: "2rem",
        color: isCurrentBookmarked? 'red' : 'blue'
    }}
    className={className || 'carrousel-item-bookmark'}
    onClick={() => {
        handleBookMark(idItem)
    }}
/>
}
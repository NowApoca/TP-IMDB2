import ContentLoader, { Rect, Circle } from 'react-content-loader'
import LastPremieres from '../../Molecules/LastPremieres'
import CelebrityCards from '../CelebrityCards'
import CarrouselHorizontal from '../../Molecules/CarrouselHorizontal'
import Banner from '../../Atoms/Banner'
import Button from '../../Atoms/Button'
import UserIdInput from '../../Atoms/Inputs/UserIdInput'
import {useState, useEffect} from 'react'
import hit from '../../../api/hit'
import endpoints from '../../../api/endpoints'

function getItemsWatchList(setter){
    hit(endpoints.ITEMS.GET.GET()).then(result => {
        console.log(result)
        if(result.status == 200){
            setter(result.data);
        }
    })
}

function getItemsMoreRecent(setter){
    hit(endpoints.ITEMS.GET.GET()).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}

function getItemsMoreVoted(setter){
    hit(endpoints.ITEMS.GET.GET()).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}

function getItemsPremiers(setter){
    hit(endpoints.ITEMS.GET.GET()).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}

function getCelebritiesBirthdays(setter){
    hit(endpoints.CELEBRITIES.GET.GET()).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}

function getCelebritiesMoreVoted(setter){
    hit(endpoints.CELEBRITIES.GET.GET()).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}


export default function Home(){

    const [itemsWatchList, setItemsWatchList] = useState([]);
    const [itemsMoreRecent, setItemsMoreRecent] = useState([]);
    const [itemsMoreVoted, setItemsMoreVoted] = useState([]);
    const [itemPremiers, setItemsPremiers] = useState([]);

    const [celebritiesBirthday, setCelebritiesBirthdays] = useState([]);
    const [celebritiesMoreVoted, setCelebritiesMoreVoted] = useState([]);

    useEffect(() => {
        getItemsWatchList(setItemsWatchList)
        getItemsMoreRecent(setItemsMoreRecent)
        getItemsMoreVoted(setItemsMoreVoted)
        getItemsPremiers(setItemsPremiers)
        getCelebritiesBirthdays(setCelebritiesBirthdays)
        getCelebritiesMoreVoted(setCelebritiesMoreVoted)
    }, [])

    return (
        <div>
            <LastPremieres lastPremieres={itemPremiers} className='home-loader-content' />
            <Banner text='WATCH_LIST' size='title' />
            <CarrouselHorizontal type='items' items={itemsWatchList} />
            <Banner text='CELEBRITIES_BIRTHDAYS' size='title' />
            <CelebrityCards celebrities={celebritiesBirthday} className='home-loader-content' />
            <Banner text='MORE_RECENT' size='title' />
            <CarrouselHorizontal type='items' items={itemsMoreRecent} />
            <Banner text='CELEBRITIES_MORE_VOTED' size='title' />
            <CelebrityCards celebrities={celebritiesMoreVoted} />
            <Banner text='MORE_VOTED' size='title' />
            <CarrouselHorizontal type='items' items={itemsMoreVoted} />
        </div>
    )
}
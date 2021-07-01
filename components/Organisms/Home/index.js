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
    hit(endpoints.ITEMS.GET.GET({})).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}

function getItemsMoreRecent(setter){
    hit(endpoints.ITEMS.GET.GET({})).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}

function getItemsMoreVoted(setter){
    hit(endpoints.ITEMS.GET.GET({})).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}

function getItemsPremiers(setter){
    hit(endpoints.ITEMS.GET.GET({})).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}

function getCelebritiesBirthdays(setter){
    hit(endpoints.CELEBRITIES.GET.GET({})).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}

function getCelebritiesMoreVoted(setter){
    hit(endpoints.CELEBRITIES.GET.GET({})).then(result => {
        if(result.status == 200){
            setter(result.data);
        }
    })
}


export default function Home({user}){

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
            <Banner text='CELEBRIDADES' size='title' />
            <CelebrityCards user={user} celebrities={celebritiesBirthday} className='home-loader-content' />
            <Banner text='PELICULAS Y SERIES' size='title' />
            <CarrouselHorizontal user={user} type='items' items={itemsMoreRecent} />
        </div>
    )
}
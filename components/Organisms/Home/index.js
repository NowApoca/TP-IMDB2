import ContentLoader, { Rect, Circle } from 'react-content-loader'
import LastPremieres from '../../Molecules/LastPremieres'
import CelebrityCards from '../CelebrityCards'
import CarrouselHorizontal from '../../Molecules/CarrouselHorizontal'
import Banner from '../../Atoms/Banner'
import Button from '../../Atoms/Button'
import UserIdInput from '../../Atoms/Inputs/UserIdInput'

const test_items = [{
    image: 'https://lh3.googleusercontent.com/mHzNDBVUbN5g-fJB7cLiGOrzXhBJO9vNydUF4laYfiqW2rcXfUAeLcPkA0Z3PLML3nBPyX_wOY8ONHFZd8UFkTE2iDOBZdAaOLpEDPL8PndH5H7w5xWSeE9MrdfCHoNRK9DnJd71=w2400',
    title: 'SOME TITLE'
},{
    image: 'https://lh3.googleusercontent.com/mHzNDBVUbN5g-fJB7cLiGOrzXhBJO9vNydUF4laYfiqW2rcXfUAeLcPkA0Z3PLML3nBPyX_wOY8ONHFZd8UFkTE2iDOBZdAaOLpEDPL8PndH5H7w5xWSeE9MrdfCHoNRK9DnJd71=w2400',
    title: 'SOME TITLE'
},{
    image: 'https://lh3.googleusercontent.com/mHzNDBVUbN5g-fJB7cLiGOrzXhBJO9vNydUF4laYfiqW2rcXfUAeLcPkA0Z3PLML3nBPyX_wOY8ONHFZd8UFkTE2iDOBZdAaOLpEDPL8PndH5H7w5xWSeE9MrdfCHoNRK9DnJd71=w2400',
    title: 'SOME TITLE'
},{
    image: 'https://lh3.googleusercontent.com/mHzNDBVUbN5g-fJB7cLiGOrzXhBJO9vNydUF4laYfiqW2rcXfUAeLcPkA0Z3PLML3nBPyX_wOY8ONHFZd8UFkTE2iDOBZdAaOLpEDPL8PndH5H7w5xWSeE9MrdfCHoNRK9DnJd71=w2400',
    title: 'SOME TITLE'
},{
    image: 'https://lh3.googleusercontent.com/mHzNDBVUbN5g-fJB7cLiGOrzXhBJO9vNydUF4laYfiqW2rcXfUAeLcPkA0Z3PLML3nBPyX_wOY8ONHFZd8UFkTE2iDOBZdAaOLpEDPL8PndH5H7w5xWSeE9MrdfCHoNRK9DnJd71=w2400',
    title: 'SOME TITLE'
},{
    image: 'https://lh3.googleusercontent.com/mHzNDBVUbN5g-fJB7cLiGOrzXhBJO9vNydUF4laYfiqW2rcXfUAeLcPkA0Z3PLML3nBPyX_wOY8ONHFZd8UFkTE2iDOBZdAaOLpEDPL8PndH5H7w5xWSeE9MrdfCHoNRK9DnJd71=w2400',
    title: 'SOME TITLE'
},{
    image: 'https://lh3.googleusercontent.com/mHzNDBVUbN5g-fJB7cLiGOrzXhBJO9vNydUF4laYfiqW2rcXfUAeLcPkA0Z3PLML3nBPyX_wOY8ONHFZd8UFkTE2iDOBZdAaOLpEDPL8PndH5H7w5xWSeE9MrdfCHoNRK9DnJd71=w2400',
    title: 'SOME TITLE'
},{
    image: 'https://lh3.googleusercontent.com/mHzNDBVUbN5g-fJB7cLiGOrzXhBJO9vNydUF4laYfiqW2rcXfUAeLcPkA0Z3PLML3nBPyX_wOY8ONHFZd8UFkTE2iDOBZdAaOLpEDPL8PndH5H7w5xWSeE9MrdfCHoNRK9DnJd71=w2400',
    title: 'SOME TITLE'
}]

const test_premieres = [
    {},
    {},
    {},
    {},
]

const celebrities = [
    {},
    {},
    {},
    {},
]

export default function Home(){

    const current_items = test_items

    return (
        <div>
            <Button
                className='button-general-class'
                text='asdads'
            />
            <UserIdInput />
            <LastPremieres lastPremieres={test_premieres} className='home-loader-content' />
            <Banner text='WATCH_LIST' size='title' />
            <CarrouselHorizontal items={current_items} />
            <Banner text='CELEBRITIES_BIRTHDAYS' size='title' />
            <CelebrityCards celebrities={celebrities} className='home-loader-content' />
            <Banner text='MORE_RECENT' size='title' />
            <CarrouselHorizontal items={undefined} />
            <Banner text='CELEBRITIES_MORE_VOTED' size='title' />
            <CelebrityCards celebrities={celebrities} />
            <Banner text='MORE_VOTED' size='title' />
            <CarrouselHorizontal items={current_items} />
        </div>
    )
}
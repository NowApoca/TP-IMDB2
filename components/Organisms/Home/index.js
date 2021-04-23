import ContentLoader, { Rect, Circle } from 'react-content-loader'
import LastPremieres from '../../Molecules/LastPremieres'
import CelebrityCards from '../CelebrityCards'
import CarrouselHorizontal from '../../Molecules/CarrouselHorizontal'
import Banner from '../../Atoms/Banner'
//const Loader = ({className}) =>  <ContentLoader 
//speed={2}
//width={400}
//height={260}
//viewBox="0 0 400 260">
//{/* Only SVG shapes */}    
//        
//    <rect x="71" y="4" rx="0" ry="0" width="94" height="103" /> 
//    <rect x="71" y="113" rx="0" ry="0" width="34" height="16" /> 
//    <rect x="69" y="133" rx="0" ry="0" width="94" height="16" /> 
//    <rect x="69" y="154" rx="0" ry="0" width="94" height="16" /> 
//    <rect x="126" y="113" rx="0" ry="0" width="34" height="16" />
//</ContentLoader>

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
            <LastPremieres lastPremieres={test_premieres} className='home-loader-content' />
            <Banner text='WATCH_LIST' size='title' />
            <CarrouselHorizontal items={current_items} />
            <Banner text='CELEBRITIES_BIRTHDAYS' size='title' />
            <CelebrityCards celebrities={celebrities} className='home-loader-content' />
            <Banner text='MORE_RECENT' size='title' />
            <CarrouselHorizontal items={current_items} />
            <Banner text='CELEBRITIES_MORE_VOTED' size='title' />
            <CelebrityCards celebrities={celebrities} />
            <Banner text='MORE_VOTED' size='title' />
            <CarrouselHorizontal items={current_items} />
        </div>
    )
}
import ContentLoader, { Rect, Circle } from 'react-content-loader'
import LastPremieres from '../../Molecules/LastPremieres'
import ActorsBirthdays from '../../Molecules/ActorsBirthdays'
import Carrousel from '../../Molecules/Carrousel'

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
}]

export default function Home(){

    const current_items = test_items

    return (
        <div>
            <LastPremieres className='home-loader-content' />
            <ActorsBirthdays actors={[]} className='home-loader-content' />
            <Carrousel items={current_items} />
        </div>
    )
}
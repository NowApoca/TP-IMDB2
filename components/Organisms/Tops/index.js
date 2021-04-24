import {useState} from 'react'
import EntityFilters from '../../Molecules/EntityFilters'
import TopList from '../../Molecules/TopList'

export default function Tops({tops, filters}){

    return <div className='tops-main-container'>
        <div className='tops-entities-container'>
            <TopList tops={tops} />
        </div>
        <div className='tops-filters-container'>
            <EntityFilters filters={filters}/>
        </div>
    </div>
}
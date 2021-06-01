import {useState} from 'react'
import EntityFilters from '../../Molecules/EntityFilters'
import TopList from '../../Molecules/TopList'

export default function Tops({tops, filter}){

    return <div className='tops-main-container'>
        <div className='tops-entities-container'>
            <TopList filter={filter} tops={tops} />
        </div>
        <div className='tops-filters-container'>
            <EntityFilters filter={filter}/>
        </div>
    </div>
}
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = ({ defaultcategories = [] }) => {

    // const [categories, setCategories] = useState(['Dragon Ball'])
    const [categories, setCategories] = useState( defaultcategories )

    // const handleAdd = () => {
    //     setCategories( categories => [...categories, 'HunterXHunter'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                        key={ category }
                        category={ category }
                    />)
                }
            </ol>
        </>
    )
}


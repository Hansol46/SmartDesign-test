import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar({filterMan, filterWoman}) {
    return (
        <div className='shoes__block'>
            <button onClick={filterMan}>MANS</button>
            <button onClick={filterWoman}>WOMANS</button>
        </div>
    )
}

export default NavBar

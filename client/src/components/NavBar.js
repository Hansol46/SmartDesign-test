import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='shoes__block'>
            <Link to='/mans'>Мужская обувь</Link> 
            <Link to='/womans'>Женская обувь</Link> 
        </div>
    )
}

export default NavBar

import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className='shoes__block'>
            <Link  to='/asd'>Зимняя обувь</Link>
            <Link to='/we'>Летняя обувь</Link>
            <Link to='/qwe'>Спортивная обувь</Link>
            <Link to='/dfs'>Мужская обувь</Link>
            <Link to='/qwe'>Женская обувь</Link>
        </div>
    )
}

export default NavBar

import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'
export const Sidebar = () => {
    return (
        <div className="Sidebar">
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}

export default Sidebar
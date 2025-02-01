import { Routes, Route } from 'react-router-dom'

import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { New } from '../pages/New'

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home /> } /> 
            <Route path="/New" element={<New />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Details/:id"element={<Details />} />
            
        </Routes>
    )
}

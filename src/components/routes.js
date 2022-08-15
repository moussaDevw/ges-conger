import React from 'react';
import { Route , Routes } from 'react-router-dom'; 
import ListUser from './admin/List-user/ListUser';
import ListConger from './admin/ListConger/ListConger';
import UpdateUser from './admin/UpdateUser/UpdateUser';
import Login from './Login/Login';
import Main from './main/main';
const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Main />} />
            <Route path='/admin/tableau-de-bord' element={<ListUser />} />
            <Route path='/modifier-personnel' element={<UpdateUser />} />
            <Route path='/ajouter-personnel' element={<UpdateUser />} />
            <Route path='/list-demande-de-conger' element={<ListConger />} />
        </Routes>
    )
}
export default routes; 
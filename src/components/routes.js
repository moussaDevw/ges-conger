import React from 'react';
import { Route , Routes } from 'react-router-dom'; 
import AddUser from './admin/AddUser/AddUser';
import DemandeAccept from './admin/DemandeAccept/DemandeAccept';
import DemandeRejeter from './admin/DemandeRejeter/DemandeRejeter';
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
            <Route path='/ajouter-personnel' element={<AddUser />} />
            <Route path='/list-demande-de-conger' element={<ListConger />} />
            <Route path='/demande-accepter' element={<DemandeAccept />} />
            <Route path="/demande-rejeter" element={<DemandeRejeter />} />
        </Routes>
    )
}
export default routes;
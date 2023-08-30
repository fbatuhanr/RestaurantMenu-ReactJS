import React, {useState} from 'react';

import Login from "./admin/login";
import Dashboard from "./admin/dashboard";

const Admin = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const setLoginSuccessful = () => { setIsLoggedIn(true); }

    return (
        <div id="admin">
            { isLoggedIn ? <Dashboard /> : <Login setLoginSuccessful={setLoginSuccessful}/>  }
        </div>
    );
};

export default Admin;
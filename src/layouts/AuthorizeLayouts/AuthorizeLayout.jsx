import React, { useEffect } from 'react';

import { history, urlLocations } from "routes/urlLocations";
import Header from './Header/Header'

const AuthorizeLayout = ({ children, title }) => {
    useEffect(() => {
        const storage = localStorage?.getItem("storageTyp");
        const jwt = window[storage]?.getItem('jwt');
        !jwt && history.push(`${urlLocations.login}#back`)
    }, []);

  return(
      <div>
          <Header title={title} />
          { children }
      </div>
  )
};

export default AuthorizeLayout;


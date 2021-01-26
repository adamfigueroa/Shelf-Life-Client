import React from 'react';

const AppContext = React.createContext({
    items: [],
})

AppContext.displayName = 'AppContext'

export default AppContext;
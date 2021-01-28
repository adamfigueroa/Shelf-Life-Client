import React from 'react';

const AppContext = React.createContext({
    items: [],
    setItems: () => {}
})

AppContext.displayName = 'AppContext'

export default AppContext;
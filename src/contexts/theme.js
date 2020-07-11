import React from 'react'

let default_value = {}

let Theme = React.createContext(default_value)

function ThemeProvider(props){
  return(
    <Theme.Provider>
      {props.children}
    </Theme.Provider>
  )
}

export default ThemeContext

export { ThemeProvider }
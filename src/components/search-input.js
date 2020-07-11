import React from 'react'

import GlobalContext from '../contexts/general-context'

function SearchInput(props){
  let {hello, setHello} = React.useContext(GlobalContext)
  let search_input_ref = React.useRef()

  const handleSearchOnChange = (e) =>{
    let input_box_text = e.target.value
    search_input_ref.value = input_box_text
    setHello(input_box_text)
  }

  return(
    <>
      <input ref={search_input_ref} default_value="casetify" onChange={handleSearchOnChange}/>
    </>
  )
}

export default SearchInput
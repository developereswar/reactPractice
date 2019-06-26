import React from 'react';
import  AppRoute  from './route'
import { Provider } from 'react-redux'
import {store} from './store'

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Provider store={store}><AppRoute/> </Provider>
    )
  }
}
export default App
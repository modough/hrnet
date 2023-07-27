import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import authSliceReducer from './features/authSliceReducer'




const reducers = combineReducers({
  userReducer: authSliceReducer
})
// store redux
const store = configureStore({
  reducer: reducers
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

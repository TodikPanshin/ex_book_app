import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { Home } from './pages/home'
import { store } from './store/store'




export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <section className="App main-layout">
          <AppHeader />
          <main className="main-app main-layout full">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </section>
      </Router>
    </Provider>
  )
}


import { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useAppSelector } from './store/store'

import Nav from './components/Nav'
import Products from './pages/Products'
import Signin from './pages/SIgnin'
import Cart from './pages/Cart'

import './App.css'

function UnAuthApp() {
  return (
    <Switch>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/">
        <Products />
      </Route>
    </Switch>
  )
}

function AuthApp() {
  return (
    <Switch>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route path="/">
        <Products />
      </Route>
    </Switch>
  )
}

function App() {
  const { user } = useAppSelector((state) => state.auth)

  const history = useHistory()

  useEffect(() => {
    if (!user) history.push('/signin')
    else history.push('/')
  }, [user])

  return (
    <div className="App">
      <Nav />
      {!user ? <UnAuthApp /> : <AuthApp />}
    </div>
  )
}

export default App

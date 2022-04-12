import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Checkout from './components/Checkout'
import Login from './components/Login'
import { useDispatch } from 'react-redux';
import { auth } from './components/firebase'

function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //the user is logged in...
        dispatch({
          type: 'SET_USER',
          user: authUser.email
        })
      }
      else {
        //the user is logged out...
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])

  // console.log(user)

  return (
    <Router>
      <div className="App">

        {/* <h1>Trying out amazon-clone  </h1> */}
        <Routes>
          <Route path='/' element={<>
            <Header />
            <Home /></>} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<>
            <Header />
            <Checkout /></>} />
          <Route path='*' element={<>
            <h1>Error</h1>
            <Link to='/'>Back Home</Link>
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



// tutorial : https://www.youtube.com/watch?v=iRwE2YTZsjQ&t=3181s
import React,{useState,useEffect} from 'react';
import Navbar from './components/Navbar';
import AllPost from './components/allpost';
import LikePost from './components/likepost';
import DislikePost from './components/dislike';
import DetailPost from './components/detailpost';
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {setallpost } from './actions';
import axios from 'axios';
function App() {
  const dispatch = useDispatch();
  const [posts,setpost] = useState([]);
  useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    setpost(res.data);
    dispatch(setallpost(res.data));
  })
  .catch(err => {
    console.log(err);
  })},[]);

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
      <Route path="/" exact component={AllPost} />
      <Route path="/post/:userId/:postId" exact component={DetailPost} />
      <Route path='/likepost' exact component={LikePost} />
      <Route path='/dislikepost' exact component={DislikePost} />
      </Switch>
      </Router>

    </div>
  );
}

export default App;

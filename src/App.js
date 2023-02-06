import './App.css';
import Hero from './components/HeroArea/Hero';
import PostArea from './components/PostArea/PostArea';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SinglePostDetails from './components/SinglePostDetails/SinglePostDetails';

function App() {
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setPostsData(data));
  }, [])
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={'/post/:id'}>
            <SinglePostDetails></SinglePostDetails>
          </Route>


          <Route exact path={'/'}>
            <header className="App-header">
              <Hero></Hero>
            </header>
            <main>
              <PostArea postsData={postsData}></PostArea>
            </main>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;

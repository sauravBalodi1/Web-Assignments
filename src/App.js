import logo from './logo.svg';
import './App.css';
import AddpostsForm from './posts/AddpostsForm';
import React from "react"
import { PostsList } from './posts/PostsLists';
function App() {
  return (
    <div>
      <AddpostsForm/>
      <PostsList/>
    </div>
    
  );
}

export default App;

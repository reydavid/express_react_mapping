import './App.css';
import {Component} from 'react';
import axios from 'axios';

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    posts: []
  };
}

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    this.setState({posts: res.data})
  })
}
render() {
  let items = this.state.posts.map(el => {
    let li = (<li>{el.title}</li>);
    return li;
  })

  return (
    <div className="App">
      <ol>
        {items}
      </ol>
    </div>
  );
}
}

export default App;


import './App.css';
import {Component} from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Particless from './components/particles/Particless';

import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '9b2d44293f9647a1a8967db60290b4a5'
})
  
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onSubmit = () =>{
    console.log('click');
    app.models.predict('a403429f2ddf4b49b307e318f00e528b','https://www.faceapp.com/static/img/content/compare/beard-example-before@3x.jpg').then(
      function(response){
        console.log(response);
      },
      function(err){

      }
    )
  }
  render () {
    return(
      <div>
        <Particless/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>

        {/* <FaceRecognition/> */}
      </div>
    )
  }
}

export default App;

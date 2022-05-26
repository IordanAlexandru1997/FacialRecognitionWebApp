
import './App.css';
import {Component} from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';

class App extends Component {
  render () {
    return(
      <div>
        <Navigation />
        <Logo />
        <ImageLinkForm/>
        {/* <FaceRecognition/> */}
      </div>
    )
  }
}

export default App;

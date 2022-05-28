
import './App.css';
import {Component} from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Rank from './components/rank/Rank';
import Signin from './components/signin/Signin';
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
      imageUrl: '',
      box:[],
      vals:[],
      route: 'signin',
    }
  }

  calculateFaceLocation = (data) =>{
    let arr = []
    const pplArr = data.outputs[0].data.regions
    pplArr.forEach((element, index) => {
      const clarifaiFace = element.region_info.bounding_box;
      const image = document.getElementById('inputImage')
      const width = Number(image.width);
      const height = Number(image.height);

      let obj = {
        leftCol: clarifaiFace.left_col * width,
        topRow:  clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
      arr.push(obj)
    });
    this.setState({vals:[pplArr[0].data,pplArr[pplArr.length-1].data]})
    return (arr);
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onButtonAction = () =>{
    this.setState({imageUrl:this.state.input})
  
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
    .then(response =>this.setState({box : this.calculateFaceLocation(response)}))

    .catch(err => console.log(err))
  }
  
  onRouteChange = (route) =>{
    this.setState({route:route})
  }

  render () {
    return(
      <div>
        <Particless/>
        <Navigation onRouteChange={this.onRouteChange}/>
        { this.state.route === 'signin' 
        ? <Signin onRouteChange = {this.onRouteChange}/> 
        : <div><Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonAction={this.onButtonAction} box={this.state.box}/>
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} vals = {this.state.vals}/>
        </div>}
        </div>
    )
  }
}

export default App;

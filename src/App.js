
import './App.css';
import { Component } from 'react';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/logo.js';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Rank from './components/rank/Rank';
import Signin from './components/signin/Signin';
import Register from './components/register/Register';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Particless from './components/particles/Particless';
import About from './components/aboutpage/about';

const initialState = {
  input: '',
  imageUrl: '',
  box: [],
  vals: [],
  route: 'signin',
  isSignedIn: false,
  isParticle: true,
  user:
  {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}
class App extends Component {
  constructor() {
    super();
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }


  calculateFaceLocation = (data) => {
    let arr = []
    const pplArr = data.outputs[0].data.regions
    pplArr.forEach((element, index) => {
      const clarifaiFace = element.region_info.bounding_box;
      const image = document.getElementById('inputImage')
      const width = Number(image.width);
      const height = Number(image.height);

      let obj = {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
      }
      arr.push(obj)
    });
    this.setState({ vals: [pplArr[0].data, pplArr[pplArr.length - 1].data] })
    return (arr);
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonAction = () => {
    this.setState({ imageUrl: this.state.input })

    fetch('https://facewebapp.onrender.com/imageurl', {
      mode: 'no-cors',
      method: 'post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input,
      })
    }).then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://facewebapp.onrender.com/image', {
            mode: 'no-cors',
            method: 'put',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id,
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { entries: count }))
            })
            .catch(console.log)
        }
        this.setState({ box: this.calculateFaceLocation(response) })
      }
      )

      .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if (route === 'about') {
      fetch('https://facewebapp.onrender.com/about', {
        mode: 'no-cors',
        method: 'get'
      })
    }
    if (route === 'signout') {
      this.setState(initialState);
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { isSignedIn, imageUrl, route, box, vals } = this.state;
    return (
      <div>
        <Particless />
        <Navigation route={this.state.route} onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {route === 'home'
          ? <div><Logo onRouteChange={this.onRouteChange} />
            <Rank name={this.state.user.name} entries={this.state.user.entries} />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonAction={this.onButtonAction} box={box} onRouteChange={this.onRouteChange} />
            <FaceRecognition box={box} imageUrl={imageUrl} vals={vals} />
          </div>
          : (route === 'about' ? <About onRouteChange={this.onRouteChange} /> :
            (route === 'signin' ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
              : (route === 'signout' ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} /> : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />)))
        }

      </div>
    )
  }
}

export default App;

import React from "react";

class Register extends React.Component {

    constructor(props) {
        super();
        this.state = {
            registerName: '',
            registerPassword: '',
            registerEmail: '',
        }
    }

    onNameChange = (event) => {
        this.setState({ registerName: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ registerPassword: event.target.value })
    }
    onSubmitRegister = () => {
        console.log('Name is:', this.state.registerName);
        console.log('Email:', this.state.registerEmail);
        console.log('Password:', this.state.registerPassword);

        fetch('https://facewebappapi.onrender.com/register', {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
            })
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
                console.log('Name:', this.state.registerName);
                console.log('Email:', this.state.registerEmail);
                console.log('Password:', this.state.registerPassword);
            });
    };
    render() {
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <div className="center ma">
                    <main className="pa4 black-80">
                        <div className="measure ">
                            <fieldset id="register" className="center-row ba b--transparent ph0 mh0">
                                <legend className="f1 fw6 ph0 mh0 tc">Register</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6 tc" htmlFor="name">Name</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text"
                                        name="name"
                                        id="name"
                                        onChange={this.onNameChange} />
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6 tc" htmlFor="email-address">Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"
                                        name="email-address"
                                        id="email-address"
                                        onChange={this.onEmailChange} />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6 tc" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                        type="password"
                                        name="password"
                                        id="password"
                                        onChange={this.onPasswordChange} />
                                </div>
                            </fieldset>
                            <div className="center">
                                <input onClick={this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib " type="submit" value="Register" />
                            </div>

                        </div>
                    </main>
                </div>
            </article>

        )
    }
}

export default Register;
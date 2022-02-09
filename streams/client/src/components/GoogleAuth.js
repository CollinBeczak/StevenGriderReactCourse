import React from 'react';

class GoogleAuth extends React.Component {
    state ={ isSignedIn: null };

    compoentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: 
                    '931326775692-lnhrmdoh7t52ass7m84qfpfan6g9am32.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I dont know if im signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>I am signed In!</div>;
        } else {
            <div>I am not signed in</div>;
        }
    }

    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default GoogleAuth;
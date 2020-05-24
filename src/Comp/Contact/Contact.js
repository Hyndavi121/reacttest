import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import history from './../history';

class Contact extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Greetings...!</h2>
                    <h2>Welcome To The User</h2>
                    <h3>If u want to edit or remove details then click on the below link</h3>
                    <form>
                        <Button variant="btn btn-success" onClick={() => history.push('/Items')}>Click On The Items Button</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
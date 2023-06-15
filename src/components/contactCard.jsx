import React, {Component, ReactPropTypes} from 'react';

class ContactCard extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     contactName: 'Mohammed Fadel',
        //     mobileNumber: '929-345-5666',
        //     workPhone: '123-454-7494',
        //     email: 'myemail@gmail.com'
        // };
    }

    render(){
        return(
            <div className="style">
                <h1>Contact Name: {this.props.contactName}</h1>
                <h1>Mobile Number: {this.props.mobilePhone}</h1>
                <h1>Work Phone: {this.props.workPhone}</h1>
                <h1>Email: {this.props.email}</h1>
            </div>
        )
    };
}

export default ContactCard;
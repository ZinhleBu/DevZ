import React, { Component } from 'react'


class ContactForm extends Component {


    state = {
        name: '',
        email: '',
        subject: '',
        lastname: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            subject,
            lastname,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (subject === '') {
            error.subject = "Please enter your subject";
        }
        if (lastname === '') {
            error.lastname = "Please enter your Lastname";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }
        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.lastname === '' && error.subject === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                subject: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render() {
        const { name,
            email,
            subject,
            lastname,
            error } = this.state;

        return (
            <form 
            
             action="https://getform.io/f/ff3f8877-6ce9-4a13-bf99-eaa913de7f78" method="POST" className="form">

                <div className="row">
                <input type="hidden" name="_next" value="https://www.zinhle.dev/contact-me" />

                    <div className="form-sec">
                        <div className="form-field">
                            <input value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Name" />
                            <p>{error.name ? error.name : ''}</p>
                        </div>
                    </div>
                    <div className="form-sec">
                        <div className="form-field">
                            <input value={lastname} onChange={this.changeHandler} type="text" name="lastname" placeholder="Last Name" />
                            <p>{error.lastname ? error.lastname : ''}</p>
                        </div>
                    </div>
                    <div className="form-sec">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Email" />
                            <p>{error.email ? error.email : ''}</p>
                        </div>
                    </div>
                    <div className="form-sec">
                        <div className="form-field">
                            <input onChange={this.changeHandler} value={subject} type="text" name="subject" placeholder="Subject" />
                            <p>{error.subject ? error.subject : ''}</p>
                        </div>
                    </div>
                    <div className="form-sec">
                        <div className="form-field">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="form-sec">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}
export default ContactForm;
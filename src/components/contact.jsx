import React from "react"
import "..//styles/contact.css"
import { InputGroup, FormControl } from "react-bootstrap"
/*****
 * 
 * 
 * 
 * this a new code for you sir : i just add it
 */

const Contact = () => {
    return (
        <div className="contact_section">
            <h1>
                CONTACT ME
            </h1>
            <h2> 
                this is for you mr. cj wood ,  im not a liar 
            </h2>
            <section className="contact_insider">
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <FormControl
                        placeholder="your name : eg : cj wood "
                        aria-label="your name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="your email"
                        aria-label="your email"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup>


                <InputGroup>
                    <InputGroup.Text>your message here</InputGroup.Text>
                    <FormControl as="textarea" aria-label="With textarea" />
                </InputGroup>




            </section>
            <a className="contact_insider_submit_btn">
                submit
            </a>
        </div>
    );
}


export default Contact;
import React, { useEffect } from "react";
import ContactForm from "../components/Contact/ContactForm";
import ContactLanding from "../components/Contact/ContactLanding";

function ContactPage(props) {
    useEffect(() => {
        document.title = props.metaContact;
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className="content-wrapper">
                <ContactLanding />
            </div>
            <ContactForm />

        </>
    );
}

export default ContactPage;

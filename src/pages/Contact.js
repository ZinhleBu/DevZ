import React from 'react'
import ContactForm from '../components/ContactForm'
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import cube from "../utils/cube.json";
import Head from 'next/head'

function Contact() {
    return (
        <div>
             <Head>
                <title>Contact</title>
                <meta name="description" content="Drop me an email at zbuhlungu1@gmail.com, and lets get your project started." />
                <meta name="robots" content="index,follow" />
                <meta name="keywords" content="Web Developer, Design, Branding, Ux,UI,Coding, Landing Pages, Portfolio, Front-end, Email, Contacts " />
                <meta name="author" content="Zinhle Buhlungu" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="canonical"
                    href="https://www.zinhle.dev/contact-me"
                    key="canonical"
                />

            </Head>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: .6, duration: .3 }}
                className="form-group">
                <ContactForm />
                <div>
                    <div>
                        <p>contact me</p>
                        <h1>How can I help you?</h1>
                        <p>Fill in the form or drop an email </p>
                        <div className="contact-info"><p> 27+ 79 133 1180</p></div>
                        <div className="contact-info"><p> zbuhlungu1@gmail.com</p></div>
                        <Lottie 
                        autoPlay={true}
                        loop={true}
                        animationData={cube} />
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Contact

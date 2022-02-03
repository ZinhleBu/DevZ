import React from 'react'
import ContactForm from '../components/ContactForm'
import { motion } from "framer-motion";

function Contact() {
    return (
        <div>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: .6, duration: .3 }}
            className="form-group">
            <ContactForm />
            
            </motion.div>
        </div>
    )
}

export default Contact

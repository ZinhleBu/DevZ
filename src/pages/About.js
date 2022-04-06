import React from 'react'
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Helmet } from 'react-helmet';

import Tag from '../components/Tag';

const tags = [
    {
        name: 'UI DESIGN'
    },
    {
        name: 'UX DESIGN'
    },
    {
        name: 'PROTOTYPING'
    },
    {
        name: 'BRANDING'
    },
    {
        name: 'HTML/CSS'
    },
    {
        name: 'WIREFRAMING'
    },
    {
        name: 'USER RESEARCH'
    },
    {
        name: 'USER INTERVIEWS'
    },
    {
        name: 'LEADERSHIP'
    },
    {
        name: 'ADOBE XD'
    },
    {
        name: 'ADOBE SUITE'
    },
];
function About() {
    const zee = "../zee.webp";

    return (
        <>
            <Helmet>
                <title>About</title>
                <meta name="description" content="Fueled by a passion for designing compelling products, I have a deep desire to excel and continuously improve in my work. " />
                <meta name="robots" content="index,follow"/>
                <link
                    rel="canonical"
                    href="https://www.zinhle.dev/about"
                    key="canonical"
                />
           
            </Helmet>
            <div className="aboutHero">

                <Parallax className="about-img" bgImage={zee} strength={200}>
                    <div className="img-inner" style={{ height: 500, width: 500, borderRadius: "18px" }}>
                        <div></div>
                    </div>
                </Parallax>
                <div className="about-description">
                    <h1>Hi there!</h1>
                    <p>Fueled by a passion for designing compelling products, I have a deep desire to excel and continuously improve in my work. Learn more about my journey below.</p>
                </div>
            </div>
            <div className="about-content">
                <div className="about-sub">
                    <h1>My career so far..</h1>
                    <p>
                        Always up for a challenge, I studied Interactive design at the University of Johannesburg, South Africa. I have worked as a freelancer and at an agency for over 3 years, I oversaw Website designs for clients, maintained their web presence and content. Currently I am working for a Design agency in Johannesburg making custom websites and a bit of animation and motion graphics.
                    </p>
                </div>
                <div className="tags">
                    {tags.map((tag) => (
                        <div item="true" key={tag.id}>
                            <Tag tag={tag} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="banner">
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: .4, duration: .3 }}
                >
                    Hiring?<br></br>Lets get to <Link
                        style={{ color: "black" }}
                        to="/contact-me">
                        <b>work.</b>
                    </Link>
                </motion.h1>
            </div>
        </>
    )
}

export default About;
import { Image } from 'cloudinary-react';
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Footer = () => {
    const footerLogo = "../logos/devz.png";

    return (
        <div>
            <footer>
                <section className="footerSec" id="sec1" >
                    <Link to='/'>
                        <Image
                            src={footerLogo}
                            width={100}
                        />
                    </Link>
                </section>
                <section className="footerSec">
                    <p>Copyright Zinhle.dev 2022</p>
                </section>
                <section className="footerSec">
                <Link
                style={{
                    fontFamily: "Poppins",
                    color: "#000000",
                    textDecoration: "none",
                    fontWeight: "600",
                    marginLeft: "10px",
                    marginRight: "10px"

                }} 
                to='/'>
                    <p >BeHance</p>
                    </Link>
                    <Link
                style={{
                    fontFamily: "Poppins",
                    color: "#000000",
                    textDecoration: "none",
                    fontWeight: "600",
                    marginLeft: "10px",
                    marginRight: "10px"
                }} 
                to='/'>
                    <p >Instagram</p>
                    </Link>
                    <Link
                style={{
                    fontFamily: "Poppins",
                    color: "#000000",
                    textDecoration: "none",
                    fontWeight: "600",
                    marginLeft: "10px",
                    marginRight: "10px"
                }} 
                href='https://github.com/ZinhleBu/'>
                    <p >GitHub</p>
                    </Link>
                </section>
            </footer>
        </div>
    )
}

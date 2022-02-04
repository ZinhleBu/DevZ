import { Image } from 'cloudinary-react';
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Footer = () => {
    const footerLogo = "../logos/devz.png";

    return (
        <div>
            <footer>
                <section className="footerSec"  >
                    <Link to='/'>
                        <Image
                            id="sec1"
                            src={footerLogo}
                            width={100}
                        />
                    </Link>
                </section>

                <section className="footerSec ">
                    <p id="copyright">Copyright Zinhle.dev 2022</p>
                </section>

                <section className="footerSec socials">
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
                        to={{ pathname: "https://github.com/ZinhleBu/" }} target="_blank"
                    >
                        <p >GitHub</p>
                    </Link>
                </section>
            </footer>
        </div>
    )
}

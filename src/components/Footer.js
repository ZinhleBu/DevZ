import { Image } from 'cloudinary-react';
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export const Footer = () => {
    const footerLogo = "../../images/logo192.webp";

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
                        to={{ pathname: "https://www.behance.net/ZinhleBu" }} target="_blank"
                    >
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
                        to={{ pathname: "https://www.instagram.com/_dintle/" }} target="_blank"
                    >
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

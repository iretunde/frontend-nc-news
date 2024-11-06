import React from "react";

const Logo = () => {
    return (
        <a href="/main" style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
            <img
                src="https://media.istockphoto.com/id/187925868/vector/newspaper-cover-page.jpg?s=612x612&w=0&k=20&c=SantJnFi_0dCOD_HUXgRSJxagvgL7Wp_F_e-rFSUV_E="
                className="logo"
                alt="Newspaper logo"
                style={{ height: '4.2em', padding: '0.5em' }} // 70% of 6em is 4.2em
            />
        </a>
    );
};

export default Logo;

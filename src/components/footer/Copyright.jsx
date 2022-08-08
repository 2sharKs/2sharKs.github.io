import React from 'react'
import "./footer.css";

const year = new Date().getFullYear();

const Copyright = () => {
    return (
        <div className="footer__copyright">
            <p>© boi_2sharks {year}.</p>
        </div>
    )
}

export default Copyright;

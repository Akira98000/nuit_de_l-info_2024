import React from "react";
import lyreco from "../../resources/lyreco.png";
const LyercoLogo = () => {
    const x = Math.floor(Math.random() * 1920); // Position horizontale entre 0 et 1920
    const y = Math.floor(Math.random() * 1080); // Position verticale entre 0 et 1080
    
    const w = Math.floor(50 + Math.random() * 210); // Largeur aléatoire entre 50 et 260
    const h = Math.floor(30 + Math.random() * 130); // Hauteur aléatoire entre 30 et 160
    
    const pos = { x, y };
    const style = {
        position: 'absolute',
        left: `${Math.min(pos.x, 1920 - w)}px`, // Empêche de sortir horizontalement de la page
        top: `${Math.min(pos.y, 1080 - h)}px`, // Empêche de sortir verticalement de la page
        width: `${w}px`,
        height: `${h}px`
    };

    return (
        <img 
            src={lyreco} 
            alt="Logo" 
            width={w} 
            height={h} 
            style={style}
        />
    );
};

export default LyercoLogo;
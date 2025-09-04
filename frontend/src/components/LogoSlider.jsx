import React from "react";

export default function LogoSlider() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://www.endeavoursolutions.ca/wp-content/uploads/2023/01/Microsoft-PowerApps-Logo.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjSEfzp0gtZnyJO2iLK9BqEMQEL-x3BV-CSQ&s",
    "https://logos-world.net/wp-content/uploads/2022/02/Microsoft-Power-BI-Symbol.png",
    "https://5.imimg.com/data5/SELLER/Default/2023/8/339652851/IS/XZ/JD/3537453/microsoft-sharepoint-software.png",
  ];

  return (
    <div className="logo-slider">
      <div className="slider-track">
        {logos.concat(logos).map((logo, index) => (
          <img key={index} src={logo} alt="logo" />
        ))}
      </div>
    </div>
  );
}

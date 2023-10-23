import React from "react";

const Footer = () => {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;

  const isOpen = hour >= openhour && hour <= closehour;

  // if (hour >= openhour && hour <= closehour) {
  //   alert("We Are Currently Open");
  // } else {
  //   alert("We Are Currently Close");
  // }
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We are open until {closehour}:00. come visit us or order online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
};

export default Footer;

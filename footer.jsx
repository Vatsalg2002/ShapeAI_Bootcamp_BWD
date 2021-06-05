import React from "react";

function Footer() {
  var curYear= new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>Copyright @ {curYear}</p>
      </footer>
    </div>
  );
}

export default Footer;

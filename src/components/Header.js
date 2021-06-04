import React from "react";

// props coming in from App.js
const Header = (props) => {
  return (
      <div>
          {/* {dynamically including the header title from theprops} */}
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;

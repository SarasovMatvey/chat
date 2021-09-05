import React from "react";
import "./Container.sass";

function Container({ children }) {
    return <div className="container">{children}</div>;
}

export default Container;

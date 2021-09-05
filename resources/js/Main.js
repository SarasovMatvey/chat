import React from "react";
import ReactDOM from "react-dom";
import Chat from "./components/Chat/Chat";
import Container from "./components/Container/Container";

function Main() {
    return (
        <div className="main">
            <Container>
                <Chat />
            </Container>
        </div>
    );
}

export default Main;

if (document.getElementById("app")) {
    ReactDOM.render(<Main />, document.getElementById("app"));
}

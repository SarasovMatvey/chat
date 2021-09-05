import React from "react";
import PropTypes from "prop-types";

function ChatMessage({ text, type }) {
    let messageModif = "";

    if (type === "received") {
        messageModif = "chat__message_received";
    } else if (type === "sent") {
        messageModif = "chat__message_sent";
    }

    return <div className={`chat__message ${messageModif}`}>{text}</div>;
}

ChatMessage.defaultProps = {
    type: "received",
};

ChatMessage.propTypes = {
    type: PropTypes.oneOf(["received", "sent"]),
    text: PropTypes.string,
};

export default ChatMessage;

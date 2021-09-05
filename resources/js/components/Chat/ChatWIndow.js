import React from "react";
import ChatMessage from "./ChatMessage";

function ChatWindow({ messages }) {
    return (
        <div className="chat__window">
            <div className="chat__window-inner">
                {messages.map((message) => (
                    <ChatMessage text={message.text} type={message.type} />
                ))}
            </div>
        </div>
    );
}

ChatWindow.defaultProps = {
    messages: [],
};

export default ChatWindow;

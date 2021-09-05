import React, { useCallback, useEffect, useState } from "react";
import "./Chat.sass";
import ChatInputPanel from "./ChatInputPanel";
import ChatWindow from "./ChatWIndow";

const socket = new WebSocket(
    "ws://" + "9287-212-112-119-126.ngrok.io" + ":8888"
);

function Chat() {
    const [messages, setMessages] = useState([]);

    const massageHandler = useCallback(({ data }) => {
        let message = JSON.parse(data);
        setMessages((messages) => [
            ...messages,
            { text: message.text, type: message.type },
        ]);
    }, []);

    const sendHandler = (msg) => {
        socket.send(msg);
    };

    useEffect(() => {
        socket.addEventListener("message", massageHandler);

        return () => {
            socket.removeEventListener("message", massageHandler);
        };
    }, []);

    return (
        <div className="chat__wrap">
            <div className="chat">
                <ChatWindow messages={messages} />
                <ChatInputPanel sendHandler={sendHandler} />
            </div>
        </div>
    );
}

export default Chat;

import React, { useState } from "react";

function ChatInputPanel({ sendHandler }) {
    const [msg, setMsg] = useState("");

    return (
        <div className="chat__input-panel">
            <input
                className="chat__input"
                type="text"
                value={msg}
                onChange={({ currentTarget: { value } }) => setMsg(value)}
            />
            <button
                className="chat__send"
                onClick={() => sendHandler(msg)}
            ></button>
        </div>
    );
}

export default ChatInputPanel;

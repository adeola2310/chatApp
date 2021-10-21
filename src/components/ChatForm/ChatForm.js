import React, {useState} from "react";
import "./ChatForm.scss";
import {NAME} from "../../utils/base-url";
import {sendMessage} from "../../services/MessageService";
import PropTypes from "prop-types";


const ChatForm = ({onGetMsgs, setNotify})=>{

    const [messageToSend, setMessageToSend] = useState("");

    const sendMessageHandler = async (e)=>{
        e.preventDefault();
        let msgBody = {
            message: messageToSend,
            author: NAME
        };
        await sendMessage(msgBody);
        setNotify(true);
        onGetMsgs();
        setMessageToSend("");
        setTimeout(()=>{
            setNotify(false);
        }, 2000);
    };



    return (
        <section className="form__wrapper">
            <form className="form" onSubmit={(e)=>sendMessageHandler(e)}>
                <input
                    className="input-msg"
                    data-testid="messageInput"
                    aria-label="message"
                    id="messageToSend"
                    name="messageToSend"
                    type="text"
                    required
                    value={messageToSend}
                    onChange={(e)=>setMessageToSend(e.target.value)}
                    placeholder="Message..."/>
                <button
                    disabled={!messageToSend}
                    type="submit"
                    className="form-btn">Send</button>
            </form>
        </section>

    );
};

ChatForm.propTypes = {
    onGetMsgs: PropTypes.func,
    setNotify: PropTypes.func
};

export default ChatForm;

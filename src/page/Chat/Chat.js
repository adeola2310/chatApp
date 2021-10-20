import React from "react";
import "./Chat.scss";
import MessageCard from "../../components/MessageCard/MessageCard";


const ChatPage = ()=>{
    return(
        <React.Fragment>
            <section className="chat__wrapper">
                <div className="chat__msg-group">
                        <MessageCard/>
                </div>
            </section>

            <section className="form__wrapper">
                <form className="form">
                    <input
                        className="input-msg"
                        aria-label="message"
                        id="message"
                        name="message"
                        type="text"
                        placeholder="Message..."/>
                    <button
                        type="submit"
                        className="form-btn">Send</button>
                </form>
            </section>
        </React.Fragment>
    );
};

export default ChatPage;

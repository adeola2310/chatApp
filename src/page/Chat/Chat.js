import React, {useState, useEffect, useRef} from "react";
import "./Chat.scss";
import MessageCard from "../../components/MessageCard/MessageCard";
import {getAllMessages, sendMessage} from "../../services/MessageService";
import {useToasts} from "react-toast-notifications";


const ChatPage = ()=>{

    const [messageReceived, setMessageReceived] = useState([]);

    const [messageToSend, setMessageToSend] = useState("");
    const [name] = useState("Adeola");

    const {addToast} = useToasts();

    const onGetMsgs = async () => {
        let response = await getAllMessages();
        setMessageReceived(response);
        return response;
    };


    const sendMessageHandler = async (e)=>{
        e.preventDefault();
        let msgBody = {
            message: messageToSend,
            author: name
        };
       await sendMessage(msgBody);
        addToast("Message sent successfully", {appearance: "success"});
        onGetMsgs();
        setMessageToSend("");
    };

    useEffect(() => {
        onGetMsgs();
    }, []);

    const AlwaysScrollToBottom = () => {
        const elementRef = useRef();
        useEffect(() => elementRef.current.scrollIntoView());
        return <div ref={elementRef} />;
    };


    return(
        <React.Fragment>
                    <section className="chat__wrapper">
                        <div className="chat__msg-group">
                            {messageReceived?.map((msg)=>(
                                <MessageCard
                                    key={msg?._id}
                                    message={msg}
                                    name={name}
                                />
                            ))}
                            <AlwaysScrollToBottom/>
                        </div>
                    </section>

            <section className="form__wrapper">
                <form className="form" onSubmit={(e)=>sendMessageHandler(e)}>
                    <input
                        className="input-msg"
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
        </React.Fragment>
    );
};

export default ChatPage;

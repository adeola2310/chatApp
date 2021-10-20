import React, {useState, useEffect, useRef} from "react";
import "./Chat.scss";
import MessageCard from "../../components/MessageCard/MessageCard";
import {getAllMessages, sendMessage} from "../../services/MessageService";
import Snackbar from "../../components/custom-toast/Snackbar";


const ChatPage = ()=>{

    const [messageReceived, setMessageReceived] = useState([]);

    const [messageToSend, setMessageToSend] = useState("");
    const [notify, setNotify] = useState(false);
    const [name] = useState("Adeola");


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
        setNotify(true);
        onGetMsgs();
        setMessageToSend("");
        setTimeout(()=>{
            setNotify(false);
        }, 2000);
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

            {notify && <Snackbar/>}

        </React.Fragment>
    );
};

export default ChatPage;

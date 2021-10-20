import React, {useState, useEffect} from "react";
import "./Chat.scss";
import MessageCard from "../../components/MessageCard/MessageCard";
import {getAllMessages, sendMessage} from "../../services/MessageService";


const ChatPage = ()=>{

    const [messageReceived, setMessageReceived] = useState([]);
    const [loading, setLoading] = useState(false);

    const [messageToSend, setMessageToSend] = useState("");
    const [name] = useState("Adeola");

    const onGetMsgs = async () => {
        setLoading(true);
        let response = await getAllMessages();
        setMessageReceived(response);
        setLoading(false);
        return response;
    };
    // "no-console": 2,


    const sendMessageHandler = async (e)=>{
        e.preventDefault();
        let msgBody = {
            messageToSend,
            author: name
        };
       await sendMessage(msgBody);
        onGetMsgs();
        setMessageToSend("");
    };

    useEffect(() => {
        onGetMsgs();
    }, []);


    return(
        <React.Fragment>
            {loading ? "Loading..." :
                (
                    <section className="chat__wrapper">
                        <div className="chat__msg-group">
                            {messageReceived?.map((msg)=>(
                                <MessageCard
                                    key={msg?._id}
                                    message={msg}
                                    name={name}
                                />
                            ))}
                        </div>
                    </section>
                )
            }

            <section className="form__wrapper">
                <form className="form" onSubmit={(e)=>sendMessageHandler(e)}>
                    <input
                        className="input-msg"
                        aria-label="message"
                        id="messageToSend"
                        name="messageToSend"
                        type="text"
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

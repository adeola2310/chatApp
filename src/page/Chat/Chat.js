import React, {useState, useEffect, useRef} from "react";
import "./Chat.scss";
import MessageCard from "../../components/MessageCard/MessageCard";
import {getAllMessages} from "../../services/MessageService";
import Snackbar from "../../components/Snackbar/Snackbar";
import ChatForm from "../../components/ChatForm/ChatForm";
import {NAME} from "../../utils/base-url";



const ChatPage = ()=>{

    const [messageReceived, setMessageReceived] = useState([]);

    const [notify, setNotify] = useState(false);


    const onGetMsgs = async () => {
            let response = await getAllMessages();
            setMessageReceived(response);
            return response;
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
                            name={NAME}
                        />
                    ))}
                    <AlwaysScrollToBottom/>
                </div>
            </section>

            <ChatForm
                setNotify={setNotify}
                onGetMsgs={onGetMsgs}
            />

            {notify && <Snackbar/>}

        </React.Fragment>
    );
};

export default ChatPage;

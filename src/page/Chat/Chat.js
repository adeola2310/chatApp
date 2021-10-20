import React, {useState, useEffect} from "react";
import "./Chat.scss";
import MessageCard from "../../components/MessageCard/MessageCard";
import {getAllMessages} from "../../services/MessageService";


const ChatPage = ()=>{

    const [msgList, setMsgList] = useState([]);
    const [loading, setLoading] = useState(false);

    const onGetMsgs = async () => {
        setLoading(true);
        let response = await getAllMessages();
        setMsgList(response);
        setLoading(false);
        return response;
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
                            {msgList?.map((msg)=>(
                                <MessageCard
                                    key={msg?._id}
                                    message={msg}
                                />
                            ))}
                        </div>
                    </section>
                )
            }

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

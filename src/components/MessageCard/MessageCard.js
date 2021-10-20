import React from "react";
import "./MessageCard.scss";
import Text from "../Typography/Text/Text";


const MessageCard = ()=>{
    return(
        <div className="chat-log-left">
            <div className="chat-message-left">
                <div className="text-box">
                        <Text className="author">author</Text>
                    <p>message</p>
                    <div className="timestamp_div">
                        <Text className="timestamp_p">6:01</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessageCard;

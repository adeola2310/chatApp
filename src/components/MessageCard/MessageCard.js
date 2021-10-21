import React from "react";
import "./MessageCard.scss";
import PropTypes from "prop-types";
import Text from "../Typography/Text/Text";
import {convertTimestamp} from "../../utils/helpers";


const MessageCard = (props)=>{

    const {message, name} = props;

    return(
        <div className={message.author === name ? "chat-log" : "chat-log-left"}>
            <div className={
                message.author === name
                    ? "chat-message-right"
                    : "chat-message-left"
            }>
                <div className="text-box">
                    {message.author !== name ? (
                        <Text className="author">{message.author}</Text>
                        ) :
                        (
                            <Text className="author">Me</Text>
                        )
                    }
                    <Text>{message.message}</Text>
                    <div className="timestamp_div">
                        <Text className="timestamp_p">{convertTimestamp(message.timestamp)}</Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

MessageCard.propTypes = {
    message: PropTypes.object,
    name: PropTypes.string
};

export default MessageCard;

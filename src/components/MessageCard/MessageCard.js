import React from "react";
import "./MessageCard.scss";
import PropTypes from "prop-types";
import Text from "../Typography/Text/Text";
import {convertTimestamp} from "../../utils/helpers";


const MessageCard = (props)=>{
    const {message} = props;
    return(
        <div className="chat-log-left">
            <div className="chat-message-left">
                <div className="text-box">
                        <Text className="author">{message.author}</Text>
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
    message: PropTypes.string
};

export default MessageCard;

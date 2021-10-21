import axios from "axios";
import {TOKEN} from "../utils/base-url";

/**
 *
 * @returns {Promise<unknown>}
 * This function calls the endpoint that returns all messages
 */
export const getAllMessages = async ()=>{
    let url = `/?token=${TOKEN}`;
    try {
        let msgs = await axios.get(url);
        const { success, data} = msgs.data;
        if (success) {
            return data;
        }
        return msgs.data;
    }
    catch (error) {
        if (error) {
            return error;
        }
    }
};


/**
 *
 *
 * @param msgBody
 * @returns {Promise<AxiosResponse<unknown>|*>}
 * This function calls the post method to send a chat
 */
export const sendMessage = async (msgBody)=>{
    let url = `/?token=${TOKEN}`;
    try {
        let response = await axios.post(url, msgBody);
        let { success } = response;
        if (success) {
            return response;
        }
    } catch (error) {
        if (error) {
            return error;
        }
    }
};

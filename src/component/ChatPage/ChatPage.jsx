import React, { useEffect } from 'react'
import { SERVER_API_URL } from "../../services/common";
import axios from "axios";

const ChatPage = () => {
     
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${SERVER_API_URL}/api/chats`)
                console.log(res)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }
        , [])


    return (
        <div>
            ChatPage
        </div>
    )
}

export default ChatPage

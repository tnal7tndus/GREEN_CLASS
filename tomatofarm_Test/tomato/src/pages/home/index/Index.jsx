import AdImgBox from './adImgBox/AdImgBox';
import FirstContainer from './firstContainer/FirstContainer';
import SecondContainer from './secondContainer/SecondContainer';
import ThirdContainer from './thirdContainer/ThridContainer';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SERVER_RESOURCE } from "../../../model/server-config";
import './Index.css';
import ChatBotBox from "../../components/chatbot/ChatBotBox";


const Home = () => {
    const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
    const [showChatbot, setShowChatbot] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8090/visit/update`, {
            params: {
                page: 'home',
            }
        })
    }, [])


    return (
        <>
            <AdImgBox />
            <FirstContainer />
            <hr />
            <SecondContainer />
            <hr />
            <ThirdContainer />

            {
                showChatbot ?
                    <ChatBotBox setShowChatbot={setShowChatbot} />
                    :
                    userinfo &&
                    <div onClick={() => setShowChatbot(!showChatbot)} id="chatbotIcon">
                        <img src={SERVER_RESOURCE + '/img/talk.png'} alt="" />
                    </div>
            }
        </>
    )
}
export default Home;
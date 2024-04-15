
import './SideMenu.css'
import { Link } from 'react-router-dom';


const SideMenu = ({ openSideBar, sideBarOpen }) => {
    const path = window.location.pathname;
    const location = path.substring(path.lastIndexOf('/')+1);

    const getLocation = ()=>{
        switch(location){
            case 'ask':
            return '문의 목록';
            case 'select':
            return '상품 조회'
            case 'chatbot':
            return '채팅 상담'
        }
    }
    
    return (
        <>
            <div id="topBarA" style={{ paddingLeft: sideBarOpen ? '95px' : '15px' }}>
                <i className="fa-solid fa-house"></i>
                &nbsp;&nbsp; 관리자페이지 &nbsp;&nbsp;
                <span>
                    <i className="fa-solid fa-chevron-right"></i>&nbsp;&nbsp;{getLocation()}
                </span>


            </div>
            <div id="sideBar" style={{ transform: sideBarOpen ? 'translateX(0%)' : 'translateX(-100%)' }}>
                <div>토마토팜</div>
                <ul>
                    <li>
                        <Link to="/admin/chatbot"><i className="fa-solid fa-bullhorn"></i><br />채팅 상담</Link>
                    </li>
                    <li>
                        <Link to="/admin/graph"><i className="fa-solid fa-square-poll-vertical"></i><br />통계</Link>
                    </li>
                    <li>
                        <Link to="/admin/select"><i className="fa-solid fa-magnifying-glass"></i><br />상품 조회</Link>
                    </li>
                    <li>
                        <Link to="/admin/ask"><i className="fa-solid fa-comment-dots"></i><br />문의 목록</Link>
                    </li>
                </ul>
                <div id="sideBarButton" onClick={openSideBar}>
                    <i className="fa-solid fa-chevron-right" style={{ transform: sideBarOpen ? 'rotateY(180deg)' : 'rotateY(0deg)' }}></i>
                </div>
            </div>
        </>
    );
}

export default SideMenu;
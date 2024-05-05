import { SERVER_RESOURCE } from '../../model/server-config';
import './Error.css';

const Error = () => {
    return (
        <div className="errorBox">
            <img src={SERVER_RESOURCE + "/img/logo2.png"} alt="에러이미지" />
            자료를 불러오는 도중 문제가 발생하였습니다.<br />
            화면을 새로고침 해주세요.
        </div>
    );
}

export default Error;
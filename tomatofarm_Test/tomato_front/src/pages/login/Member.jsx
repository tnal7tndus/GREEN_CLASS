import './Member.css'
import LoginBG from "./LoginBG/LoginBG";
import SignBG from "./SignBG/SignBG";
import { SERVER_RESOURCE } from '../../model/server-config';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Alert from '../components/alert/Alert';

const Member = () => {
  const alert = useSelector(state => state.basic.alert)
  return (
    <div id="bodyBG" style={{ backgroundImage: `url(${SERVER_RESOURCE}/img/signup/signup.jpg)` }}>
      <div id="contentBox">
        {alert && <Alert />}
        <Routes>
          <Route path='/signup' element={<SignBG />} />
          <Route path='/*' element={<LoginBG />} />
        </Routes>
      </div>
    </div>
  );
}

export default Member;
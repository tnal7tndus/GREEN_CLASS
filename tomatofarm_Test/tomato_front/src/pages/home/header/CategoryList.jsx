import { Link } from "react-router-dom";
import { SERVER_RESOURCE } from "../../../model/server-config";
import { useDispatch } from 'react-redux';
import { changeKeyword } from "../../redux/basic/actions";

function CategoryList({ data }) {
    const dispatch = useDispatch()
    return (
        <li><Link to={`/home/list?keyword=${data.sort2}`} onClick={() => dispatch(changeKeyword(data.sort2))}><img src={SERVER_RESOURCE + '/img/categoryImg/' + data.sort2 + ".png"} alt={data.sort2 + "이미지"} />{data.sort2}</Link></li>
    );
}


export default CategoryList;
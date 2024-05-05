import { SERVER_RESOURCE } from "../../../../model/server-config";


const Graph_ranking = ({item}) => {


    return (
        <div className="rankedItem">
            <div><i className="fa-solid fa-medal"></i></div>
            <div><img src={SERVER_RESOURCE + `/img/itemImg/${item.code}_2.jpg`} alt={item.name} /></div>
            <div>{item.name}</div>
            <div>{item.views}</div>
        </div>
    );
}

export default Graph_ranking
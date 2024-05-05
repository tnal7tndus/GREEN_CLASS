
const Admin_data = ({ style, changeItemRow, item }) => {

    return (
        <div onClick={() => changeItemRow(item)} className="excelColumn" style={{ ...style, }}>
            {Object.keys(item).map((e, i) => (
                <input style={{ ...style, }} type="text" name={e} value={item[e] || ''} key={i} readOnly />
            ))}
        </div>
    );
}


export default Admin_data;
const paging = () => (list, pageNum, size) => {
    if (list != null) {
        const start = size * (pageNum - 1);
        const end = pageNum * size;
        return list.slice(start, end);
    }
}


export { paging };
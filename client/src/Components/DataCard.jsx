function DataCard(props){
    
    const {author,title,desc}=props;

    return (
        <>
        <h2>{props.author}</h2>
        <h3>{props.title}</h3>
        <h3>{props.desc}</h3>
        <br/>
        </>
    )
}

export default DataCard;
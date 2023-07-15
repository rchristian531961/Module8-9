export default function CardForm(props){
    // var {handleSubmit,handleAuthor,handleTitle,handleDesc,author,title,desc}=props;
    var {handleSubmit,handleAuthor,handleTitle,handleDesc,author,title}=props;
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Author:
                    <input type='text' onChange={(e)=>{handleAuthor(e.target.value)}} name="author" value={author}></input>
                </label><br/>
                <label>
                    Title:
                    <input type="text" onChange={(e)=>{handleTitle(e.target.value)}} name="title" value={title}></input>
                </label><br/>
                <label>
                    Description:<br/>
                    <textarea onChange={(e)=>{handleDesc(e.target.value)}} name="desc" rows={4} cols={40} defaultValue="Make your Post Here"/>
                </label>
                <br/>
                <button>Submit</button>
            </form>
        
        </div>
    )
}
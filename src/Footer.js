import AddNew from "./AddNew";
const Footer=(props)=>{
    const b={
        position:"absolute",
        height:"25px",
        color:"black",
        left:"10%",
        fontFamily:"Brush Script MT",
        fontSize:"25px"
    }
    const overall={
        width:"100%",
        height:"80px",
        backgroundColor:"lightgreen",
        position:"fixed",
        bottom:"0"
    }
    return(
        <>
        <div style={overall}>
        <p style={b}><text style={{color:"red"}}>{props.len +" "}</text> Total Task</p>
        <p style={{position:"absolute",height:"25px",color:"black",left:"40%",fontFamily:"Brush Script MT",fontSize:"25px"}}>Completed Task <text style={{color:"red"}}>{props.com}</text></p>
        <p style={{position:"absolute",height:"25px",color:"black",left:"80%",fontFamily:"Brush Script MT",fontSize:"25px"}}>Pending Task <text style={{color:"red"}}>{props.not}</text></p>
        </div>
        </>
    );
}
export default Footer;
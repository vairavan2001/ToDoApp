import React from 'react';
import { useState } from 'react';
import "./App.css";
import Footer from './Footer';
const AddNew=()=>{
    const [l, setl] = useState([])
    
    const List=(e)=>{
        
        setl([...l,{id:document.getElementById("new").value,checked:false}]); 
        e.preventDefault();
        document.getElementById("new").value="";
    }
    const Checkin=(e,id)=>{
        const newup=l.map(arr=>{
            if(arr.id===id && arr.checked==false){
                return{...arr,checked:true}
            }
            if(arr.id===id && arr.checked==true){
                return{...arr,checked:false}
            }
            return arr;
        });
        setl(newup);
        
    }
    const del=(e)=>{
        setl(a=>a.filter(b=>(b.id!==e)));
    }
    const Dis=(e)=>{
        return(
            <tr>
            <td><input type="checkbox" checked={e.checked} key={e.id} onClick={()=>Checkin(e.checked,e.id)}style={{width:"30px" ,height:"45px"}}/><text style={{fontFamily:"monospace",fontSize:"20px",textTransform:"capitalize",padding:"10px",verticalAlign:"15px"}}>{"  "+e.id}</text></td><td style={{backgroundColor:"white"}}><button style={{height:"60px",color:"white",backgroundColor:"darkred",fontSize:"20px",fontWeight:"bold" }} onClick={()=>del(e.id)}>Delete</button></td>
            </tr>
        );
    }
    
    return(
        <>
        <p id="ap"></p>
        <form onSubmit={List} target='_blank'>
        <input type="text" placeholder="Add New" style={{position:"absolute",width:"80%",left:"10%",height:"30px",top:"150px" }} id="new"/>
        <input type="submit" style={{position:"absolute",top:"150px",width:"35px",height:"35px",fontSize:13,textAlign:"center",left:"88.1%"}} value="Add"/>
        </form>
        <table style={{position:"absolute",top:"200px",left:"10%"}}>
           {l.map((e)=>Dis(e))}
        </table>
        <Footer len={l.length} com={l.filter(arr=>arr.checked==true).length} not={l.filter(arr=>arr.checked==false).length}/>
        </>
    
    )
}
export default AddNew;
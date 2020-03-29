import React , {useState ,useRef} from "react"
import "./FormAdding.css"
import Memeimgs from './Memeimgs';
import Result from './../Result/ResultImg';
function FormAdding(props){
    const newval1 = useRef()
    const newval2 = useRef()
     const [text , setTxt] = useState({
    
    })
    function textHandling(){
        setTxt({
            val1:newval1.current.value,
            val2:newval2.current.value
        })
    }

    return(
        <>
        <div className="FullPage">
            <h1>Make Your Own Meme</h1>
        <div className="imgComponent">
            <Memeimgs valAdd={text.val1} valAdd2={text.val2}/>
        </div>

        <div className="frmContainer">
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className="txt1">
                    <label>Text 1</label><br />
                    <input type="text"  className="i1" ref={newval1}/>
                </div>
                <div className="txt2">
                    <label>Text2</label><br />
                    <input type="text"  className="i2" ref={newval2}/>
                </div> 
                <button onClick={textHandling} >Result</button>
            </form>  
        </div>
        </div>
    </>
    )}
export default FormAdding
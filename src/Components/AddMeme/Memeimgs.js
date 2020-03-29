import React ,{useState ,useRef} from "react"
import "./Memeimgs.css"
import {data} from "./../AllData.js"
function Memeimgs(props){
    const showImg = React.useRef()
   function imgHandling(e){
    console.log(e.target.id)
    // showImg.current.innerHTML = `<img src=${data.imgs[e.target.id].name}  class="imgAdded"/>`
    showImg.current.style.backgroundImage =`url(${data.imgs[e.target.id].name})`
   }

    return(
        <>
            <div className="AllImgs">
                {data.imgs.map((image)=>{
                    return <div key={image.id} className="containerImg">
                                 <img src={image.name}/> <br />
                                 <button onClick={imgHandling} id={image.id} className="show">show</button>
                            </div>
            })}
            </div>
            <div className="result" ref={showImg}>
                <h1 className="head1">{props.valAdd}</h1>
                <h1 className="head2">{props.valAdd2}</h1>
            </div>
        </>
    )
}
export default Memeimgs
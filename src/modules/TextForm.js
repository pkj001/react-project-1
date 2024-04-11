import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUPClick=()=>{
        let upcase= text.toUpperCase();
        setText(upcase)
        props.showAlert("success", "changed to upper case");
    }
    const handleLOWClick=()=>{
      let upcase= text.toLowerCase();
      setText(upcase)
      props.showAlert("success", "changed to lower case");
  }
    const handleChange = (event)=>{
        setText(event.target.value)
    }
    const onClear =()=>{
         setText("");
         props.showAlert("success", "text cleard");
    }
    const onCopy=()=>{
      
      navigator.clipboard.writeText(text);
      
      props.showAlert("success", "text copied");
    }
    
  return (
    <>
    <div className="container" style={{ color : props.mode==="dark"?"white ": "black"}} >
        <h4>{props.heading}</h4>
        <div className="mb-3">
  
  <textarea
    className="form-control"
    id="myInput"
    rows={10}
    value={text}
    onChange={handleChange}
    style={{backgroundColor:props.mode==="dark"?"#042743": "white", color : props.mode==="dark"?"white ": "black" }}
  />
</div>
<button type="button"  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUPClick}  >convert to upper case</button>
<button type="button"  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLOWClick}  >convert to lower case</button>
<button type="button"  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onCopy}  >copy</button>
<button type="button"  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={onClear}  >clear</button>
    </div>
    <div className="container my-3" style={{color : props.mode==="dark"?"white ": "black"}} > <h4>your text summary</h4>
    <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} charcters used {text.length}</p>
    <h4>preview text</h4>
    <p>{text}</p>
    </div>
    
    </>
  )
}

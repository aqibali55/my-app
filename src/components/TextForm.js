import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }


    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary ms-3' onClick={handleLoClick}>Convert to Lowercase</button>
                <button className='btn btn-primary ms-3' onClick={handleClearClick}>Clear Text</button>
                <button className='btn btn-primary ms-3' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary ms-3' onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summery</h1>
                <p>{text.split(" ").length} words and {text.length} charactor</p> 
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p> 
            </div>
        </>
    )
}

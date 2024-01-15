import './ImageLinkForm.css';
import React from 'react';



const ImageLinkForm = ({onInputChange, defaultUrl, onButtonAction, box}) => {
    let flag = box.length > 0 ? 
        <div>Total of {box.length} faces. <div style={{color:'green', display:'inline', fontWeight:'bold'}}>Green</div> frame is the highest probability a face was detected, <div style={{color:'red', display:'inline', fontWeight:'bold'}}>Red</div> frame is the lowest</div> : '';
    return (
       <div className='container'>
           <p className="f3" >{'This Magic Brain will detect faces in your pictures. Give it a try'}</p>
                <div className='form pa4 br3 shadow-5 central-items'>
                <input className="f4 pa2 w-70 center chenar" type='text' onChange={onInputChange} value={defaultUrl} />                    <button className="w-30 grow f4 link ph3 pv2 dib white glow-on-hover " onClick={onButtonAction}>Detect</button>
                </div>
            <div className='center'>{flag} </div>
       </div>

    )
}
export default React.memo(ImageLinkForm);
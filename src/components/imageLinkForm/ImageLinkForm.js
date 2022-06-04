import './ImageLinkForm.css';




const ImageLinkForm = ({onInputChange, onButtonAction, box}) => {
    let flag = box.length > 0 ? 'Total of '+box.length+' faces' : '';
    return (
       <div className='container'>
           <p className="f3" >{'This Magic Brain will detect faces in your pictures. Give it a try'}</p>
           <div className='central-items form pa4 br3 shadow-5'>
               <input className="f4 pa2 w-70 center " type='text' onChange={onInputChange} placeholder={'url of a jpg image'}/>
               <button className="w-30 grow f4 link ph3 pv2 dib white glow-on-hover " onClick={onButtonAction}>Detect</button>
               
           </div>
           <div className='center'>{flag}</div>
       </div>

    )
}
export default ImageLinkForm;
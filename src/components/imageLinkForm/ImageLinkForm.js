import './ImageLinkForm.css';




const ImageLinkForm = () => {
    return (
       <div className='container'>
           <p className="f3" >{'This Magic Brain will detect faces in your pictures. Give it a try'}</p>
           <div className='central-items form pa4 br3 shadow-5'>
               <input className="f4 pa2 w-70 center" type='text'/>
               <button className="w-30 grow f4 link ph3 pv2 dib white glow-on-hover">Detect</button>
           </div>
       </div>

    )
}
export default ImageLinkForm;
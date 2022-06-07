
import Tilt from 'react-parallax-tilt';
import programmer  from './programmer.png'
import './logo.css'

const Logo = ({onRouteChange}) => {
    return (
        <div className='parent-item'>
            <div className="fl pa2 logo" style={{paddingLeft: '20px'}}>
            <Tilt className='br2 shadow-2' scale={1.05}>
               <div className='Tilt-inner mw-100 pa3'>
                   <img src={programmer} alt='me'></img>
               </div>
            </Tilt>
            
        </div>
        <div className='parent-proj-button'>
                <button className="butonproiect" onClick={()=>onRouteChange('about')}>Project details</button>
            </div>
        </div>
        
    )
}
export default Logo;
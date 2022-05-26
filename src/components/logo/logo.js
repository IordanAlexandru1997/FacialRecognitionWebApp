
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import programmer  from './programmer.png'

const Logo = () => {
    return (
        <div className="fl pa2" style={{paddingLeft: '20px'}}>
            <Tilt className='br2 shadow-2' scale={1.05}>
               <div className='Tilt-inner mw-100 pa3'>
                   <img src={programmer} alt='me'></img>
               </div>
            </Tilt>
        </div>
    )
}
export default Logo;
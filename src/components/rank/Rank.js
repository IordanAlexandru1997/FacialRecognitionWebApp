
import './Rank.css'


const Rank = ({name,entries}) => {
    return (
       <div className='container-rank'>
           <div className="white f3 tc">
                {`Heya ${name}, your current Rank is `}
           </div>
           <div className="white f1 tc">
                {`${entries}`}
           </div>
       </div>
    )
}
export default Rank;
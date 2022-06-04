import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box=[], vals}) => {
    let nr = box.length;
    const renderColor = (boxCoords, idx, color,vals) => {
        if (idx===0 || idx === (nr-1)){
            console.log('nu')
            return (
                <div key={idx}>
                    <div  className={color} style={{  top: boxCoords.topRow, bottom: boxCoords.bottomRow, left: boxCoords.leftCol, right: boxCoords.rightCol}}>
                    {idx ? <p>{Math.round(vals[1].concepts[0].value*100)/100}</p> : <p>{Math.round(vals[0].concepts[0].value*100)/100}</p>}
                    </div>
                    
                </div>
                )
        } else{
            return (
                <div key={idx}>
                    <div  className={color} style={{  top: boxCoords.topRow, bottom: boxCoords.bottomRow, left: boxCoords.leftCol, right: boxCoords.rightCol}}></div>
                </div>
                )
        }

    }
    

    function renderBox (boxCoords,idx, nr) {
        if(idx === 0){
           return renderColor(boxCoords,idx,'green',vals)
        }
        else if(idx===(nr-1)){
           return renderColor(boxCoords,idx,'red',vals)
        }
        else{
            return renderColor(boxCoords,idx,'blue')
        }
    }
    
    return (
    <div className="center ma">
        <div id='parentDiv' className="absolute mt2 zoom">
            <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
            {box.map((box,idx) => renderBox(box,idx,nr))}
        </div>
    </div>
    )
}

export default FaceRecognition;
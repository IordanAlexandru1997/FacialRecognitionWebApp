import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box=[]}) => {
    
    const renderBox = (boxCoords) => { return <div className='bounding-box' style={{  top: boxCoords.topRow, bottom: boxCoords.bottomRow, left: boxCoords.leftCol, right: boxCoords.rightCol}} />}

    
    return (
    <div className="center ma">

        <div id='parentDiv' className="absolute mt2">
            <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto'/>
            {box.map(face => renderBox(face))}

        </div>
        
    </div>
    )
}

export default FaceRecognition;
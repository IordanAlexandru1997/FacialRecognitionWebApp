import { TagCloud } from 'react-tagcloud'
import './about.css'
const About = ({onRouteChange}) =>{
    const data = [
        { value: 'JavaScript', count: 30 },
        { value: 'React', count: 50 },
        { value: 'Nodejs', count: 45 },
        { value: 'Express.js', count: 36 },
        { value: 'HTML5', count: 25 },
        { value: 'Bcrypt', count: 12 },
        { value: 'Postgres', count: 40 },
        { value: 'CSS3', count: 30 },
        { value: 'Postman', count: 20 },
        { value: 'Machine Learning', count: 26 },
        { value: 'Knex', count: 15 },
    ]
    const options = {
        luminosity: 'dark',
        hue: 'red',
      }
    return (
        <div>
            <div  className='words-container'>
            <TagCloud className='myTagCloud'
            minSize={25}
            maxSize={70}
            colorOptions={options}
            tags={data}
            onClick={tag => alert(`'${tag.value}' was selected!`)}
                    />
            </div>
        
        <div className='parent-back-button'>
        <button className="back-button butonproiect" onClick={()=>onRouteChange('home')}>Back</button>
        </div>
        
        </div>
        
    )
}

export default About
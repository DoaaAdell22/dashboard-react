import { useState } from 'react';
import './Projects.css'
import { Button } from 'antd';



  const Photos = [
    {
        img : '/media/heallocare mockup.png'
    },
    {
        img : '/media/banner.webp'
    },
    {
        img : '/media/banner (1).webp'
    },
    {
      img : '/media/banner (2).webp'
    },
    {
      img : '/media/banner (3).webp'
    },
    {
      img : '/media/banner (4).webp'
    }
  ]
const Projects = () => {

  const [photoIndex , setPhotoIndex] = useState(0)

  const handler = (index) =>{
 setPhotoIndex(index)
  }
  return (
    <div>
        <div className='projects'>
            <h1>Our Projects</h1>
            <p>Enjoy unique experiences and overall personal and professional growth.</p>
            <div className='image'>
            <img src={Photos[photoIndex].img} />
            </div>
            <br />
            <div className='buttons' style={{display :'flex', justifyContent : 'center', alignItems : 'center', gap : '60px'}}>
                <Button onClick={()=> handler(0)} icon={<img src='/public/media/thumb (4).webp' style={{width : '80px'}} />}></Button>
                <Button onClick={()=> handler(1)} icon={<img src='/public/media/thumb.webp' style={{width : '80px'}} />}></Button>
                <Button onClick={()=> handler(2)}  icon={<img src='/public/media/thumb (1).webp' style={{width : '80px'}} />}></Button>
                <Button onClick={()=> handler(3)} icon={<img src='/public/media/thumb (2).webp' style={{width : '80px'}} />}></Button>
                <Button onClick={()=> handler(4)}  icon={<img src='/public/media/thumb (3).webp' style={{width : '80px'}} />}></Button>  
            </div>
            <br />
            <div className='Links' >
            </div>
            <br />
            <br />
            <div className='contact' style={{display : 'flex'}}>
                <div className='hand'>
                    <img style={{width : '205px'}} src='/public/media/Ai Hand.png' />
                </div>
                <div className='text'>
                    <h1>Create your own unique <span style={{color : 'yellow'}}>digital world </span></h1>
                    <a  href=''>Contact us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects

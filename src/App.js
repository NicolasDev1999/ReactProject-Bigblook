import './App.css';
import { ComponenteBoton } from './components/ComponenteBoton';


function App() {
  const Header = ({ titleHeader, boton1, boton2, boton3, boton4 }) => {
    return (
      <div className='header'>
        <h1>{titleHeader}</h1>
        <nav><button>{boton1}</button><button>{boton2}</button><button>{boton3}</button></nav>
      </div>
    );
  };
  const Video = ({ title, image, description, upLoadDate, duration }) => {
    return (
      <div className='bannerPop'>
        <h3>{title}</h3>
        <div className='imagen'>
          <img src={image} alt={title} />
        </div>
        <div>
          <span>{duration}</span>
          <span>{upLoadDate}</span>
        </div>
        <p>{description}</p>
        <ComponenteBoton />
      </div>
    );
  };

  return (
    <div className="App">

      <Header
        titleHeader='Titulo de la pagina'
        boton1='Inicio'
        boton2='Contactenos'
        boton3='Portafolio'
      ></Header>

      <div className='ContainerBannerPop'>
        <Video
          title='Codigo para Jrs'
          image='https://media.istockphoto.com/id/1154948190/es/foto/el-c%C3%B3digo-fuente-de-programaci%C3%B3n-de-computadora-mostrado-en-un-monitor-de-pc.jpg?s=1024x1024&w=is&k=20&c=7BB8nyr9kZJhNQuT9jkphPLI9R6U8SVl47KDrH0YUdc=' 
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
          upLoadDate='24/03/2024'
          duration='25:39'
        ></Video>
        


        <Video
          title='Codigo para Senior'
          image='https://media.istockphoto.com/id/1445256568/es/foto/c%C3%B3digo-de-programaci%C3%B3n-de-ne%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=a_5oJJbchJJSeXGsHYcT3jpVmCLtFDvpnHiYJKiNi_A='       
          description='Fugiat incidunt dolore recusandae iste aliquam temporibus molestiae, sequi porro voluptate asperiores.'
          upLoadDate='24/03/2024'
          duration='25:39'
        ></Video>

        <Video
          title='Redes'
          image='https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_640.jpg'
          description=' Assumenda sit consequatur odio corrupti similique distinctio unde quo possimus.'
          upLoadDate='24/03/2024'
          duration='25:39'
        ></Video>
        <Video
          title='Tecnologia'
          image='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          description=' Assumenda sit consequatur odio corrupti similique distinctio unde quo possimus.'
          upLoadDate='24/03/2024'
          duration='25:39'
        ></Video>
      </div>
    </div>
  )
}
export default App;

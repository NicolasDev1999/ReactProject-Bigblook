import './App.css';
import ImagenItem from './components/ImagenItem.jsx';


function App() {
  const Header = ({ titleHeader, boton1, boton2, boton3, boton4 }) => {
    return (
      <div className='header'>
        <h1>{titleHeader}</h1>
        <nav><button>{boton1}</button><button>{boton2}</button><button>{boton3}</button></nav>
      </div>
    );
  };

 
  

  return (
    <div className="App">
      <div className='ContainerBannerPop'>
        <ImagenItem
          title='Codigo para Jrs'
          image='https://media.istockphoto.com/id/1154948190/es/foto/el-c%C3%B3digo-fuente-de-programaci%C3%B3n-de-computadora-mostrado-en-un-monitor-de-pc.jpg?s=1024x1024&w=is&k=20&c=7BB8nyr9kZJhNQuT9jkphPLI9R6U8SVl47KDrH0YUdc='
          description='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
          upLoadDate={new Date(2013,10,18)}
          duration={59}
        ></ImagenItem>
        <ImagenItem
          title='Codigo para Senior'
          image='https://media.istockphoto.com/id/1445256568/es/foto/c%C3%B3digo-de-programaci%C3%B3n-de-ne%C3%B3n.jpg?s=1024x1024&w=is&k=20&c=a_5oJJbchJJSeXGsHYcT3jpVmCLtFDvpnHiYJKiNi_A='
          description='Fugiat incidunt dolore recusandae iste aliquam temporibus molestiae, sequi porro voluptate asperiores.'
          upLoadDate={new Date(1999,4,24)}
          duration={110}
          ></ImagenItem>
        <ImagenItem
          title='Redes'
          image='https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_640.jpg'
          description=' Assumenda sit consequatur odio corrupti similique distinctio unde quo possimus.'
          upLoadDate={new Date(1933,0,6)}
          duration={120}
        ></ImagenItem>
      </div>

    </div>
  )
}
export default App;

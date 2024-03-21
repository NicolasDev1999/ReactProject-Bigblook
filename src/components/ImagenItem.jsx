import { ComponenteBoton } from "./ComponenteBoton";


const ImagenItem = ({ title, image, description, upLoadDate, duration }) => {
    const seconds = duration % 60;
    const minutes = Math.floor(duration / 60);
    return (
      <div className='bannerPop'>
        <h3>{title}</h3>
        <div className='imagen'>
          <img src={image} alt={title} />
        </div>
        <div>
            <ol>
                <ul><span>{minutes}:{seconds}</span></ul>
                <ul><span>{upLoadDate.toLocaleDateString()}</span></ul>
          </ol>
        </div>
        <p>{description}</p>
        <ComponenteBoton/>
      </div>
    );
  };
export default ImagenItem
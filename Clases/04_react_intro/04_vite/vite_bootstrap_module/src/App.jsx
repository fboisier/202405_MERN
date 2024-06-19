import './App.scss'
import Alerta from './components/Alerta';
const App = () => {

  const nombre = 'Juan Pérez';
  const edad = 30;
  const usuario = {
    nombreUsuario: 'juanperez',
    correo: 'juan@ejemplo.com'
  };

  const hobbies = ['Leer', `Jugar videojuegos ${nombre}`, 'Senderismo'];

  return (
    <div className='container'>
      <p>{nombre}</p>
      <p>{edad}</p>
      <p>{usuario.nombreUsuario}</p>
      <p>{usuario.correo}</p>
      {hobbies.map((hobby, index) => (
        <div key={index} className="alert alert-success" role="alert">{index + 1}. {hobby}</div>
      ))}

      <Alerta />
    </div>
  );
};

export default App

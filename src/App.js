import BasicComponent from "./components/BasicComponent";
import './App.css'

function muchosComponentes(x){
  let arreglo=[]
  for(let i=0; i<x;i++){
    arreglo.push(<BasicComponent inputID={i} texto={i} key={i}/>)
  }

  return arreglo;
}


function App(){

  //Reglas: Todas las etiquetas JSX deben tener un elemento padre
  //        Las propiedades deben tener un valor como cadena de texto o como expresión
  return(
    <div className="App">         
      {muchosComponentes(5)}
    </div>
  )
}

export default App;
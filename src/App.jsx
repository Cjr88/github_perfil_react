import { useState } from "react";

import Perfil from "./components/Perfil/Index";
// import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";


function App() {
  // const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
 

  return (
    <>
    <div style={{marginTop:'2px',margin:'8px'}}>
      <span style={{ fontSize:'22px', marginRight:'3px'}}>Digite seu GitHub:</span>
      <input style={{fontSize: '16px', padding:'4px'}} type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>
    </div>
 

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} />
        <ReposList nomeUsuario={nomeUsuario} />
      </>
    )}
        
      {/* {formularioEstaVisivel && (
        <Formulario />
      )}
      
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
    
  )
}

export default App

import NavBar from './NavBar.js'
 
 export default function MyHeader(){
    return (
      <header className='vh-100' id='home'>
        <NavBar/>
        <div className='container d-flex flex-wrap align-content-center h-100'>
          <div>
            <h1 className="display-1">ESTÁGIO</h1>
            <h1 className='display-3'>PROVA DE SELEÇÃO</h1>
          </div>
        </div>
    </header>
    )
 }
import { useState, useEffect } from 'react'

export default function List() {

  const [interns, setInterns] = useState([])

  useEffect(() => {

    getInternShip();

  }, []);

  async function getInternShip(){
    try {
      const data = await fetch('http://127.0.0.1:3333/api/internship')
      const json = await data.json()
      console.log(json)
      setInterns(json)
    } catch (e) {
      console.log(e.messege)
    }
  }

  return (
    <div>
      <section id='list'>
        <div className='container py-4 position-relative'>
          <h3 className='text-center display-4 text-info'>LISTA DE CADASTRO</h3>
          <div className='row'>
            <div className='col-12 col-md-2'></div>
            <div className='col-12 col-md-8'>
              <div className='table-responsive'>
              <table className="table mt-4">
                <thead>
                  <tr>
                    <th></th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Nascimento</th>
                    <th>Telefone</th>
                  </tr>
                </thead>
                <tbody>
                {interns.map((intern) => 
                  <tr key={intern.id}>
                    <td>{intern.id}</td>
                    <td>{intern.name}</td>
                    <td>{intern.email}</td>
                    <td>{intern.birthday.substring(0, 10)}</td>
                    <td>{intern.phone}</td>
                  </tr>
                )}                  
                </tbody>
              </table>
              </div>
            </div>
            <div className='col-12 col-md-2'>

            </div>
          </div>

          <div className='position-absolute bottom-0 end-0'>
            <a href='#home'>
              <img src='/img/topo-pag.svg' width="32" />
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}
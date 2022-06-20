import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
      </Head>
      <header className='vh-100'>
        <nav className="navbar navbar-expand-sm position-absolute w-100">

          <div className="container">

            <a href="#">
              <img src="/img/logo-in8-dev.svg" height="35" />
            </a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">cadastro</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">lista</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">sobre mim</a>
              </li>
            </ul>
          </div>

        </nav>
        <div className='container d-flex flex-wrap align-content-center h-100'>
          <div>
            <h1 className={styles.fontHu + " display-1"}>ESTÁGIO</h1>
            <h2 className='display-3'>PROVA DE SELEÇÃO</h2>
          </div>
        </div>
      </header>

      <section className='bg-info vh-100'>
        <div className='container py-4'>
          <h3 className='text-white text-center display-4'>CADASTRO</h3>
          <div className='row'>
            <div className='col-12 col-md-3'></div>
            <div className='col-12 col-md-6'>
              <form>
                <div>
                  <label className='text-white mt-4'>Nome</label>
                  <input className='form-control' />
                </div>
                <div>
                  <label className='text-white mt-4'>Email </label>
                  <input className='form-control' />
                </div>
                <div>
                  <label className='text-white mt-4'>Nascimento </label>
                  <input className='form-control' />
                </div>
                <div>
                  <label className='text-white mt-4'>Telefome </label>
                  <input className='form-control' />
                </div>
              </form>
            </div>
            <div className='col-12 col-md-3'></div>
          </div>

          <div className='text-center mt-4'>
            <button className='btn btn-primary'>CADASTRAR</button>
          </div>
        </div>
      </section>

      <section className='vh-100'>
        <div className='container py-4'>
          <h3 className='text-center display-4 text-info'>LISTA DE CADASTRO</h3>
          <div className='row'>
            <div className='col-12 col-md-2'></div>
            <div className='col-12 col-md-8'>
              <table className="table mt-4">
                <tr>
                  <th></th>
                  <th>Nome</th>
                  <th>Email</th>
                  <th>Nascimento</th>
                  <th>Telefone</th>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
            <div className='col-12 col-md-2'></div>
          </div>

        </div>
      </section>
      <footer className='py-4'>
        <div className='text-center'>
          <p>Ana Sofia Fernandes Rodrigues</p>
          <p>anadira.dira@gmail.com</p>
          <p>+238 986 17 39</p>
          <p>DevNology</p>
        </div>
      </footer>

    </main>
  )
}

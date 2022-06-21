
export default function SignUp(){
    return (
        <div>
            <section className='bg-info vh-100' id='signUp'>
        <div className='container py-4'>
          <h1 className='text-white text-center display-4'>CADASTRO</h1>
          <div className='row'>
            <div className='col-12 col-md-3'></div>
            <div className='col-12 col-md-6'>
              <form>
                <div>
                  <label className='text-white mt-4'>Nome</label>
                  <input className='form-control' type="text" />
                </div>
                <div>
                  <label className='text-white mt-4'>Email </label>
                  <input className='form-control' type="email" />
                </div>
                <div>
                  <label className='text-white mt-4'>Nascimento </label>
                  <input className='form-control' type="data" />
                </div>
                <div>
                  <label className='text-white mt-4'>Telefone </label>
                  <input className='form-control' type="telephone" />
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

        </div>
    )
}
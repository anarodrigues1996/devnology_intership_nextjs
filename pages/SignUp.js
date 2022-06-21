import { useState } from 'react'

function SignUp(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [birthday, setBirthday] = useState("")

  const shoot = () => {
    alert("Cadastro feito! " + name +" " + email + " " +birthday+ " " +phone )
  }

  return (<section className='bg-info vh-100' id='signUp'>
      <div className='container py-4'>
        <h1 className='text-white text-center display-4'>CADASTRO</h1>
        <div className='row'>
          <div className='col-12 col-md-3'></div>
          <div className='col-12 col-md-6'>
            <form>
              <div>
                <label className='text-white mt-4'>Nome</label>
                <input className='form-control' type="text" onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className='text-white mt-4'>Email </label>
                <input className='form-control' type="email"  onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div>
                <label className='text-white mt-4'>Nascimento </label>
                <input className='form-control' type="date"  onChange={(e) => setBirthday(e.target.value)}/>
              </div>
              <div>
                <label className='text-white mt-4'>Telefone </label>
                <input className='form-control' type="number"  onChange={(e) => setPhone(e.target.value)}/>
              </div>
            </form>
          </div>
          <div className='col-12 col-md-3'></div>
        </div>
        <div className='text-center mt-4'>
          <button className='btn btn-primary' onClick={shoot}>CADASTRAR</button>
        </div>
      </div>
    </section>)
}

export default SignUp
import { useState, useEffect } from 'react'

function SignUp(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");

  const [formErrors, setFormErrors,] = useState({});

  const [isSubmit, setIsSubmit,] = useState(false);   

  const handleSubmit = (e) =>{
     e.preventDefault();
     
     //setIsSubmit(true);

    const errors ={};
    const regex = "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/";

    if(!name){
      errors.name='Campo nome Obrigatorio';
      setFormErrors(errors);
      return;
    }

    if(!email){
      errors.email='Campo email Obrigatorio'
      setFormErrors(errors);
      return;
    }else{
      // if(!regex.match(email)){
      //   errors.email='Formato invalido'
      //   setFormErrors(errors);
      //   return;
      // }
    }

    if(!birthday){
      errors.birthday='Campo nascimento Obrigatorio';
      setFormErrors(errors);
      return;
    }

    if(!phone){
      errors.phone='Campo telefone  Obrigatorio';
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    sendData();
  }

  async function sendData() {

    const rawResponse = await fetch('http://127.0.0.1:3333/api/internship', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        birthday: birthday
      })
    });
    const content = await rawResponse.json();
    console.log(content);

    setName('')
    setEmail('')
    setPhone('')
    setBirthday('')

    // setValues({});
  }

 useEffect(() => {
    //console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      //console.log(values)
    }
  }, [formErrors]);

  return (<section className='bg-info' id='signUp'>
      <div className='container py-4'>
        <h1 className='text-white text-center display-4'>CADASTRO</h1>
        <div className='row'>
          <div className='col-12 col-md-3'></div>
          <div className='col-12 col-md-6'>
            <form onSubmit={handleSubmit} id="form1">
              <div>
                {formErrors.name && <p className='text-danger'>{formErrors.name}</p>}
                <label className='text-white'>Nome</label>
                <input className='form-control mb-4' type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
             
              <div>
              {formErrors.email && <p className='text-danger'>{formErrors.email}</p>}
                <label className='text-white'>Email </label>
                <input className='form-control mb-4' type="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              
              <div>
              {formErrors.birthday && <p className='text-danger'>{formErrors.birthday}</p>}
                <label className='text-white'>Nascimento </label>
                <input className='form-control mb-4' type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)}/>
              </div>
             
              <div>
              {formErrors.phone && <p className='text-danger'>{formErrors.phone}</p>}
                <label className='text-white'>Telefone </label>
                <input className='form-control mb-4' type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}/>
              </div>
            </form>
          </div>
          <div className='col-12 col-md-3'></div>
        </div>
        <div className='text-center mt-4'>
          <button className='btn btn-primary' type='submit' form='form1'>CADASTRAR</button>
        </div>
      </div>
    </section>)
}

export default SignUp
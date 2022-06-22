import { useState, useEffect } from 'react'

function SignUp(){

  const [values, setValues] = useState({
  })

  const [formErrors, setFormErrors,] = useState({});

  const [isSubmit, setIsSubmit,] = useState(false);   

  const handleChange =(e)=>{

   setValues({
    ...values, 
    [e.target.name]: e.target.value})

  }

  const handleSubmit = (e) =>{
     e.preventDefault();
     setFormErrors(validate(values));
     setIsSubmit(true);
  }

  const validate = (values)=>{
    const errors ={};
    const regex = "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/";

    if(!values.name){
      errors.name='Campo nome Obrigatorio';
    }

    if(!values.email){
      errors.email='Campo email Obrigatorio';
    }else{
      if(!regex.test(values.email)){
        errors.email='Forato invalido'
      }
    }

    if(!values.birthday){
      errors.birthday='Campo nascimento Obrigatorio';
    }

    if(!values.phone){
      errors.phone='Campo telefone  Obrigatorio';
    }

    return errors;
  }

 useEffect(() => {
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(values)
    }
  }, [formErrors]);

  const getIternShip = async()=>{
      try{
          const data = await fetch('http://127.0.0.1:3333/api/internship')
          const json =await data.json();
          console.log(json)
      }catch(e){
        console.log(e.messege)
      }
  }


  return (<section className='bg-info' id='signUp'>
      <div className='container py-4'>
        <h1 className='text-white text-center display-4'>CADASTRO</h1>
        <div className='row'>
          <div className='col-12 col-md-3'></div>
          <div className='col-12 col-md-6'>
            <form onSubmit={handleSubmit} id="form1">
              <div>
                {formErrors.name && <p className='error'>{formErrors.name}</p>}
                <label className='text-white mt-4'>Nome</label>
                <input className='form-control' type="text" value={values.name} onChange={handleChange} />
              </div>
             
              <div>
              {formErrors.email && <p className='error'>{formErrors.email}</p>}
                <label className='text-white mt-4'>Email </label>
                <input className='form-control' type="email"  value={values.email} onChange={handleChange}/>
              </div>
              
              <div>
              {formErrors.birthday && <p className='error'>{formErrors.birthday}</p>}
                <label className='text-white mt-4'>Nascimento </label>
                <input className='form-control' type="date" value={values.birthday} onChange={handleChange}/>
              </div>
             
              <div>
              {formErrors.phone && <p className='error'>{formErrors.phone}</p>}
                <label className='text-white mt-4'>Telefone </label>
                <input className='form-control' type="number" value={values.phone} onChange={handleChange}/>
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
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
                <input className='form-control mb-4' type="text" value={values.name} onChange={handleChange} />
              </div>
             
              <div>
              {formErrors.email && <p className='text-danger'>{formErrors.email}</p>}
                <label className='text-white'>Email </label>
                <input className='form-control mb-4' type="email"  value={values.email} onChange={handleChange}/>
              </div>
              
              <div>
              {formErrors.birthday && <p className='text-danger'>{formErrors.birthday}</p>}
                <label className='text-white'>Nascimento </label>
                <input className='form-control mb-4' type="date" value={values.birthday} onChange={handleChange}/>
              </div>
             
              <div>
              {formErrors.phone && <p className='text-danger'>{formErrors.phone}</p>}
                <label className='text-white'>Telefone </label>
                <input className='form-control mb-4' type="number" value={values.phone} onChange={handleChange}/>
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
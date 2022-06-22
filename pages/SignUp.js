import { useState, useEffect } from 'react'

function SignUp(){
    const internValues = {
      name: '',
      email: '',
      phone: null,
      birthday: null
    }
  const [formValues, setFormValues,] = useState(internValues)
  
  const [formErrors, setFormErrors,] = useState({});

  const [isSubmit, setIsSubmit,] = useState(false);   

  const handleChange =(e)=>{
   const {name, value}= e.target;

   setFormValues({...formValues, [name]: value})

  }

  const handleSubmit = (e) =>{
     e.preventDefault();
     setFormErrors(validate(formValues));
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
      console.log(formValues)
    }
  }, [formErrors])


  return (<section className='bg-info vh-100' id='signUp'>
      <div className='container py-4'>
        <h1 className='text-white text-center display-4'>CADASTRO</h1>
        <div className='row'>
          <div className='col-12 col-md-3'></div>
          <div className='col-12 col-md-6'>
            <form >
              <div>
                <label className='text-white mt-4'>Nome</label>
                <p>{formErrors.name}</p>
                <input className='form-control' type="text" value= {formValues.name} onChange={handleChange} />
              </div>
             
              <div>
              
                <label className='text-white mt-4'>Email </label>
                <p>{formErrors.email}</p>
                <input className='form-control' type="email"  value= {formValues.email} onChange={handleChange}/>
              </div>
              
              <div>
              
                <label className='text-white mt-4'>Nascimento </label>
                <p>{formErrors.birthday}</p>
                <input className='form-control' type="date" value= {formValues.birthday} onChange={handleChange}/>
              </div>
             
              <div>
                <label className='text-white mt-4'>Telefone </label>
                <p>{formErrors.phone}</p>
                <input className='form-control' type="number" value= {formValues.phone} onChange={handleChange}/>
              </div>
            </form>
          </div>
          <div className='col-12 col-md-3'></div>
        </div>
        <div className='text-center mt-4'>
          <button className='btn btn-primary' onClick={handleSubmit}>CADASTRAR</button>
        </div>
      </div>
    </section>)
}

export default SignUp
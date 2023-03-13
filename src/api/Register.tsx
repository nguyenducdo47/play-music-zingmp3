import React, { useState } from 'react';

interface RegisterForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(registerForm);
  };

  return (
    <form className="m-auto mt-28 bg-white w-full max-w-7xl p-4 rounded-lg relative"  onSubmit={handleSubmit}>
      <div className='mt-5 ml-5 w-full flex justify-center  flex-col'>
        <label className='w-24 inline-block' htmlFor="firstName">First Name:</label>
        <input className='ml-5 border border-solid border-black max-w-6xl mt-4 p-4 h-11 rounded-lg' placeholder='First name' type="text" id="firstName" name="firstName" value={registerForm.firstName} onChange={handleInputChange} required />
      </div>
      <div className='mt-5 ml-5 w-full flex justify-center  flex-col'>
        <label className='w-24 inline-block' htmlFor="lastName">Last Name:</label>
        <input className='ml-5 border border-solid border-black max-w-6xl mt-4 p-4 h-11 rounded-lg' placeholder='Last name' type="text" id="lastName" name="lastName" value={registerForm.lastName} onChange={handleInputChange} required />
      </div>
      <div className='mt-5 ml-5 w-full flex justify-center  flex-col'>
        <label className='w-24 inline-block' htmlFor="email">Email:</label>
        <input className='ml-5 border border-solid border-black max-w-6xl mt-4 p-4 h-11 rounded-lg' placeholder='Email' type="email" id="email" name="email" value={registerForm.email} onChange={handleInputChange} required />
      </div>
      <div className='mt-5 ml-5 w-full flex justify-center  flex-col'>
        <label  className='w-24 inline-block' htmlFor="password">Password:</label>
        <input className='ml-5 border border-solid border-black max-w-6xl mt-4 p-4 h-11 rounded-lg' placeholder='Password' type="password" id="password" name="password" value={registerForm.password} onChange={handleInputChange} required />
      </div>
      <div className='w-full flex justify-center'>
      <button className='mt-5 ml-5 w-52 h-11 bg-cyan-700 text-white rounded-lg' type="submit">Register</button>

      </div>
    </form>
  );
};

export default Register;

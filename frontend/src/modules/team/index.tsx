import { useState } from "react";
import { useNavigate } from "react-router-dom";

import './styles/team.css'

const Team = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (event:any) => {
      event.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
      // Simula un inicio de sesión exitoso
      if (email !== '' && password !== '') {
        navigate('/team/home');
      } else {
        // Mostrar un mensaje de error
        console.error('Credenciales incorrectas');
        navigate('/team/home');
      }
    };
    
    return (
        <div>
            <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
                <p className="create-account" onClick={handleSubmit} >Create account</p>
            </form>
            </div>
        </div>
    )
}

export default Team
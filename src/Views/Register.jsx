import { Link } from 'react-router-dom';
import './auth.css';

export default function Register() {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/logo.png" alt="Logo GeekStore" className="logo" />
        <h2>GEEKSTORE</h2>
      </div>
      <div className="auth-right">
        <h3>CRIAR CONTA</h3>
        
        <label>Nome</label>
        <input type="text" placeholder="Digite seu nome..." />

        <label>Email</label>
        <input type="email" placeholder="Digite seu email..." />

        <label>Senha</label>
        <div className="input-password">
          <input type="password" placeholder="Digite sua senha..." />
          <span className="eye-icon">👁️</span>
        </div>

        <button className="btn-primary">Criar</button>

        <p>Já tem uma conta? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

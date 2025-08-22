import { Link } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src="/logo.png" alt="Logo GeekStore" className="logo" />
        <h2>GEEKSTORE</h2>
      </div>
      <div className="auth-right">
        <h3>ENTRAR</h3>
        <label>Email</label>
        <input type="email" placeholder="Digite seu email..." />
        
        <label>Senha</label>
        <div className="input-password">
          <input type="password" placeholder="Digite sua senha..." />
          <span className="eye-icon">👁️</span>
        </div>

        <button className="btn-primary">Entrar</button>

        <Link className="link" to="#">Esqueci minha senha</Link>
        <p>Não tem conta? <Link to="/cadastro">Cadastrar</Link></p>
      </div>
    </div>
  );
}

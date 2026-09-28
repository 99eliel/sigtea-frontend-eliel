import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !senha.trim()) {
      setErro('Preencha e-mail e senha para continuar.');
      return;
    }

    localStorage.setItem(
      'sigtea_usuario_mock',
      JSON.stringify({
        nome: 'Usuário Teste',
        email,
      }),
    );

    navigate('/dashboard');
  }

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <span className="login-chip">Centro TEA • Goiatuba</span>
        <h1>SIGTEA</h1>
        <p>Acesso inicial da plataforma para testes do frontend.</p>

        <label>
          E-mail
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Senha
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </label>

        {erro && <div className="form-error">{erro}</div>}

        <button type="submit">Entrar</button>

        <small className="mock-info">
          Login mockado: qualquer e-mail e senha preenchidos liberam o acesso.
        </small>
      </form>
    </div>
  );
}

export default Login;

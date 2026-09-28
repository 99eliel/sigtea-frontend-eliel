import { useState } from 'react';

const estadoInicial = {
  nome: '',
  cpf: '',
  dataNascimento: '',
};

function aplicarMascaraCpf(valor) {
  return valor
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function PatientForm({ onAddPatient }) {
  const [formulario, setFormulario] = useState(estadoInicial);
  const [erro, setErro] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormulario((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: name === 'cpf' ? aplicarMascaraCpf(value) : value,
    }));
  }

  function validarFormulario() {
    if (!formulario.nome.trim()) {
      return 'Informe o nome completo do paciente.';
    }

    const cpfNumeros = formulario.cpf.replace(/\D/g, '');

    if (!cpfNumeros) {
      return 'Informe o CPF do paciente.';
    }

    if (cpfNumeros.length !== 11) {
      return 'O CPF deve conter 11 números.';
    }

    if (!formulario.dataNascimento) {
      return 'Informe a data de nascimento.';
    }

    return '';
  }

  function handleSubmit(event) {
    event.preventDefault();

    const mensagemErro = validarFormulario();

    if (mensagemErro) {
      setErro(mensagemErro);
      return;
    }

    const novoPaciente = {
      id: crypto.randomUUID(),
      nome: formulario.nome.trim(),
      cpf: formulario.cpf,
      dataNascimento: formulario.dataNascimento,
      criadoEm: new Date().toISOString(),
    };

    onAddPatient(novoPaciente);
    setFormulario(estadoInicial);
    setErro('');
  }

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Nome completo
          <input
            type="text"
            name="nome"
            placeholder="Ex: Ana Clara Santos"
            value={formulario.nome}
            onChange={handleChange}
          />
        </label>

        <label>
          CPF
          <input
            type="text"
            name="cpf"
            placeholder="000.000.000-00"
            value={formulario.cpf}
            onChange={handleChange}
          />
        </label>

        <label>
          Data de nascimento
          <input
            type="date"
            name="dataNascimento"
            value={formulario.dataNascimento}
            onChange={handleChange}
          />
        </label>
      </div>

      {erro && <div className="form-error">{erro}</div>}

      <button type="submit" className="primary-button">
        Salvar paciente
      </button>
    </form>
  );
}

export default PatientForm;

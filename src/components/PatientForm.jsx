import { useState } from 'react';

const estadoInicial = {
  nome: '',
  cpf: '',
  dataNascimento: '',
  numCns: '',
  statusClinico: 'SUSPEITA',
  nivelSuporte: '',
  nomeResponsavel: '',
};

function aplicarMascaraCpf(valor) {
  return valor
    .replace(/\D/g, '')
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function limitarNumeros(valor, limite) {
  return valor.replace(/\D/g, '').slice(0, limite);
}

function obterDataAtual() {
  return new Date().toISOString().split('T')[0];
}

function PatientForm({ onAddPatient, patients }) {
  const [formulario, setFormulario] = useState(estadoInicial);
  const [erro, setErro] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === 'cpf') {
      setFormulario((dadosAtuais) => ({
        ...dadosAtuais,
        cpf: aplicarMascaraCpf(value),
      }));
      return;
    }

    if (name === 'numCns') {
      setFormulario((dadosAtuais) => ({
        ...dadosAtuais,
        numCns: limitarNumeros(value, 15),
      }));
      return;
    }

    setFormulario((dadosAtuais) => ({
      ...dadosAtuais,
      [name]: value,
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

    const cpfJaCadastrado = patients.some(
      (patient) => patient.cpf.replace(/\D/g, '') === cpfNumeros
    );

    if (cpfJaCadastrado) {
      return 'Já existe um paciente cadastrado com este CPF.';
    }

    if (!formulario.dataNascimento) {
      return 'Informe a data de nascimento.';
    }

    if (formulario.dataNascimento > obterDataAtual()) {
      return 'A data de nascimento não pode ser futura.';
    }

    if (!['DIAGNOSTICADO', 'SUSPEITA'].includes(formulario.statusClinico)) {
      return 'Selecione um status clínico válido.';
    }

    if (formulario.nivelSuporte && !['1', '2', '3'].includes(formulario.nivelSuporte)) {
      return 'O nível de suporte deve ser 1, 2 ou 3.';
    }

    if (formulario.numCns && formulario.numCns.length !== 15) {
      return 'O CNS deve conter 15 números quando informado.';
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
      convenioId: null,
      nome: formulario.nome.trim(),
      cpf: formulario.cpf,
      cpfLimpo: formulario.cpf.replace(/\D/g, ''),
      dataNascimento: formulario.dataNascimento,
      numCns: formulario.numCns || null,
      statusClinico: formulario.statusClinico,
      nivelSuporte: formulario.nivelSuporte ? Number(formulario.nivelSuporte) : null,
      nomeResponsavel: formulario.nomeResponsavel.trim() || null,
      criadoEm: new Date().toISOString(),
    };

    onAddPatient(novoPaciente);
    setFormulario(estadoInicial);
    setErro('');
  }

  return (
    <form className="patient-form" onSubmit={handleSubmit}>
      <div className="form-grid form-grid-patient">
        <label>
          Nome completo *
          <input
            type="text"
            name="nome"
            placeholder="Ex: Ana Clara Santos"
            value={formulario.nome}
            onChange={handleChange}
          />
        </label>

        <label>
          CPF *
          <input
            type="text"
            name="cpf"
            placeholder="000.000.000-00"
            value={formulario.cpf}
            onChange={handleChange}
          />
        </label>

        <label>
          Data de nascimento *
          <input
            type="date"
            name="dataNascimento"
            max={obterDataAtual()}
            value={formulario.dataNascimento}
            onChange={handleChange}
          />
        </label>

        <label>
          Status clínico *
          <select
            name="statusClinico"
            value={formulario.statusClinico}
            onChange={handleChange}
          >
            <option value="SUSPEITA">Suspeita</option>
            <option value="DIAGNOSTICADO">Diagnosticado</option>
          </select>
        </label>

        <label>
          Nível de suporte
          <select
            name="nivelSuporte"
            value={formulario.nivelSuporte}
            onChange={handleChange}
          >
            <option value="">Não informado</option>
            <option value="1">Nível 1</option>
            <option value="2">Nível 2</option>
            <option value="3">Nível 3</option>
          </select>
        </label>

        <label>
          CNS
          <input
            type="text"
            name="numCns"
            placeholder="15 números"
            value={formulario.numCns}
            onChange={handleChange}
          />
        </label>

        <label className="span-2">
          Nome do responsável
          <input
            type="text"
            name="nomeResponsavel"
            placeholder="Ex: Maria Silva"
            value={formulario.nomeResponsavel}
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

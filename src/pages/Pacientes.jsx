import { useEffect, useState } from 'react';
import PatientForm from '../components/PatientForm.jsx';
import PatientList from '../components/PatientList.jsx';

const pacientesIniciais = [
  {
    id: '1',
    convenioId: 1,
    nome: 'João Pedro Silva',
    cpf: '123.456.789-10',
    cpfLimpo: '12345678910',
    dataNascimento: '2017-05-12',
    numCns: '123456789012345',
    statusClinico: 'SUSPEITA',
    nivelSuporte: 1,
    nomeResponsavel: 'Maria Silva',
    criadoEm: new Date().toISOString(),
  },
  {
    id: '2',
    convenioId: 2,
    nome: 'Ana Clara Santos',
    cpf: '987.654.321-00',
    cpfLimpo: '98765432100',
    dataNascimento: '2016-09-20',
    numCns: null,
    statusClinico: 'DIAGNOSTICADO',
    nivelSuporte: 2,
    nomeResponsavel: 'Carlos Santos',
    criadoEm: new Date().toISOString(),
  },
];

function carregarPacientes() {
  const pacientesSalvos = localStorage.getItem('sigtea_pacientes_mock');

  if (!pacientesSalvos) {
    return pacientesIniciais;
  }

  try {
    return JSON.parse(pacientesSalvos);
  } catch {
    return pacientesIniciais;
  }
}

function Pacientes() {
  const [patients, setPatients] = useState(carregarPacientes);

  useEffect(() => {
    localStorage.setItem('sigtea_pacientes_mock', JSON.stringify(patients));
  }, [patients]);

  function handleAddPatient(novoPaciente) {
    setPatients((pacientesAtuais) => [novoPaciente, ...pacientesAtuais]);
  }

  function handleClearMock() {
    const confirmar = window.confirm('Deseja limpar os pacientes cadastrados no mock?');

    if (!confirmar) {
      return;
    }

    setPatients([]);
  }

  function handleResetMock() {
    setPatients(pacientesIniciais);
  }

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Módulo de pacientes</span>
          <h1>Cadastro de Pacientes</h1>
          <p>
            Tela de cadastro com CPF único, data de nascimento válida,
            status clínico, nível de suporte, CNS e responsável.
          </p>
        </div>

        <span className="status-badge">Mock ativo</span>
      </div>

      <div className="content-card spec-card">
        <strong>Regras aplicadas no frontend</strong>
        <ul>
          <li>CPF obrigatório com 11 números e sem duplicidade no mock.</li>
          <li>Data de nascimento obrigatória e sem data futura.</li>
          <li>Status clínico limitado a Suspeita ou Diagnosticado.</li>
          <li>Nível de suporte opcional, aceitando somente 1, 2 ou 3.</li>
          <li>CNS opcional com 15 números quando informado.</li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Novo paciente</h2>
        <PatientForm onAddPatient={handleAddPatient} patients={patients} />
      </div>

      <div className="content-card">
        <div className="section-title">
          <div>
            <h2>Pacientes cadastrados</h2>
            <p>{patients.length} registro(s) no mock local.</p>
          </div>

          <div className="action-group">
            <button type="button" className="secondary-button" onClick={handleResetMock}>
              Restaurar exemplos
            </button>

            <button type="button" className="secondary-button" onClick={handleClearMock}>
              Limpar mock
            </button>
          </div>
        </div>

        <PatientList patients={patients} />
      </div>
    </section>
  );
}

export default Pacientes;

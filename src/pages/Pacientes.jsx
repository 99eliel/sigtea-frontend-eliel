import { useEffect, useState } from 'react';
import PatientForm from '../components/PatientForm.jsx';
import PatientList from '../components/PatientList.jsx';

const pacientesIniciais = [
  {
    id: '1',
    nome: 'João Pedro Silva',
    cpf: '123.456.789-10',
    dataNascimento: '2017-05-12',
    criadoEm: new Date().toISOString(),
  },
  {
    id: '2',
    nome: 'Ana Clara Santos',
    cpf: '987.654.321-00',
    dataNascimento: '2016-09-20',
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

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Módulo de pacientes</span>
          <h1>Cadastro de Pacientes</h1>
          <p>
            Tela inicial para cadastro de pacientes com Nome, CPF e Data de Nascimento.
            O salvamento está sendo simulado com localStorage.
          </p>
        </div>

        <span className="status-badge">Mock ativo</span>
      </div>

      <div className="content-card">
        <h2>Novo paciente</h2>
        <PatientForm onAddPatient={handleAddPatient} />
      </div>

      <div className="content-card">
        <div className="section-title">
          <div>
            <h2>Pacientes cadastrados</h2>
            <p>{patients.length} registro(s) no mock local.</p>
          </div>

          <button type="button" className="secondary-button" onClick={handleClearMock}>
            Limpar mock
          </button>
        </div>

        <PatientList patients={patients} />
      </div>
    </section>
  );
}

export default Pacientes;

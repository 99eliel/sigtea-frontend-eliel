function formatarData(data) {
  if (!data) {
    return '-';
  }

  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
}

function formatarStatus(status) {
  const nomes = {
    DIAGNOSTICADO: 'Diagnosticado',
    SUSPEITA: 'Suspeita',
  };

  return nomes[status] || '-';
}

function formatarNivel(nivel) {
  if (!nivel) {
    return 'Não informado';
  }

  return `Nível ${nivel}`;
}

function PatientList({ patients }) {
  if (patients.length === 0) {
    return (
      <div className="empty-state">
        Nenhum paciente cadastrado ainda.
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="patients-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Nascimento</th>
            <th>Status clínico</th>
            <th>Nível</th>
            <th>CNS</th>
            <th>Responsável</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.nome}</td>
              <td>{patient.cpf}</td>
              <td>{formatarData(patient.dataNascimento)}</td>
              <td>
                <span className={`status-pill ${patient.statusClinico?.toLowerCase()}`}>
                  {formatarStatus(patient.statusClinico)}
                </span>
              </td>
              <td>{formatarNivel(patient.nivelSuporte)}</td>
              <td>{patient.numCns || '-'}</td>
              <td>{patient.nomeResponsavel || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;

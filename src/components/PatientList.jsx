function formatarData(data) {
  if (!data) {
    return '-';
  }

  const [ano, mes, dia] = data.split('-');
  return `${dia}/${mes}/${ano}`;
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
            <th>Data de nascimento</th>
            <th>Criado em</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.nome}</td>
              <td>{patient.cpf}</td>
              <td>{formatarData(patient.dataNascimento)}</td>
              <td>{new Date(patient.criadoEm).toLocaleDateString('pt-BR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientList;

import { ClipboardList, Database, Route } from 'lucide-react';

const cards = [
  {
    icon: ClipboardList,
    label: 'Módulo ativo',
    title: 'Pacientes',
    description: 'Cadastro inicial e listagem de pacientes com dados mockados.',
  },
  {
    icon: Route,
    label: 'Rotas criadas',
    title: '/login, /dashboard e /pacientes',
    description: 'Estrutura inicial de navegação usando React Router.',
  },
  {
    icon: Database,
    label: 'Integração futura',
    title: 'API real',
    description: 'O mock atual poderá ser substituído por chamadas ao backend.',
  },
];

function Dashboard() {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Visão geral</span>
          <h1>Dashboard</h1>
          <p>Base inicial do frontend do SIGTEA para organizar as próximas telas do sistema.</p>
        </div>
      </div>

      <div className="cards-grid">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <article className="info-card" key={card.title}>
              <div className="card-icon">
                <Icon size={22} />
              </div>
              <span>{card.label}</span>
              <strong>{card.title}</strong>
              <p>{card.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Dashboard;

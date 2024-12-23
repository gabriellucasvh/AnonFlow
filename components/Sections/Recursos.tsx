import { CheckCircle } from 'lucide-react'

const features = [
  {
    title: "Envio de Feedback Anônimo",
    description: "Garantia de anonimato para os usuários."
  },
  {
    title: "Relatórios Detalhados",
    description: "Gráficos e insights sobre o feedback recebido."
  },
  {
    title: "Integração com Ferramentas",
    description: "Compatibilidade com Slack, Teams ou e-mail corporativo."
  },
  {
    title: "Gestão de Times",
    description: "Controle de membros, times e permissões."
  },
  {
    title: "Agendamento de Feedback",
    description: "Configuração para coleta recorrente de opiniões."
  },
  {
    title: "Perguntas Personalizadas",
    description: "Criação de formulários customizados para necessidades específicas."
  },
  {
    title: "Filtros e Categorias",
    description: "Organização e análise por tópicos ou departamentos."
  }
]

const benefits = [
  {
    title: "Segurança e Privacidade",
    description: "Tecnologia de criptografia para garantir o anonimato."
  },
  {
    title: "Acessibilidade Multicanal",
    description: "Acesso via web e mobile, com design responsivo."
  },
  {
    title: "Suporte Dedicado",
    description: "Equipe de suporte pronta para ajudar."
  },
  {
    title: "Feedback em Tempo Real",
    description: "Notificações instantâneas de novos feedbacks."
  },
  {
    title: "Gamificação (Opcional)",
    description: "Incentivos para engajamento, como badges ou prêmios simbólicos."
  }
]

export default function Recursos() {
  return (
    <div className="container mx-auto px-4 py-16 w-11/12" id='recursos'>
      <h1 className="text-4xl font-bold text-center mb-16">Recursos</h1>
      
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Principais Funcionalidades</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="text-green-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold mb-8">Benefícios Diferenciais</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="text-blue-500 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}


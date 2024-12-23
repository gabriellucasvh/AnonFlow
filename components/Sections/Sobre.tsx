import { Shield, Users, BarChart, Zap, MessageSquare } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Feedback Anônimo",
    description: "Garantimos total anonimato para todos os usuários, promovendo honestidade e transparência."
  },
  {
    icon: BarChart,
    title: "Análises Detalhadas",
    description: "Oferecemos relatórios e insights profundos para ajudar na tomada de decisões."
  },
  {
    icon: Users,
    title: "Gestão de Equipes",
    description: "Controle eficiente de membros, times e permissões para uma colaboração otimizada."
  },
  {
    icon: Zap,
    title: "Feedback em Tempo Real",
    description: "Receba e responda a feedbacks instantaneamente, mantendo-se sempre atualizado."
  },
  {
    icon: MessageSquare,
    title: "Personalização",
    description: "Crie formulários e pesquisas personalizadas para atender às necessidades específicas da sua empresa."
  }
]

export default function Sobre() {
  return (
    <div className="container mx-auto px-4 py-16" id='sobre'>
      <h1 className="text-4xl font-bold text-center mb-8">Sobre Nós</h1>
      
      <section className="mb-16 max-w-3xl mx-auto my-14">
        <h2 className="text-3xl font-semibold mb-4">Nossa Missão</h2>
        <p className="text-lg text-gray-700 mb-8">
          Na AnonFlow, nossa missão é transformar a cultura de feedback nas organizações. 
          Acreditamos que o feedback honesto e construtivo é a chave para o crescimento e a inovação. 
          Nossa plataforma de feedback anônimo permite que as empresas cultivem um ambiente de 
          confiança, onde todas as vozes são ouvidas e valorizadas.
        </p>
        <p className="text-lg text-gray-700">
          Fundada em 2024, nossa equipe de especialistas em tecnologia e recursos humanos 
          trabalha incansavelmente para fornecer soluções inovadoras que promovem a 
          comunicação aberta e o desenvolvimento contínuo nas organizações.
        </p>
      </section>
      
      <section className='flex flex-col items-center justify-center '>
        <h2 className="text-3xl font-semibold mb-8 text-center">Nossas Principais Características</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:bg-neutral-100 transition-colors duration-300">
              <h3 className="text-xl font-semibold mb-2 flex gap-3"> <feature.icon className="text-blue-500 w-7 h-7 mb-4" />{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Junte-se a Nós</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          Descubra como nossa plataforma pode transformar a cultura de feedback na sua organização. 
        </p>
        <a 
          href="/contato" 
          className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors"
        >
          Crie uma conta agora
        </a>
      </section>
    </div>
  )
}


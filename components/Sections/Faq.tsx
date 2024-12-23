import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "O que é o AnonFlow e como funciona?",
      answer: "O AnonFlow é uma plataforma de feedback anônimo projetada para ajudar organizações a melhorar sua cultura de comunicação. Ela permite que os funcionários forneçam feedback honesto e construtivo de forma anônima, enquanto os gestores recebem insights valiosos para tomar decisões informadas."
    },
    {
      question: "Como o AnonFlow garante o anonimato dos usuários?",
      answer: "O AnonFlow utiliza tecnologia de criptografia avançada para proteger a identidade dos usuários. As informações de identificação são separadas do conteúdo do feedback, garantindo que os administradores não possam associar feedbacks específicos a indivíduos."
    },
    {
      question: "Quais são as opções de integração disponíveis?",
      answer: "O AnonFlow oferece integrações com várias ferramentas populares, incluindo Slack, Microsoft Teams e e-mail corporativo. Isso permite que as equipes recebam e respondam a feedbacks diretamente em suas plataformas de comunicação preferidas."
    },
    {
      question: "Como funciona o sistema de relatórios e análises?",
      answer: "Nossa plataforma fornece relatórios detalhados e insights baseados nos feedbacks recebidos. Você pode visualizar tendências, sentimentos e temas comuns através de gráficos interativos e dashboards personalizáveis, ajudando na tomada de decisões estratégicas."
    },
    {
      question: "Existe um limite de usuários para cada plano?",
      answer: "Sim, nossos planos têm limites de usuários. O plano Básico suporta até 50 usuários, o plano Pro até 250 usuários, e o plano Enterprise oferece usuários ilimitados. Podemos criar planos personalizados para atender às necessidades específicas da sua organização."
    },
    {
      question: "Como posso personalizar as perguntas de feedback para minha equipe?",
      answer: "Nos planos Pro e Enterprise, você pode criar formulários e pesquisas personalizadas. Isso permite que você adapte as perguntas às necessidades específicas da sua organização, departamentos ou projetos."
    },
    {
      question: "Que tipo de suporte o AnonFlow oferece?",
      answer: "Oferecemos diferentes níveis de suporte dependendo do plano. O plano Básico inclui suporte por e-mail, o plano Pro oferece suporte prioritário, e o plano Enterprise inclui suporte 24/7 e um gerente de conta dedicado."
    },
    {
      question: "O AnonFlow é compatível com dispositivos móveis?",
      answer: "Sim, o AnonFlow é totalmente responsivo e pode ser acessado via web e dispositivos móveis. Nosso design adaptativo garante uma experiência de usuário consistente em todos os dispositivos."
    },
    {
      question: "Como posso começar a usar o AnonFlow?",
      answer: "Para começar, basta escolher um plano que atenda às suas necessidades e se inscrever em nosso site. Oferecemos uma demonstração gratuita para que você possa experimentar nossa plataforma antes de se comprometer. Após a inscrição, nossa equipe de suporte ajudará na configuração e integração com seus sistemas existentes."
    }
  ]
  
  export default function Faq() {
    return (
      <div className="container mx-auto px-4 py-16" id="faq">
        <h1 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    )
  }
  
  
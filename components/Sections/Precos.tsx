import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const tiers = [
  {
    name: "Básico",
    price: "R$99",
    description: "Ideal para pequenas equipes e startups",
    features: [
      "Feedback anônimo",
      "Relatórios básicos",
      "Integração com e-mail",
      "Até 50 usuários",
      "Suporte por e-mail"
    ]
  },
  {
    name: "Pro",
    price: "R$299",
    description: "Perfeito para empresas em crescimento",
    features: [
      "Todas as funcionalidades do plano Básico",
      "Relatórios detalhados e insights",
      "Integração com Slack e Teams",
      "Até 250 usuários",
      "Suporte prioritário",
      "Perguntas personalizadas"
    ]
  },
  {
    name: "Enterprise",
    price: "Personalizado",
    description: "Soluções sob medida para grandes corporações",
    features: [
      "Todas as funcionalidades do plano Pro",
      "Usuários ilimitados",
      "API personalizada",
      "Suporte 24/7",
      "Treinamento dedicado",
      "Configurações avançadas de segurança",
      "Gamificação opcional"
    ]
  }
]

export default function Precos() {
  return (
    <div className="container mx-auto px-4 py-16 w-11/12" id='precos'>
      <h1 className="text-4xl font-bold text-center mb-4">Nossos Planos</h1>
      <p className="text-xl text-center text-gray-600 mb-16">
        Escolha o plano ideal para transformar a cultura de feedback da sua empresa
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <Card key={index} className={`flex flex-col ${index === 1 ? 'border-blue-500 border-2' : ''}`}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
              <CardDescription className="text-lg">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-4xl font-bold mb-6">{tier.price}<span className="text-lg font-normal text-gray-600">{tier.price !== "Personalizado" ? "/mês" : ""}</span></p>
              <ul className="space-y-2">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                {index === 2 ? "Entre em contato" : "Comece agora"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Precisa de algo mais específico?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Nós oferecemos soluções personalizadas para atender às necessidades únicas da sua organização.
        </p>
        <Button variant="outline" size="lg">
          Fale com nossa equipe
        </Button>
      </div>
    </div>
  )
}


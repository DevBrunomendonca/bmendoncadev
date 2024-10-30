import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion"
import Paragraph from "@/app/_components/ui/paragraph"

const AccordionFaq = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        className="border-b-[1px] border-[#8C8A8A] border-opacity-20"
        value="item-1"
      >
        <AccordionTrigger className="items-start pr-4 text-start text-base font-medium leading-5 text-primary-white">
          1. Qual é o seu prazo médio de entrega?
        </AccordionTrigger>
        <AccordionContent>
          <Paragraph content="O prazo depende da complexidade do projeto. Para projetos menores, como criação de landing page (site de uma única página), o tempo estimado é de 1 semanas. Para projetos de 3 a 5 páginas o prazo medio é de 1 a 2 semanas. Já projetos mais complexos, como desenvolvimento de sites com funcionalidades mais avançadas podem levar de 4 a 6 semanas." />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="border-b-[1px] border-[#8C8A8A] border-opacity-20"
        value="item-2"
      >
        <AccordionTrigger className="items-start pr-4 text-start text-base font-medium leading-5 text-primary-white">
          2. Você oferece suporte e manutenção após o término do projeto?
        </AccordionTrigger>
        <AccordionContent>
          <Paragraph content="Sim! Para questões visuais simples ofereço um suporte sem custo. Já para manutenção e alimentação de informações que são feitas com frequências  ofereço um serviço de mensalidade de acordo com a demanda do cliente." />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="border-b-[1px] border-[#8C8A8A] border-opacity-20"
        value="item-3"
      >
        <AccordionTrigger className="items-start pr-4 text-start text-base font-medium leading-5 text-primary-white">
          3. Como posso acompanhar o progresso do projeto?
        </AccordionTrigger>
        <AccordionContent>
          <Paragraph content="Utilizo ferramentas como Trello ou Jira para gerenciar tarefas e manter o cliente informado. Além disso, faço reuniões de atualização regularmente para revisar o andamento do projeto e ajustar qualquer aspecto necessário." />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="border-b-[1px] border-[#8C8A8A] border-opacity-20"
        value="item-4"
      >
        <AccordionTrigger className="items-start pr-4 text-start text-base font-medium leading-5 text-primary-white">
          4. Como você define o orçamento de um projeto?
        </AccordionTrigger>
        <AccordionContent>
          <Paragraph content="O orçamento é definido com base na complexidade e no escopo do projeto. Após a reunião inicial e o levantamento das necessidades, apresento uma proposta detalhada, que inclui prazos e valores, sempre transparente sobre os custos envolvidos." />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="border-b-[1px] border-[#8C8A8A] border-opacity-20"
        value="item-5"
      >
        <AccordionTrigger className="items-start pr-4 text-start text-base font-medium leading-5 text-primary-white">
          5. Quais tecnologias você utiliza com mais frequência?
        </AccordionTrigger>
        <AccordionContent>
          <Paragraph content="As Principais tecnologias que uso são: JavaScript, TypeScript, React, Next.js, Node.js, Prisma, e bancos de dados como PostgreSQL e MongoDB. No entanto, estou sempre disposto a aprender novas tecnologias para atender às necessidades de um projeto." />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        className="border-b-[1px] border-[#8C8A8A] border-opacity-20"
        value="item-6"
      >
        <AccordionTrigger className="items-start pr-4 text-start text-base font-medium leading-5 text-primary-white">
          6. Quais são seus principais diferenciais como desenvolvedor?
        </AccordionTrigger>
        <AccordionContent>
          <Paragraph content="Meu diferencial é a capacidade de trabalhar em toda a stack de desenvolvimento (front-end e back-end) e a atenção aos detalhes na usabilidade e performance. Além disso, valorizo a comunicação clara e o entendimento profundo dos objetivos de cada cliente ou equipe." />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionFaq

import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Pagamento único",
      logo: "/feature-1.svg",
      content:
        "Confira nossas melhores práticas e suporte para fazer com que as mensagens de texto se tornem um dos seus três principais canais de receita.",
    },
    {
      id: 2,
      title: "Dados auto-relatados",
      logo: "/feature-2.svg",
      content:
        "Você é dono dos seus dados, do design da loja e do plano de negócios, mas é livre para usar a plataforma de software e os recursos fornecidos pela Shopify.",
    },
    {
      id: 3,
      title: "Atualizações sempre gratuitas",
      logo: "/feature-3.svg",
      content:
        "A Shopify se dedica tanto a manter seu software atualizado que envia atualizações gratuitas por toda a vida, sem cobrar nada.",
    },
    {
      id: 4,
      title: "Design mobile-first",
      logo: "/feature-4.svg",
      content:
        "Com nosso aplicativo móvel, você permite que seus clientes verifiquem o status do pedido, naveguem pela sua loja e criem uma conta na hora.",
    },
    {
      id: 5,
      title: "100% personalizável",
      logo: "/feature-5.svg",
      content:
        "Você pode personalizar sua vitrine e todo o resto da maneira que quiser, sendo o proprietário do código-fonte.",
    },
    {
      id: 6,
      title: "Gerenciamento de tarefas fácil",
      logo: "/feature-6.svg",
      content:
        "Você pode ficar tranquilo sabendo que seu sistema está funcionando sem problemas graças à experiência e precisão de nossos técnicos.",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Conteúdo Principal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          <Subtitle style="mb-2">360° PERSONALIZÁVEL</Subtitle>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
            Tenha controle total sobre sua loja online
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            Tome controle total do seu negócio de eCommerce sendo proprietário
            do código-fonte e dos dados que o impulsionam.
          </Paragraph>
        </motion.div>

        {/* Itens de Funcionalidades */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

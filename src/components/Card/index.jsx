import CardItem from "./cardItem";

export default function Card() {
  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="flex flex-col px-5 py-20 gap-20 sm:px-10 overflow-hidden lg:gap-40">
        <CardItem
          subtitle="VITRINE PRONTA PARA PWA"
          subhead="Possua tudo para sempre com um único pagamento."
          paragraph="Construa o negócio dos seus sonhos. Nunca se preocupe em pagar taxas mensais ou pagamentos recorrentes novamente."
          img="./card-1.png"
          primary={true}
        />
        <CardItem
          subtitle="PAGUE UMA VEZ, USE PARA SEMPRE"
          subhead="Facilite a venda dos seus produtos."
          paragraph="Venda seus produtos online e transforme suas contas de redes sociais em canais de marketing."
          img="./card-2.png"
          primary={false}
        />
      </div>
    </div>
  );
}

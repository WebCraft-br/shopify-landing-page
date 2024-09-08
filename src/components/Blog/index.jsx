import SubHead from "../Atoms/subhead"
import Paragraph from "../Atoms/paragraph"
import { Button } from "../Atoms/button";

export default function Blog() {
  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-20 flex flex-col gap-[50px] sm:px-10">
        {/* Conteúdo principal */}
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-end">
          <div className="flex flex-col gap-[18px] md:w-8/12 lg:w-auto">
            <SubHead>Leia nosso blog</SubHead>
            <Paragraph>Damos dicas acionáveis, estratégias e técnicas para expandir seu negócio.</Paragraph>
          </div>
          <Button buttonStyle="bg-primary-100 text-white">
            <div className="flex gap-2.5 items-center">
              Ver Tudo
              <img src="anchor-right.svg" alt="âncora" />
            </div>
          </Button>
        </div>

        {/* Itens do Blog */}
        <div className="grid gap-8 font-body md:grid-cols-2 lg:grid-cols-3">
          <section className="flex flex-col gap-6">
            <div className="overflow-hidden">
              <img className="w-full h-auto object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" src="/blog-1.png" alt="miniatura" />
            </div>
            <h3 className="text-[26px] font-medium text-black-100">Melhore a gestão de ecommerce do seu negócio</h3>
            <a className="underline text-black-100" href="#">Leia Mais</a>
          </section>
          <section className="flex flex-col gap-6">
            <div className="overflow-hidden">
              <img className="w-full h-auto object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" src="/blog-2.png" alt="miniatura" />
            </div>
            <h3 className="text-[26px] font-medium text-black-100">Hospedagem de Ecommerce: O que Procurar em um Host</h3>
            <a className="underline text-black-100 w-fit" href="#">Leia Mais</a>
          </section>
          <section className="hidden lg:flex flex-col gap-6">
            <div className="overflow-hidden">
              <img className="w-full h-auto object-cover hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer" src="/blog-1.png" alt="miniatura" />
            </div>
            <h3 className="text-[26px] font-medium text-black-100">Melhore a gestão de ecommerce do seu negócio</h3>
            <a className="underline text-black-100" href="#">Leia Mais</a>
          </section>
        </div>
      </div>
    </div>
  );
}

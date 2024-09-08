import { motion } from "framer-motion";
import MainButton from "../Atoms/button";
import Paragraph from "../Atoms/paragraph";
import SubHead from "../Atoms/subhead";

export default function Footer() {
  const footerContent = {
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  const footerImage = {
    visible: { y: 0, transition: { duration: 1 } },
    hidden: { y: -100 },
  };

  return (
    <div className="bg-primary-300">
      {/* Contato */}
      <div className="border-b border-white/15 relative overflow-hidden">
        <div className="container mx-auto max-w-[1344px]">
          <motion.section
            initial="hidden"
            whileInView="visible"
            variants={footerContent}
            className="px-5 py-10 flex flex-col items-center text-center sm:px-10"
          >
            <SubHead
              color="text-white"
              style="mb-[18px] sm:w-9/12 md:w-9/12 lg:w-6/12"
            >
              Nós cuidamos da instalação para você
            </SubHead>
            <Paragraph
              color="text-white/70"
              fontSize="text-sm"
              style="mb-[30px] sm:w-7/12 lg:w-5/12"
            >
              Não quer lidar com questões técnicas? Deixe-nos configurar o Uvodo
              para você, assim você pode começar a vender imediatamente.
            </Paragraph>
            <MainButton style="w-full sm:w-9/12 sm:w-fit lg:w-fit hover:bg-primary-300 hover:border-white hover:text-white transition-all duration-200 ease-in">
              FALE CONOSCO
            </MainButton>
          </motion.section>
        </div>

        {/* Eclipse */}
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 15, repeat: "Infinity", ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-1/4 -left-28"
          src="./eclipse-1.svg"
          alt="eclipse"
        />
        <motion.img
          initial="hidden"
          whileInView="visible"
          animate={{
            rotate: 360,
            transition: { duration: 30, repeat: "Infinity", ease: "easeInOut" },
          }}
          variants={footerImage}
          className="hidden lg:block absolute top-[20%] -right-24"
          src="./eclipse-2.svg"
          alt="eclipse"
        />
      </div>
      {/* Rodapé */}
      <footer className="container mx-auto max-w-[1344px]">
        <div className="px-5 py-10 flex flex-col sm:px-10 lg:grid grid-cols-3 lg:gap-y-32">
          <div className="lg:col-span-1">
            <img
              className="w-[125px] h-auto mb-10 lg:mb-0"
              src="shopify-footer.png"
              alt="shopify-footer"
            />
          </div>
          <div className="grid grid-cols-2 gap-9 font-body mb-[52px] md:grid-cols-4 lg:col-span-2 lg:mb-0">
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Recursos</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Encontrar um Parceiro
                </a>
                <a className="footer-link" href="#">
                  Torne-se um Parceiro
                </a>
                <a className="footer-link" href="#">
                  Afiliados
                </a>
                <a className="footer-link" href="#">
                  Ofertas de Parceiros
                </a>
                <a className="footer-link" href="#">
                  Exemplos de Lojas
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Empresa</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Líderes
                </a>
                <a className="footer-link" href="#">
                  Sobre Nós
                </a>
                <a className="footer-link" href="#">
                  Carreiras
                </a>
                <a className="footer-link" href="#">
                  Imprensa
                </a>
                <a className="footer-link" href="#">
                  Premiações
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Recursos</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Visão Geral
                </a>
                <a className="footer-link" href="#">
                  Artigos
                </a>
                <a className="footer-link" href="#">
                  Webinars
                </a>
                <a className="footer-link" href="#">
                  Eventos
                </a>
                <a className="footer-link" href="#">
                  E-commerce
                </a>
              </div>
            </div>
            <div>
              <h6 className="mb-5 font-medium text-lg text-white">Obtenha Ajuda</h6>
              <div className="flex flex-col gap-4 text-white/70 text-sm">
                <a className="footer-link" href="#">
                  Shopify Empresa
                </a>
                <a className="footer-link" href="#">
                  Base de Conhecimento
                </a>
                <a className="footer-link" href="#">
                  Vídeos de Contato
                </a>
                <a className="footer-link" href="#">
                  Suporte Técnico
                </a>
                <a className="footer-link" href="#">
                  Documentação API
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

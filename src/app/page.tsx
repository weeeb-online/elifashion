"use client";

import Image from "next/image";
import { ArrowRight, Baby, Mars, MessageCircle, Venus } from "lucide-react";
import { whatsapp } from "@/lib/whatsapp";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useReveal } from "@/hooks/use-reveal";

const collections = [
  {
    icon: Venus,
    name: "Feminino",
    image: "/images/feminino.png",
    alt: "Modelo com conjunto feminino claro",
    description: "Peças para acompanhar sua rotina com leveza e personalidade.",
  },
  {
    icon: Mars,
    name: "Masculino",
    image: "/images/masculino.png",
    alt: "Modelo com camisa e jaqueta masculina",
    description:
      "Escolhas versáteis para um visual seguro em qualquer ocasião.",
  },
  {
    icon: Baby,
    name: "Infantil",
    image: "/images/infantil.png",
    alt: "Criança com roupa infantil clara",
    description: "Conforto e charme para acompanhar cada descoberta.",
  },
];

export default function Home() {
  const revealRef = useReveal<HTMLDivElement>();

  return (
    <div ref={revealRef} className="min-h-screen">
      <div className="bg-secondary px-5 py-2.5 text-center text-[11px] font-medium tracking-[0.16em] text-[#f8ead3] sm:text-xs">
        MODA FEMININA, MASCULINA E INFANTIL NO CENTRO DE GUARACIABA DO NORTE
      </div>

      <Header />

      <main id="inicio">
        <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-12 lg:py-20">
          <div data-reveal className="order-2 lg:order-1">
            <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-primary">
              <span className="h-px w-8 bg-primary" /> ELEGÂNCIA PARA TODOS
            </div>
            <h1 className="max-w-xl text-4xl font-medium leading-[1.13] tracking-[-0.04em] sm:text-5xl lg:text-[64px]">
              Estilo para cada{" "}
              <span className="font-heading text-[1.28em] font-normal tracking-normal text-primary">
                momento
              </span>{" "}
              da sua vida.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#6d6257] sm:text-lg">
              Encontre peças para mulheres, homens e crianças em uma loja feita
              para vestir toda a família. Esperamos por você no centro de
              Guaraciaba do Norte.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#destaques"
                className="inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-medium text-white transition hover:bg-[#8d663b]"
              >
                Explore os destaques <ArrowRight />
              </a>
              <a
                href={whatsapp(
                  "Olá, Eli Fashion! Gostaria de conhecer as opções da loja.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-primary pb-1 text-sm font-medium text-[#6f5130] transition hover:text-primary"
              >
                Chame no WhatsApp
              </a>
            </div>
            <div className="mt-10 flex items-center gap-3 border-t border-[#e8dfd2] pt-5 text-xs tracking-[0.12em] text-[#807367]">
              <span className="h-2 w-2 rounded-full bg-primary" /> GUARACIABA DO
              NORTE · CEARÁ
            </div>
          </div>
          <div
            data-reveal
            className="order-1 relative overflow-hidden bg-[#e8dfd2] lg:order-2"
          >
            <Image
              src="/images/hero.png"
              alt="Modelos com looks femininos e masculinos em tons neutros"
              width={1536}
              height={1024}
              priority
              className="aspect-4/3 w-full object-cover lg:aspect-[5/5.1] lg:object-[65%_center]"
            />
            <div className="absolute bottom-5 left-5 bg-[#fcfaf6]/95 px-5 py-3 shadow-sm sm:bottom-7 sm:left-7">
              <span className="block font-heading text-3xl leading-none text-primary">
                Eli Fashion
              </span>
              <span className="mt-1 block text-[10px] tracking-[0.18em] text-[#604d39]">
                MODA PARA TODA A FAMÍLIA
              </span>
            </div>
          </div>
        </section>

        <section
          id="colecoes"
          className="border-y border-[#e8dfd2] bg-[#f5f0e8] px-5 py-12 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div
              data-reveal
              className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
            >
              <div>
                <p className="text-[11px] font-semibold tracking-[0.3em] text-primary">
                  PARA CADA ESTILO
                </p>
                <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
                  Encontre sua coleção
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#786b5f]">
                Do look do dia a dia aos momentos especiais, descubra opções
                para toda a família.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {collections.map(({ icon: Icon, name }, index) => (
                <a
                  key={name}
                  href={`#destaque-${index}`}
                  data-reveal
                  className="group flex items-center justify-between border border-[#e3d8c8] bg-[#fcfaf6] px-6 py-6 transition hover:border-[#b99062] hover:bg-white"
                >
                  <div>
                    <span className="text-[10px] tracking-[0.22em] text-[#ad8c65]">
                      0{index + 1} / COLEÇÃO
                    </span>
                    <h3 className="mt-2 text-xl font-medium">{name}</h3>
                  </div>
                  <span className="text-primary transition group-hover:translate-x-1">
                    <Icon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="destaques"
          className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
        >
          <div data-reveal className="mb-9 text-center">
            <p className="text-[11px] font-semibold tracking-[0.3em] text-primary">
              INSPIRAÇÃO PARA SE VESTIR
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
              Destaques da Eli Fashion
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#786b5f]">
              Um olhar sobre os estilos que você pode encontrar por aqui. Fale
              com a gente para saber sobre as peças disponíveis.
            </p>
          </div>
          <div className="grid gap-7 md:grid-cols-3">
            {collections.map((item, index) => (
              <article
                id={`destaque-${index}`}
                key={item.name}
                data-reveal
                className="scroll-mt-8"
              >
                <div className="overflow-hidden bg-[#eee6db]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1024}
                    height={1536}
                    className="aspect-4/5 w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                </div>
                <div className="border-b border-[#e8dfd2] py-5">
                  <p className="text-[10px] font-semibold tracking-[0.2em] text-primary">
                    MODA {item.name.toUpperCase()}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#786b5f]">
                    {item.description}
                  </p>
                </div>
                <a
                  href={whatsapp(
                    `Olá, Eli Fashion! Gostaria de saber mais sobre as roupas da coleção ${item.name.toLowerCase()}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#805b35] transition hover:text-primary"
                >
                  Pergunte sobre as peças <ArrowRight />
                </a>
              </article>
            ))}
          </div>
          <p data-reveal className="mt-8 text-center text-xs text-[#93877b]">
            Imagens ilustrativas. Consulte a disponibilidade das peças pelo
            WhatsApp.
          </p>
        </section>

        <section
          id="sobre"
          className="bg-[#eae0d2] px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
            <div data-reveal>
              <p className="text-[11px] font-semibold tracking-[0.3em] text-[#906b41]">
                PERTO DE VOCÊ
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
                Sua próxima escolha está no coração de Guaraciaba do Norte.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-8 text-[#6d6257]">
                A Eli Fashion fica no centro da cidade. Venha conhecer a loja ou
                mande uma mensagem para tirar dúvidas sobre modelos, tamanhos e
                disponibilidade.
              </p>
              <a
                href={whatsapp(
                  "Olá, Eli Fashion! Onde fica a loja no centro de Guaraciaba do Norte?",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-3 border border-[#8d663b] px-6 py-4 text-sm font-medium text-[#72512f] transition hover:bg-[#8d663b] hover:text-white"
              >
                Pergunte como chegar <ArrowRight />
              </a>
            </div>
            <div
              data-reveal
              className="border border-[#cdbda8] bg-[#fcfaf6] p-7 sm:p-10"
            >
              <span className="font-heading text-5xl text-primary">
                Eli Fashion
              </span>
              <div className="mt-6 h-px bg-[#ded2c2]" />
              <p className="mt-6 text-[10px] font-semibold tracking-[0.25em] text-primary">
                NOSSA LOCALIZAÇÃO
              </p>
              <p className="mt-2 text-xl font-medium">
                Centro de Guaraciaba do Norte
              </p>
              <p className="mt-1 text-sm text-[#786b5f]">
                Guaraciaba do Norte · Ceará
              </p>
              <div className="mt-6 h-px bg-[#ded2c2]" />
              <p className="mt-6 text-[10px] font-semibold tracking-[0.25em] text-primary">
                ATENDIMENTO
              </p>
              <a
                href={whatsapp(
                  "Olá, Eli Fashion! Gostaria de tirar uma dúvida.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-xl font-medium transition hover:text-primary"
              >
                +55 88 9767-0377
              </a>
            </div>
          </div>
        </section>

        <section
          data-reveal
          className="bg-secondary px-5 py-16 text-center text-[#f8f3eb] sm:px-8 lg:px-12 lg:py-20"
        >
          <p className="text-[11px] font-semibold tracking-[0.3em] text-[#c6a273]">
            ESTAMOS A UM CLIQUE DE DISTÂNCIA
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium leading-tight sm:text-4xl">
            Gostou de algum estilo? Vamos conversar.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#d7cbbd]">
            Tire suas dúvidas e descubra as opções disponíveis diretamente com a
            nossa equipe.
          </p>
          <a
            href={whatsapp(
              "Olá, Eli Fashion! Gostaria de falar sobre as roupas da loja.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 bg-[#c49a68] px-7 py-4 text-sm font-semibold text-secondary transition hover:bg-[#dfb987]"
          >
            Conversar no WhatsApp <MessageCircle />
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

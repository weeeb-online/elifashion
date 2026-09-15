import { whatsapp } from "@/lib/whatsapp";
import { ArrowRight } from "lucide-react";

export const Header = () => (
  <header className="border-b border-[#e8dfd2]">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
      <a
        href="#inicio"
        aria-label="Eli Fashion, voltar ao início"
        className="shrink-0 font-heading text-[37px] leading-none text-[#9c7444] sm:text-[43px]"
      >
        Eli Fashion
      </a>
      <nav
        aria-label="Navegação principal"
        className="hidden items-center gap-8 text-[13px] font-medium text-[#594e43] md:flex"
      >
        <a href="#colecoes" className="transition hover:text-primary">
          Coleções
        </a>
        <a href="#destaques" className="transition hover:text-primary">
          Destaques
        </a>
        <a href="#sobre" className="transition hover:text-primary">
          Nossa loja
        </a>
      </nav>
      <a
        href={whatsapp("Olá, Eli Fashion! Gostaria de falar com a loja.")}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 border border-primary px-4 py-2.5 text-xs font-medium text-[#815d36] transition hover:bg-primary hover:text-white sm:px-5 sm:text-sm"
      >
        Fale conosco <ArrowRight />
      </a>
    </div>
  </header>
);

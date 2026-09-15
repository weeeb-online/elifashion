import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { whatsapp } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-[#fcfaf6] text-secondary">
      <header className="border-b border-[#e8dfd2] px-5 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="font-heading text-[39px] leading-none text-primary sm:text-[43px]"
          >
            Eli Fashion
          </Link>
          <span className="hidden text-[11px] font-medium tracking-[0.18em] text-[#8d7864] sm:block">
            MODA PARA TODA A FAMÍLIA
          </span>
        </div>
      </header>

      <section className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center gap-3 text-[11px] font-semibold tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />
          PÁGINA NÃO ENCONTRADA
          <span className="h-px w-8 bg-primary" />
        </div>
        <div className="relative">
          <span
            aria-hidden="true"
            className="block text-[128px] font-medium leading-none tracking-widest text-[#e4d5c1] sm:text-[190px]"
          >
            404
          </span>
          <span
            aria-hidden="true"
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-heading text-5xl text-primary sm:text-6xl"
          >
            Ops!
          </span>
        </div>
        <h1 className="mt-10 max-w-xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-4xl">
          Parece que essa página saiu de cena.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-[#786b5f] sm:text-base">
          O endereço pode ter mudado ou não estar disponível. Volte para a
          vitrine da Eli Fashion ou fale com a gente para encontrar o que
          procura.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-w-56 items-center justify-center gap-3 bg-primary px-6 py-4 text-sm font-medium text-white transition hover:bg-[#8d663b]"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Voltar ao início
          </Link>
          <a
            href={whatsapp(
              "Olá, Eli Fashion! Preciso de ajuda para encontrar uma página no site.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-56 items-center justify-center gap-3 border border-primary px-6 py-4 text-sm font-medium text-[#805b35] transition hover:bg-[#f5f0e8]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Falar no WhatsApp
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#e8dfd2] px-5 py-6 text-center text-xs text-[#807367] sm:px-8 lg:px-12">
        Eli Fashion · Centro de Guaraciaba do Norte, CE
      </footer>
    </main>
  );
}

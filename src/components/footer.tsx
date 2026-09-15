import { whatsapp } from "@/lib/whatsapp";

export const Footer = () => (
  <footer className="bg-[#fcfaf6] px-5 py-8 sm:px-8 lg:px-12">
    <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span className="font-heading text-3xl text-primary">Eli Fashion</span>
        <p className="mt-1 text-xs text-[#807367]">
          Moda feminina, masculina e infantil · Guaraciaba do Norte, CE
        </p>
      </div>
      <a
        href={whatsapp("Olá, Eli Fashion! Gostaria de entrar em contato.")}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-[#805b35] transition hover:text-primary"
      >
        Fale com a loja ↗
      </a>
    </div>
    <div className="mx-auto mt-6 max-w-7xl border-t border-[#e8dfd2] pt-5 text-center text-xs text-[#807367] sm:text-right">
      Desenvolvido por{" "}
      <a
        href="https://gabriel.weeeb.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-[#805b35] underline decoration-[#c49a68] underline-offset-4 transition hover:text-primary"
      >
        Gabriel Braga
      </a>
    </div>
  </footer>
);

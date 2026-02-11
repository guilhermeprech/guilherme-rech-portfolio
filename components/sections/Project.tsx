import Image from "next/image";

export default function Project() {
  return (
    <section id="projetos" className="bg-[#0F1115] text-[#F5F7FA]">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Projetos
        </h2>

        <div className="mt-12 overflow-hidden rounded-2xl border border-[#1C1F26] bg-white/[0.02] transition hover:bg-white/[0.04]">
          <div className="relative aspect-[16/9] w-full border-b border-[#1C1F26] bg-black/20">
            <Image
              src="/projects/guilhas.png"
              alt="Projeto Guilhas Carnes & Assados"
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          <div className="p-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Guilhas Carnes &amp; Assados</h3>
              <p className="text-sm text-[#9AA3AE]">
                Site e sistema de pedidos digitais.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <p className="text-sm text-[#9AA3AE]">– Desenvolvimento sob medida</p>
              <p className="text-sm text-[#9AA3AE]">– Integração com WhatsApp</p>
              <p className="text-sm text-[#9AA3AE]">– Foco em conversão</p>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://guilhascarnes.com.br"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#3A6FF8] px-5 py-2.5 text-xs font-semibold text-white transition hover:brightness-110 active:brightness-95"
              >
                Acessar projeto
              </a>

              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-xl border border-[#1C1F26] px-5 py-2.5 text-xs font-semibold text-[#F5F7FA] transition hover:bg-white/5"
              >
                Quero algo assim
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
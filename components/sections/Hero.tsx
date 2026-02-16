export default function Hero() {
    return (
      <section className="relative overflow-hidden bg-[#0F1115] text-[#F5F7FA]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(58,111,248,0.20) 0%, rgba(15,17,21,0) 62%)",
          }}
        />
  
        <div className="mx-auto max-w-5xl px-6 pt-28 pb-20 sm:pt-32 sm:pb-24">
          <p className="text-sm font-medium tracking-[0.18em] text-[#9AA3AE]">
            SITES • SISTEMAS • APLICATIVOS
          </p>
  
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Guilherme Rech
          </h1>
  
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#9AA3AE] sm:text-lg">
            Desenvolvimento de soluções digitais sob medida — com foco em clareza,
            performance e resultado.
          </p>
  
          {/* subtle divider */}
          <div className="mt-10 h-px w-full max-w-2xl bg-[#1C1F26]" />
  
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-xl bg-[#3A6FF8] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 active:brightness-95"
            >
              Vamos conversar
            </a>
  
            <a
              href="#projetos"
              className="inline-flex items-center justify-center rounded-xl border border-[#1C1F26] bg-transparent px-6 py-3 text-sm font-semibold text-[#F5F7FA] transition hover:bg-white/5"
            >
              Ver projetos
            </a>
          </div>
        </div>
      </section>
    );
  }
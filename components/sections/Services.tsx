const services = [
    {
      title: "Sites Profissionais",
      desc: "Presença digital moderna, rápida e focada em conversão.",
    },
    {
      title: "Sistemas Web",
      desc: "Soluções sob medida para organizar processos e ganhar eficiência.",
    },
    {
      title: "Aplicativos",
      desc: "Aplicativos personalizados para negócios que precisam ir além do site.",
    },
  ];
  
  export default function Services() {
    return (
      <section
        id="servicos"
        className="bg-[#0F1115] text-[#F5F7FA]"
      >
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Serviços
            </h2>
            <p className="hidden text-sm text-[#9AA3AE] sm:block">
              Projetos sob medida
            </p>
          </div>
  
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative rounded-2xl border border-[#1C1F26] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2A2F3A] hover:bg-white/[0.04]"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 h-1 w-full rounded-t-2xl bg-transparent transition-all duration-300 group-hover:bg-[#3A6FF8]" />
  
                <h3 className="text-base font-semibold tracking-tight">
                  {s.title}
                </h3>
  
                <p className="mt-4 text-sm leading-relaxed text-[#9AA3AE]">
                  {s.desc}
                </p>
  
                <div className="mt-8 h-px w-full bg-[#1C1F26]" />
  
                <p className="mt-5 text-xs text-[#9AA3AE]">
                  Escopo, prazo e investimento definidos conforme necessidade.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
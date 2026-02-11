const steps = [
    "Entendimento do negócio",
    "Planejamento da solução",
    "Desenvolvimento",
    "Ajustes finais",
    "Entrega e suporte",
  ];
  
  export default function Process() {
    return (
      <section className="bg-[#0F1115] text-[#F5F7FA]">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Processo
          </h2>
  
          <div className="mt-10 grid gap-3">
            {steps.map((t, i) => (
              <div
                key={t}
                className="flex items-center justify-between rounded-2xl border border-[#1C1F26] bg-white/[0.02] px-6 py-5"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#1C1F26] bg-white/[0.02] text-sm text-[#9AA3AE]">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium">{t}</p>
                </div>
                <span className="text-xs text-[#9AA3AE]">—</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
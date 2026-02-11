export default function CTA() {
    return (
      <section
        id="contato"
        className="bg-[#0F1115] text-[#F5F7FA]"
      >
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="rounded-2xl border border-[#1C1F26] bg-white/[0.02] p-8 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Vamos conversar sobre o seu projeto.
            </h2>
  
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#9AA3AE]">
              Me conte o que você precisa e eu retorno com uma proposta objetiva,
              com escopo e próximos passos.
            </p>
  
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/5554991332500"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#3A6FF8] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 active:brightness-95"
              >
                Chamar no WhatsApp
              </a>
  
              <a
                href="mailto:guilhermepasqualirech@gmail.com"
                className="inline-flex items-center justify-center rounded-xl border border-[#1C1F26] bg-transparent px-6 py-3 text-sm font-semibold text-[#F5F7FA] transition hover:bg-white/5"
              >
                Enviar e-mail
              </a>
            </div>
  
            <p className="mt-6 text-xs text-[#9AA3AE]">
              Atendimento direto • Caxias do Sul e região • Projetos remotos
            </p>
          </div>
        </div>
      </section>
    );
  }
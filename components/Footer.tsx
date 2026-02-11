export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="bg-[#0F1115] text-[#9AA3AE]">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="h-px w-full bg-[#1C1F26]" />
          <div className="mt-6 flex flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} Guilherme Rech. Todos os direitos reservados.</p>
            <p>Desenvolvimento de soluções digitais sob medida.</p>
          </div>
        </div>
      </footer>
    );
  }
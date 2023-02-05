import { Container } from "./Container";

export function Imprint() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">Impressum</h1>

      <div className="mt-20 text-lg">
        <strong>ascenue GmbH</strong>
        <p>Christaweg 42</p>
        <p>79114 Freiburg, Germany</p>
        <div className="flex justify-center gap-x-4">
          <p><a href="mailto:info@ascenue.com" class="text-slate-500 hover:text-slate-700">info@ascenue.com</a></p>
          <p><a href="tel:0049761456262133" class="text-slate-500 hover:text-slate-700">+49 761 / 456262 133</a></p>
        </div>
        <p><a href="https://www.ascenue.com" class="text-slate-500 hover:text-slate-700">www.ascenue.com</a></p>
      </div>
      <div className="mt-12 text-base">
        <p>Geschäftsführer Tom Jordi Ruesch</p>
        <div className="flex justify-center gap-x-4">
          <p>USt-Id. DE279844848</p>
          <p>HRB-707571</p>
          <p>Amtsgericht Freiburg</p>
        </div>
      </div>
      
    </Container>
  )
}
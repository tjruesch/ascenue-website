import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Wie lange dauert es, einen Online-Shop zu erstellen?',
      answer:
        'Das hängt ganz von Ihren Anforderungen ab. Wir bieten eine Reihe von einfachen Checkouts an, die Sie in wenigen Minuten einrichten können. Normalerweise entwicklen wir aber eine individuelle E-Commerce-Lösung gemeinsam mit unseren Kunden. Diese Lösungen sind dann auch komplett an Ihre Bedürfnisse angepasst.',
    },
    {
      question: 'Welche Zahlungsmethoden werden unterstützt?',
      answer: 'Wir verwenden vorzugsweise Mollie als Zahlungsanbieter. Mollie ist eine europäische Zahlungsplattform, die eine Vielzahl von Zahlungsmethoden unterstützt, darunter Sofortüberweisung, Paypal, Klarna Ratenzahlung und Kauf auf Rechnung, Kreditkarte und viele weitere.',
    },
  ],
  [
    {
      question: 'Sind die Kosten für die Zahlungsanbieter bereits im Angebotspreis enthalten?',
      answer:
        'Nein, wir sind eine Software-Agentur und kein Zahlungsanbieter. Die Kosten für den Zahlungsanbieter werden direkt über Sie abgerechnet. Selbstverständlich unterstützen wir Sie im Setup-Prozess bei der Einrichtung Ihres Zahlungskontos.',
    },
    {
      question: 'Ich habe bereits einen Zahlungsanbieter und möchte nur meinen Checkout ändern. Geht das?',
      answer:
        'Wir sind als Software-Agentur flexibel und setzen gerne Ihre individuellen Anforderungen um. Wir können Ihren Checkout auch mit Ihrem bestehenden Zahlungsanbieter verbinden.',
    },
  ],
  [
    {
      question:
        'Was ist der Unterschied zwischen ascenue und anderen E-Commerce-Systemen?',
      answer:
        'ascenue ist eine Software-Agentur, die sich auf E-Commerce spezialisiert hat. Wir entwickeln individuelle E-Commerce-Lösungen für unsere Kunden auf basis eines flexiblen E-Commerce-Frameworks, den wir selbst entwicklet haben. Damit können wir insbesondere für kleine und mittlere Unternehmen individuelle Lösungen in kürzester Zeit schaffen.',
    },
    {
      question:
        'Was ist der Unterschied zwischen ascenue und Stripe?',
      answer:
        'Stripe ist ein Zahlungsanbieter, der eine Vielzahl von Zahlungsmethoden unterstützt. Wir sind eine Software-Agentur, die sich auf E-Commerce spezialisiert hat. Für uns sind Zahlungsanbieter wie Stripe Tools um Ihren Checkout zu erstellen.',
    },
    {
      question:
        'Was ist der Unterschied zwischen ascenue und Woocommerce?',
      answer:
        'Woocommerce ist ein E-Commerce-System, das auf Wordpress basiert. Wir sind eine Software-Agentur, die sich auf E-Commerce spezialisiert hat. Wir entwickeln sozusagen Ihr Woocommerce nach Maß.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Häufig gestellte Fragen
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Wir haben die wichtigsten Fragen für Sie zusammengestellt. Sollten Sie hier keine Antwort finden, kontaktieren Sie uns gerne.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

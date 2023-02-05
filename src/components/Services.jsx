import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

function CheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 flex-none">
    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
  </svg>
  )
}

function PlusIcon({ className }) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 flex-none">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function Plan({ name, price, description, href, features, addons, featured = false }) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first bg-[#fec900] py-8 lg:order-none' : 'lg:py-8'
      )}
    >
      <h3 className={clsx(
          "mt-5 font-display text-lg",
          featured ? 'text-slate-900' : 'text-white'
        )}>{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-slate-900' : 'text-white'
        )}
      >
        {description}
      </p>
      <p className={clsx(
          "order-first font-display text-5xl font-light tracking-tight",
          featured ? 'text-slate-900' : 'text-white'
        )}>
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-slate-900' : 'text-white'
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-slate-900' : 'text-white'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
        {addons && addons.map((addon) => (
          <li key={addon} className="flex">
            <PlusIcon className='text-white' />
            <span className="ml-4">{addon}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'solid'}
        color={featured ? 'slate' : 'white'}
        className="mt-8"
        aria-label={`Kontaktiere uns`}
      >
        Kontakt
      </Button>
    </section>
  )
}

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="bg-slate-900 py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-[#fec900]/70" />
              <span className="relative">Unsere Services,</span>
            </span>{' '}
            für Ihr Unternehmen
          </h2>
          <p className="mt-4 text-lg text-white">
            Egal ob B2B, B2C oder B2B2C, wir haben die passende Lösung für Sie.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Individuelles Branding"
            price="Hosted Checkout"
            description="Ein wunderschöner und funktionaler Checkout für Ihr Unternehmen."
            href="/kontakt"
            features={[
              'Individuelles Design',
              'Einmalkäufe und Abonnements',
              'Eigene Domain',
              'Lokalisierung und Mehrsprachigkeit inklusive',
              'Am besten in Verbindung mit Headless E-Commerce',
            ]}
          />
          <Plan
            featured
            name="Komplette E-Commerce Lösung"
            price="Headless E-Commerce"
            description="Die Perfekte Ergänzung für Unternehmen mit komplexeren Businessmodellen."
            href="/kontakt"
            features={[
              'Moderne Zahlungsmethoden inkl. PayPal, Kreditkarte und Sofortüberweisung',
              'Warenkörbe und Reminder',
              'Einmalkäufe und Abonnements',
              'Coupons und Rabatte',
              'Transparentes Pricing',
            ]}
            addons={[
              'Digitaler Produkt-Zugang und Downloads',
              'Online Angebote und Rechnungen',
            ]}
          />
          <Plan
            name="Beratung und Entwicklung"
            price="Custom Development"
            description="Individuelle Lösungen für Ihr Online-Geschäft."
            href="/kontakt"
            features={[
              'Individuelle Entwicklung von E-Commerce Lösungen und Webapps',
              'Individuelle Preisgestaltung und Preisrechner',
              'Priorität bei Supportanfragen und dedizierte Ansprechpartner',
              'Beratung und Entwicklung von E-Commerce Strategien',
            ]}
          />
        </div>
      </Container>
    </section>
  )
}

import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="/impressum"
              className="mt-6 text-sm text-slate-500 sm:mt-0 hover:text-slate-700"
              aria-label="TaxPal on Twitter"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="mt-6 text-sm text-slate-500 sm:mt-0 hover:text-slate-700"
              aria-label="TaxPal on GitHub"
            >
              Datenschutz
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} ascenue GmbH. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}

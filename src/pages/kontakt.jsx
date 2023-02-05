import Head from 'next/head'
import Link from 'next/link'

import { ContactLayout } from '@/components/ContactLayout'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'

export default function Kontakt() {
  return (
    <>
      <Head>
        <title>Kontakt - ascenue</title>
      </Head>
      <ContactLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Sie wollen mit uns zusammenarbeiten?
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Wir sind gespannt auf Ihre Ideen!
            </p>
          </div>
        </div>
        <form
          className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2"
        >
          <TextField
            label="Ihr Name"
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
          />
          <TextField
            label="Ihr Unternehmen"
            id="company_name"
            name="company_name"
            type="text"
            autoComplete="company-name"
            required
          />
          <TextField
            className="col-span-full"
            label="E-Mail"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <SelectField
            className="col-span-full"
            label="In welcher Branche sind Sie aktiv?"
            id="referral_source"
            name="referral_source"
          >
            <option>Business Services</option>
            <option>SaaS / Online Services</option>
            <option>Media und Digital Publishing</option>
            <option>B2B - Andere</option>
            <option>B2C - Andere</option>
          </SelectField>
        </form>
      </ContactLayout>
    </>
  )
}

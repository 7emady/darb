import Layout, { FadeIn } from '../components/Layout';
import { getDictionary } from '../data/site';

export default function Contact({ locale }) {
  const t = getDictionary(locale);
  const title = locale === 'ar' ? 'تواصل معنا | درب التحدي' : 'Contact | Darb Al-Tahadi';

  return (
    <Layout title={title} description={t.contactText}>
      <section className="section-padding bg-sand">
        <div className="container-premium grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <FadeIn>
            <span className="font-black text-gold">{t.contactTitle}</span>
            <h1 className="mt-4 text-5xl font-black text-navy md:text-6xl">{t.contactText}</h1>
            <div className="mt-8 rounded-3xl bg-navy p-7 text-white">
              <p>info@darb-altahadi.sa</p>
              <p className="ltr-only mt-2">+966535815310</p>
              <p className="mt-2">{locale === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</p>
            </div>
          </FadeIn>
          <FadeIn className="card-premium">
            <form className="grid gap-4" method="post" action="/api/contact">
              <input className="input" name="name" placeholder={t.form[0]} required />
              <input className="input" name="email" type="email" placeholder={t.form[1]} required />
              <textarea className="input min-h-40" name="message" placeholder={t.form[2]} required />
              <button className="btn-primary" type="submit">{t.form[3]}</button>
            </form>
            <div className="mt-6 h-64 overflow-hidden rounded-3xl bg-slate-200">
              <iframe title="map" className="h-full w-full" loading="lazy" src="https://www.google.com/maps?q=Saudi%20Arabia&output=embed" />
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}

export function getStaticProps({ locale }) {
  return { props: { locale: locale || 'ar' } };
}

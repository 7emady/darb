import Layout, { FadeIn } from '../components/Layout';
import { getDictionary } from '../data/site';

export default function Branches({ locale }) {
  const t = getDictionary(locale);
  return <Layout title={locale === 'ar' ? 'الأفرع | درب التحدي' : 'Branches | Darb Al-Tahadi'} description={t.branchesText}>
    <section className="section-padding bg-sand"><div className="container-premium"><FadeIn className="max-w-3xl"><span className="font-black text-gold">{t.branchesTitle}</span><h1 className="mt-4 text-5xl font-black text-navy md:text-7xl">{t.branchesText}</h1></FadeIn><div className="mt-12 grid gap-6 md:grid-cols-2">{t.branches.map(([country, address, phone, email]) => <FadeIn key={country} className="card-premium"><h2 className="text-3xl font-black text-navy">{country}</h2><p className="mt-4 text-slate-600">{address}</p><p className="mt-4 ltr-only font-black text-gold">{phone}</p><p className="text-slate-600">{email}</p></FadeIn>)}</div></div></section>
  </Layout>;
}
export function getStaticProps({ locale }) { return { props: { locale: locale || 'ar' } }; }

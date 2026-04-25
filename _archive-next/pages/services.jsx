import Layout from '../components/Layout';
import { Services, Process, Certificates, Approvals } from '../components/Sections';
import { getDictionary } from '../data/site';

export default function ServicesPage({ locale }) {
  const t = getDictionary(locale);
  const isAr = locale === 'ar';
  return (
    <Layout title={isAr ? 'الخدمات | درب التحدي' : 'Services | Darb Al-Tahadi'} description={t.servicesText}>
      <section className="section-padding bg-sand">
        <div className="container-premium">
          <span className="font-black text-orange">{isAr ? 'خدماتنا' : 'Our services'}</span>
          <h1 className="mt-4 max-w-4xl text-5xl font-black text-navy md:text-7xl">{t.servicesTitle}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600">{t.servicesText}</p>
        </div>
      </section>
      <Services t={t} locale={locale} />
      <Certificates t={t} />
      <Approvals t={t} />
      <Process t={t} />
    </Layout>
  );
}

export function getStaticProps({ locale }) {
  return { props: { locale: locale || 'ar' } };
}

import Layout from '../components/Layout';
import { AboutHome, WhyUs, Process } from '../components/Sections';
import { getDictionary } from '../data/site';

export default function About({ locale }) {
  const t = getDictionary(locale);
  const isAr = locale === 'ar';
  return (
    <Layout title={isAr ? 'من نحن | درب التحدي' : 'About | Darb Al-Tahadi'} description={t.footerText}>
      <section className="section-padding bg-navy text-white">
        <div className="container-premium max-w-4xl">
          <span className="font-black text-orange">{isAr ? 'من نحن' : 'About us'}</span>
          <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">{t.aboutTitle}</h1>
          <p className="mt-6 text-xl leading-9 text-white/70">{t.aboutDesc}</p>
        </div>
      </section>
      <AboutHome t={t} />
      <WhyUs t={t} />
      <Process t={t} />
    </Layout>
  );
}

export function getStaticProps({ locale }) {
  return { props: { locale: locale || 'ar' } };
}

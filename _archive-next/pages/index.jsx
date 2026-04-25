import Layout from '../components/Layout';
import { Hero, TrustBar, AnimatedStats, AboutHome, WhyUs, Services, Projects, Partners, Insights, Certificates, Approvals, ContactHome } from '../components/Sections';
import { getDictionary } from '../data/site';

export default function Home({ locale }) {
  const t = getDictionary(locale);
  const title = locale === 'ar'
    ? 'درب التحدي | استشارات إدارية وتحول رقمي'
    : 'Darb Al-Tahadi | Management Consulting';

  return (
    <Layout title={title} description={t.heroText}>
      <Hero t={t} locale={locale} />
      <TrustBar t={t} />
      <AnimatedStats t={t} />
      <AboutHome t={t} />
      <WhyUs t={t} />
      <Services t={t} locale={locale} />
      <Projects t={t} />
      <Partners t={t} />
      <Insights t={t} locale={locale} />
      <Certificates t={t} />
      <Approvals t={t} />
      <ContactHome t={t} locale={locale} />
    </Layout>
  );
}

export function getStaticProps({ locale }) {
  return { props: { locale: locale || 'ar' } };
}

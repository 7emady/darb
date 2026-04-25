import Layout, { FadeIn } from '../components/Layout';
import { getDictionary } from '../data/site';

export default function Blog({ locale }) {
  const t = getDictionary(locale);
  const isAr = locale === 'ar';
  return <Layout title={isAr ? 'المدونة | درب التحدي' : 'Blog | Darb Al-Tahadi'} description={t.insightsTitle}>
    <section className="section-padding bg-white"><div className="container-premium"><FadeIn className="mb-12"><h1 className="text-5xl font-black text-navy md:text-7xl">{t.insightsTitle}</h1><p className="mt-5 max-w-2xl text-xl text-slate-600">{isAr ? 'مقالات ورؤى عملية في الاستراتيجية والتحول الرقمي وتطوير الأعمال.' : 'Practical insights on strategy, digital transformation, and business growth.'}</p></FadeIn><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{t.insights.map(([articleTitle, text]) => <FadeIn key={articleTitle} className="card-premium"><span className="text-sm font-black text-gold">{isAr ? 'مقال' : 'ARTICLE'}</span><h2 className="mt-4 text-2xl font-black text-navy">{articleTitle}</h2><p className="mt-3 text-slate-600">{text}</p></FadeIn>)}</div></div></section>
  </Layout>;
}
export function getStaticProps({ locale }) { return { props: { locale: locale || 'ar' } }; }

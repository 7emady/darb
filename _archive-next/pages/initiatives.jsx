import Layout, { FadeIn } from '../components/Layout';
import { getDictionary } from '../data/site';

export default function Initiatives({ locale }) {
  const t = getDictionary(locale);
  const isAr = locale === 'ar';
  return <Layout title={isAr ? 'المبادرات | درب التحدي' : 'Initiatives | Darb Al-Tahadi'} description={isAr ? 'مبادرات معرفية واستشارية للمنشآت.' : 'Knowledge and advisory initiatives for organizations.'}>
    <section className="section-padding bg-white"><div className="container-premium"><FadeIn className="mb-12 max-w-3xl"><span className="font-black text-gold">{isAr ? 'المبادرات' : 'Initiatives'}</span><h1 className="mt-4 text-5xl font-black text-navy md:text-7xl">{isAr ? 'مبادرات عملية ترفع جاهزية المنشآت' : 'Practical initiatives that raise organizational readiness'}</h1></FadeIn><div className="grid gap-6 md:grid-cols-3">{t.initiatives.map(([title, text], index) => <FadeIn key={title} className="card-premium"><div className="mb-5 text-5xl font-black text-gold">0{index + 1}</div><h2 className="text-2xl font-black text-navy">{title}</h2><p className="mt-3 text-slate-600">{text}</p></FadeIn>)}</div></div></section>
  </Layout>;
}
export function getStaticProps({ locale }) { return { props: { locale: locale || 'ar' } }; }

import Layout, { FadeIn } from '../components/Layout';
import { getDictionary } from '../data/site';

export default function Terms({ locale }) {
  const t = getDictionary(locale);
  const isAr = locale === 'ar';
  const items = isAr ? ['استخدام الموقع يعني الموافقة على الشروط العامة.', 'المحتوى المعروض تعريفي ولا يعد عرضاً تعاقدياً نهائياً.', 'يتم تحديد نطاق الخدمات والتسليمات في عرض مستقل لكل مشروع.', 'يمنع نسخ محتوى الموقع أو استخدامه دون إذن مكتوب.'] : ['Using the website means accepting the general terms.', 'Website content is informational and not a final contractual offer.', 'Service scope and deliverables are defined in a separate proposal for each project.', 'Website content may not be copied or reused without written permission.'];
  return <Layout title={isAr ? 'الشروط والأحكام | درب التحدي' : 'Terms | Darb Al-Tahadi'} description={t.footerText}><section className="section-padding bg-sand"><div className="container-premium max-w-4xl"><FadeIn><h1 className="text-5xl font-black text-navy md:text-7xl">{isAr ? 'الشروط والأحكام' : 'Terms and conditions'}</h1></FadeIn><div className="mt-10 grid gap-4">{items.map((item, index) => <FadeIn key={item} className="card-premium"><b className="text-gold">0{index + 1}</b><p className="mt-3 text-lg text-slate-700">{item}</p></FadeIn>)}</div></div></section></Layout>;
}
export function getStaticProps({ locale }) { return { props: { locale: locale || 'ar' } }; }

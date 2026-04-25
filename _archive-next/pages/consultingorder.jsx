import Layout, { FadeIn } from '../components/Layout';
import { getDictionary } from '../data/site';

export default function ConsultingOrder({ locale }) {
  const t = getDictionary(locale);
  const isAr = locale === 'ar';
  return <Layout title={isAr ? 'طلب استشارة | درب التحدي' : 'Request Advisory | Darb Al-Tahadi'} description={t.contactText}>
    <section className="section-padding bg-navy text-white"><div className="container-premium grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><FadeIn><span className="font-black text-orange">{t.cta}</span><h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">{isAr ? 'احجز جلسة تشخيص أولية' : 'Book an initial diagnostic session'}</h1><p className="mt-6 text-xl leading-9 text-white/70">{isAr ? 'شاركنا التحدي الحالي وسنقترح المسار الأنسب: استراتيجية، تشغيل، تحول رقمي، أو تحسين أداء.' : 'Share your current challenge and we will recommend the right path: strategy, operations, digital transformation, or performance improvement.'}</p></FadeIn><FadeIn className="rounded-[2rem] bg-white p-7 text-ink shadow-premium"><form className="grid gap-4" method="post" action="/api/contact"><input className="input" name="name" placeholder={t.form[0]} required /><input className="input" name="company" placeholder={isAr ? 'اسم المنشأة' : 'Company name'} /><input className="input" name="email" type="email" placeholder={t.form[1]} required /><select className="input" name="service"><option>{isAr ? 'اختر نوع الخدمة' : 'Select service'}</option>{t.detailedServices.map(({ title }) => <option key={title}>{title}</option>)}</select><textarea className="input min-h-40" name="message" placeholder={isAr ? 'صف التحدي أو الهدف المطلوب' : 'Describe the challenge or desired outcome'} required /><button className="btn-primary" type="submit">{t.form[3]}</button></form></FadeIn></div></section>
  </Layout>;
}
export function getStaticProps({ locale }) { return { props: { locale: locale || 'ar' } }; }


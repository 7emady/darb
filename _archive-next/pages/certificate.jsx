import Layout, { FadeIn } from '../components/Layout';
import { getDictionary } from '../data/site';

export default function Certificate({ locale }) {
  const t = getDictionary(locale);
  const isAr = locale === 'ar';
  return <Layout title={isAr ? 'التحقق من الشهادات | درب التحدي' : 'Certificate Verification | Darb Al-Tahadi'} description={isAr ? 'تحقق من شهادات البرامج وورش العمل.' : 'Verify certificates for programs and workshops.'}>
    <section className="section-padding bg-sand"><div className="container-premium max-w-3xl"><FadeIn className="text-center"><span className="font-black text-gold">{isAr ? 'التحقق من الشهادات' : 'Certificate verification'}</span><h1 className="mt-4 text-5xl font-black text-navy md:text-6xl">{isAr ? 'أدخل رقم الشهادة للتحقق' : 'Enter certificate number to verify'}</h1><p className="mt-5 text-xl text-slate-600">{isAr ? 'هذه واجهة جاهزة للربط لاحقاً بقاعدة بيانات أو نظام شهادات.' : 'This interface is ready to be connected later to a certificate database or system.'}</p></FadeIn><FadeIn className="card-premium mt-10"><form className="grid gap-4"><input className="input" placeholder={isAr ? 'رقم الشهادة' : 'Certificate number'} /><button className="btn-primary" type="button">{isAr ? 'تحقق الآن' : 'Verify now'}</button></form></FadeIn></div></section>
  </Layout>;
}
export function getStaticProps({ locale }) { return { props: { locale: locale || 'ar' } }; }

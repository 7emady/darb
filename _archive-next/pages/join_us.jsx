import Layout, { FadeIn } from '../components/Layout';
import { getDictionary } from '../data/site';

export default function JoinUs({ locale }) {
  const t = getDictionary(locale);
  const isAr = locale === 'ar';
  return <Layout title={isAr ? 'انضم إلينا | درب التحدي' : 'Join Us | Darb Al-Tahadi'} description={isAr ? 'انضم إلى فريق درب التحدي الاستشاري.' : 'Join Darb Al-Tahadi advisory team.'}>
    <section className="section-padding bg-white"><div className="container-premium grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><FadeIn><span className="font-black text-gold">{isAr ? 'انضم إلينا' : 'Join us'}</span><h1 className="mt-4 text-5xl font-black text-navy md:text-7xl">{isAr ? 'نبحث عن عقول تحب التحليل والتنفيذ' : 'We look for minds that love analysis and execution'}</h1><p className="mt-6 text-xl text-slate-600">{isAr ? 'إذا كنت مستشاراً، محلل أعمال، مدير مشروع، أو متخصصاً في التحول الرقمي، شاركنا بياناتك.' : 'If you are a consultant, business analyst, project manager, or digital transformation specialist, share your details.'}</p></FadeIn><FadeIn className="card-premium"><form className="grid gap-4" method="post" action="/api/contact"><input className="input" name="name" placeholder={t.form[0]} required /><input className="input" name="email" type="email" placeholder={t.form[1]} required /><input className="input" name="role" placeholder={isAr ? 'المسمى أو المجال' : 'Role or field'} /><input className="input" name="portfolio" placeholder={isAr ? 'رابط السيرة أو لينكدإن' : 'CV or LinkedIn URL'} /><textarea className="input min-h-40" name="message" placeholder={isAr ? 'نبذة مختصرة عن خبرتك' : 'Brief summary of your experience'} /><button className="btn-primary" type="submit">{t.form[3]}</button></form></FadeIn></div></section>
  </Layout>;
}
export function getStaticProps({ locale }) { return { props: { locale: locale || 'ar' } }; }

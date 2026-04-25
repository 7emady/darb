import Layout, { FadeIn } from '../components/Layout';
import { getDictionary } from '../data/site';

export default function Privacy({ locale }) {
  const t = getDictionary(locale);
  const isAr = locale === 'ar';
  const items = isAr ? ['نستخدم بيانات نماذج التواصل للرد على الطلبات فقط.', 'لا نشارك بياناتك مع أطراف خارجية إلا عند الحاجة التشغيلية وبموافقتك.', 'يمكنك طلب تحديث أو حذف بياناتك عبر البريد الإلكتروني.', 'نلتزم بحماية المعلومات المتاحة ضمن حدود الاستخدام المهني للموقع.'] : ['We use contact form data only to respond to requests.', 'We do not share your data with external parties unless operationally needed and with your consent.', 'You may request data updates or deletion by email.', 'We protect available information within professional website-use limits.'];
  return <Layout title={isAr ? 'سياسة الخصوصية | درب التحدي' : 'Privacy Policy | Darb Al-Tahadi'} description={t.footerText}><section className="section-padding bg-white"><div className="container-premium max-w-4xl"><FadeIn><h1 className="text-5xl font-black text-navy md:text-7xl">{isAr ? 'سياسة الخصوصية' : 'Privacy policy'}</h1></FadeIn><div className="mt-10 grid gap-4">{items.map((item, index) => <FadeIn key={item} className="card-premium"><b className="text-gold">0{index + 1}</b><p className="mt-3 text-lg text-slate-700">{item}</p></FadeIn>)}</div></div></section></Layout>;
}
export function getStaticProps({ locale }) { return { props: { locale: locale || 'ar' } }; }

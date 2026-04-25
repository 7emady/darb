import Link from 'next/link';
import { FadeIn } from './Layout';

const icons = { shapes: '◆', 'user-check': '●✓', building: '▦', 'file-pen': '✎', monitor: '▭', banknote: '▣', messages: '◌◌', 'map-pin': '⌖', lightbulb: '◐' };

export function Hero({ t, locale }) {
  return <section id="home" className="relative overflow-hidden bg-navy text-white">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(239,125,32,.22),transparent_28rem),radial-gradient(circle_at_80%_10%,rgba(201,162,77,.16),transparent_24rem),linear-gradient(135deg,rgba(255,255,255,.04),transparent)]" />
    <div className="container-premium relative grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[1.08fr_.92fr]">
      <FadeIn>
        <span className="mb-7 inline-block border-s-4 border-orange bg-white/10 px-4 py-2 text-sm font-black text-orange">{t.heroEyebrow}</span>
        <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">{t.heroTitle}</h1>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-white/75">{t.heroText}</p>
        <div className="mt-9 flex flex-wrap gap-4"><Link href="/consultingorder" locale={locale} className="btn-primary">{t.heroPrimary}</Link><Link href="#projects" className="btn-secondary">{t.heroSecondary}</Link></div>
        <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/70"><Link href="https://wa.me/966535815310" className="font-black text-orange" target="_blank">WhatsApp</Link><span>{t.heroNote}</span></div>
      </FadeIn>
      <FadeIn delay={.15}><div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-premium backdrop-blur"><div className="grid gap-4">{t.stats.map(([number, label]) => <div key={label} className="flex items-center justify-between border-b border-white/10 py-5 last:border-0"><strong className="text-4xl text-orange">{number}</strong><span className="font-bold text-white/75">{label}</span></div>)}</div></div></FadeIn>
    </div>
  </section>;
}

export function TrustBar({ t }) {
  return <section className="border-y border-slate-200 bg-white"><div className="container-premium grid gap-4 py-5 md:grid-cols-4">{t.trustItems.map((item) => <div key={item} className="flex items-center justify-center gap-3 text-center font-black text-navy"><span className="grid h-8 w-8 place-items-center rounded-full bg-orange text-white">✓</span>{item}</div>)}</div></section>;
}

export function AnimatedStats({ t }) {
  return <section className="bg-sand py-10"><div className="container-premium grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{t.stats.map(([number, label]) => <FadeIn key={label} className="rounded-3xl bg-white p-6 text-center shadow-sm"><strong className="block text-4xl font-black text-navy">{number}</strong><span className="mt-2 block font-bold text-slate-600">{label}</span></FadeIn>)}</div></section>;
}

export function AboutHome({ t }) {
  return <section id="about" className="section-padding bg-white"><div className="container-premium"><SectionHeading title={t.aboutTitle} desc={t.aboutDesc} /><div className="grid items-center gap-10 lg:grid-cols-[1fr_.9fr]"><FadeIn><span className="font-black text-orange">{t.aboutKicker}</span><p className="mt-4 text-2xl font-black leading-10 text-navy">{t.aboutLead}</p><p className="mt-5 leading-8 text-slate-600">{t.aboutText}</p><div className="mt-6 grid gap-3">{t.aboutPoints.map((p) => <div key={p} className="flex gap-3 rounded-2xl bg-sand p-4 font-bold text-slate-700"><span className="text-orange">✓</span>{p}</div>)}</div></FadeIn><FadeIn className="rounded-[2rem] bg-navy p-6 text-white shadow-premium"><div className="grid gap-4">{t.aboutMini.map(([title, text]) => <div key={title} className="rounded-2xl border border-white/10 bg-white/8 p-5"><h3 className="text-xl font-black text-orange">{title}</h3><p className="mt-2 text-white/70">{text}</p></div>)}</div></FadeIn></div></div></section>;
}

export function WhyUs({ t }) {
  return <section id="why-choose-us" className="section-padding bg-sand"><div className="container-premium"><SectionHeading title={t.whyTitle} desc={t.whyDesc} /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{t.whyFeatures.map(([title, text], i) => <FadeIn key={title} delay={i * .04} className="card-premium"><div className="mb-5 text-4xl font-black text-orange">0{i + 1}</div><h3 className="text-2xl font-black text-navy">{title}</h3><p className="mt-3 text-slate-600">{text}</p></FadeIn>)}</div></div></section>;
}

export function Services({ t, locale = 'ar' }) {
  return <section id="products" className="section-padding bg-white"><div className="container-premium"><SectionHeading kicker={locale === 'ar' ? 'خدماتنا' : 'Our services'} title={t.servicesTitle} desc={t.servicesText} center /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{t.detailedServices.map((service, index) => <ServiceCard key={service.title} service={service} index={index} locale={locale} />)}</div></div></section>;
}

function ServiceCard({ service, index, locale }) {
  return <FadeIn delay={index * .04} className="card-premium flex min-h-[330px] flex-col items-center text-center"><div className="mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-sand text-3xl font-black text-navy">{icons[service.icon] || '◆'}</div><h3 className="mb-4 text-2xl font-black leading-tight text-navy">{service.title}</h3><ul className="mb-6 grid w-full gap-3 text-start text-sm leading-7 text-slate-600">{service.items.map((item) => <li key={item} className="flex gap-2"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500 text-xs font-black text-white">✓</span><span>{item}</span></li>)}</ul><Link href="/consultingorder" locale={locale} className="mt-auto rounded-md bg-navy px-5 py-2 text-sm font-black text-white transition hover:bg-orange">{locale === 'ar' ? 'اطلب الآن' : 'Request now'}</Link></FadeIn>;
}

export function Projects({ t }) {
  return <section id="projects" className="section-padding bg-sand"><div className="container-premium"><SectionHeading title={t.projectsTitle} desc={t.projectsDesc} /><div className="grid gap-6 lg:grid-cols-3">{t.projects.map(([title, desc, year, metric, tag]) => <FadeIn key={title} className="card-premium overflow-hidden"><div className="mb-5 h-40 rounded-2xl bg-[linear-gradient(135deg,#061A2F,#EF7D20)]" /><h3 className="text-2xl font-black text-navy">{title}</h3><p className="mt-3 text-slate-600">{desc}</p><div className="mt-5 grid grid-cols-3 gap-2 text-center text-sm"><b className="text-orange">{year}</b><b className="text-orange">{metric}</b><b className="text-orange">{tag}</b></div></FadeIn>)}</div></div></section>;
}

export function Partners({ t }) {
  return <section id="partners" className="py-14 bg-white"><div className="container-premium"><SectionHeading title={t.partnersTitle} desc={t.partnersDesc} center /><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{t.partners.map((p) => <div key={p} className="rounded-2xl border border-slate-200 bg-sand p-6 text-center font-black text-navy">{p}</div>)}</div></div></section>;
}

export function Insights({ t, locale = 'ar' }) {
  return <section id="blog" className="section-padding bg-white"><div className="container-premium"><SectionHeading title={t.insightsTitle} desc={t.insightsDesc} /><div className="grid gap-6 md:grid-cols-3">{t.insights.map(([title, text]) => <FadeIn key={title} className="card-premium"><span className="text-sm font-black text-orange">{locale === 'ar' ? 'مقال' : 'ARTICLE'}</span><h3 className="mt-4 text-2xl font-black text-navy">{title}</h3><p className="mt-3 text-slate-600">{text}</p></FadeIn>)}</div></div></section>;
}

export function Certificates({ t }) { return <BadgeSection id="certificates" title={t.certificatesTitle} desc={t.certificatesDesc} items={t.certificates} />; }
export function Approvals({ t }) { return <BadgeSection id="approvals" title={t.approvalsTitle} desc={t.approvalsDesc} items={t.approvals} sand />; }

function BadgeSection({ id, title, desc, items, sand = false }) {
  return <section id={id} className={`section-padding ${sand ? 'bg-sand' : 'bg-white'}`}><div className="container-premium"><SectionHeading title={title} desc={desc} center /><div className="grid gap-5 md:grid-cols-4">{items.map((item) => <FadeIn key={item} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"><div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-navy text-xl font-black text-orange">✓</div><h3 className="font-black text-navy">{item}</h3></FadeIn>)}</div></div></section>;
}

export function ContactHome({ t, locale = 'ar' }) {
  return <section id="contact" className="section-padding bg-white"><div className="container-premium grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><FadeIn><SectionHeading title={t.contactTitle} desc={t.contactText} /><div className="rounded-3xl bg-navy p-7 text-white"><p>info@darb-altahadi.sa</p><p className="ltr-only mt-2">+966535815310</p><p className="mt-2">{locale === 'ar' ? 'المملكة العربية السعودية' : 'Saudi Arabia'}</p></div></FadeIn><FadeIn className="card-premium"><form className="grid gap-4" method="post" action="/api/contact"><input className="input" name="name" placeholder={t.form[0]} required /><input className="input" name="email" type="email" placeholder={t.form[1]} required /><textarea className="input min-h-40" name="message" placeholder={t.form[2]} required /><button className="btn-primary" type="submit">{t.form[3]}</button></form></FadeIn></div></section>;
}

export function Process({ t }) {
  return <section className="section-padding bg-navy text-white"><div className="container-premium"><FadeIn className="mb-12"><h2 className="text-4xl font-black md:text-5xl">{t.processTitle}</h2></FadeIn><div className="grid gap-5 md:grid-cols-4">{t.process.map(([n, title, text]) => <FadeIn key={n} className="border-t border-orange/70 pt-6"><b className="text-orange">{n}</b><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 text-white/65">{text}</p></FadeIn>)}</div></div></section>;
}

function SectionHeading({ kicker, title, desc, center = false }) {
  return <FadeIn className={`mb-12 max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>{kicker && <span className="font-black text-orange">{kicker}</span>}<h2 className="mt-3 text-4xl font-black text-navy md:text-5xl">{title}</h2>{desc && <p className="mt-4 text-lg leading-8 text-slate-600">{desc}</p>}</FadeIn>;
}

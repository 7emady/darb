import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { getDictionary } from '../data/site';

export default function Layout({ children, title, description }) {
  const { locale = 'ar', asPath } = useRouter();
  const t = getDictionary(locale);
  const switchLocale = locale === 'ar' ? 'en' : 'ar';
  const pageTitle = title || 'Darb Al-Tahadi Consulting';
  const pageDescription = description || t.footerText;

  return (
    <div dir={t.dir} lang={locale} className="min-h-screen bg-[#fbfcfd] text-ink">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#061A2F" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="/images/logo.jpeg" />
      </Head>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="container-premium flex min-h-20 flex-wrap items-center justify-between gap-4 py-3">
          <Link href="/" locale={locale} className="flex items-center gap-3">
            <Image src="/images/logo.jpeg" alt="Darb Al-Tahadi" width={72} height={52} className="rounded-lg object-contain" priority />
            <div className="leading-tight">
              <strong className="block text-lg font-black text-navy">{locale === 'ar' ? 'درب التحدي' : 'Darb Al-Tahadi'}</strong>
              <span className="text-xs font-bold text-slate-500">{locale === 'ar' ? 'استشارات | حلول رقمية' : 'Consulting | Digital'}</span>
            </div>
          </Link>

          <nav className="order-3 flex w-full gap-4 overflow-x-auto pb-1 lg:order-none lg:w-auto lg:items-center lg:gap-7 lg:overflow-visible lg:pb-0">
            {t.nav.map((item, index) => (
              <Link key={item} href={t.routes[index]} locale={locale} className="shrink-0 text-sm font-extrabold text-slate-700 transition hover:text-orange">
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href={asPath} locale={switchLocale} className="rounded-full border border-slate-200 px-4 py-2 text-sm font-extrabold text-navy transition hover:border-orange hover:text-orange">
              {t.langName}
            </Link>
            <Link href="/consultingorder" locale={locale} className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-extrabold text-white transition hover:bg-orange md:inline-flex">
              {t.cta}
            </Link>
          </div>
        </div>
      </header>

      {children}

      <SiteFooter t={t} locale={locale} />
      <FloatingActions locale={locale} />
    </div>
  );
}

function SiteFooter({ t, locale }) {
  const isAr = locale === 'ar';
  const mainLinks = t.nav.map((item, index) => [item, t.routes[index]]);
  const importantLinks = [...mainLinks, ...t.extraLinks, ...t.legalLinks];

  return (
    <footer className="footer-shell text-white">
      <div className="container-premium">
        <div className="footer-cta">
          <div className="footer-cta-overlay" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl font-black md:text-4xl">{isAr ? 'طلب جلسة استشارية سؤال وجواب' : 'Request a Q&A advisory session'}</h2>
            <Link href="/consultingorder" locale={locale} className="mt-5 inline-flex rounded-md bg-navy px-6 py-2.5 text-sm font-black text-white shadow-lg transition hover:bg-orange">
              {isAr ? 'اطلب الآن' : 'Request now'}
            </Link>
          </div>
        </div>

        <div className="grid gap-10 py-16 lg:grid-cols-[1.15fr_.85fr_.9fr]">
          <div className="space-y-6 lg:text-right">
            <h3 className="footer-title">{isAr ? 'عن المكتب' : 'About the office'}</h3>
            <p className="text-sm leading-8 text-slate-300">{t.footerText}</p>
            <p className="text-sm leading-8 text-slate-400">
              {isAr ? 'سجل تجاري رقم 17555 ونطاق خدمات يشمل الاستشارات الإدارية والتحول الرقمي وتطوير الأعمال داخل المملكة العربية السعودية.' : 'Commercial registration 17555, covering management consulting, digital transformation, and business development services in Saudi Arabia.'}
            </p>
            <div className="flex items-center gap-3 lg:justify-start">
              <Image src="/images/logo.jpeg" alt="Darb Al-Tahadi" width={78} height={58} className="rounded-xl bg-white p-2 object-contain" />
              <div className="rounded-full border border-orange/50 px-4 py-2 text-xs font-black text-orange">{isAr ? 'هوية سعودية' : 'Saudi identity'}</div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="footer-title">{isAr ? 'أهم الروابط' : 'Important links'}</h3>
            <div className="mx-auto mt-5 grid max-w-xs gap-2 text-sm text-slate-300">
              {importantLinks.map(([label, href]) => <Link key={`${href}-${label}`} href={href} locale={locale} className="transition hover:text-orange">{label}</Link>)}
            </div>
          </div>

          <div className="space-y-5 lg:text-right">
            <h3 className="footer-title">{isAr ? 'اتصل بنا' : 'Contact us'}</h3>
            <InfoLine icon="⌖" label={isAr ? 'المكان' : 'Location'} value={isAr ? 'المملكة العربية السعودية' : 'Saudi Arabia'} />
            <InfoLine icon="☏" label={isAr ? 'اتصل بنا' : 'Phone'} value="+966535815310" ltr />
            <InfoLine icon="◷" label={isAr ? 'ساعات العمل' : 'Working hours'} value="9AM - 5PM" ltr />
            <div className="pt-3">
              <h4 className="mb-3 text-sm font-black text-slate-400">{isAr ? 'طرق الدفع' : 'Payment methods'}</h4>
              <div className="flex flex-wrap gap-2 lg:justify-start">
                {['mada', 'STC Pay', 'VISA', 'Mastercard', 'PayPal'].map((item) => <span key={item} className="rounded-md bg-white/8 px-3 py-1.5 text-xs font-black text-slate-200 ring-1 ring-white/10">{item}</span>)}
              </div>
            </div>
            <div className="flex gap-3 pt-2 lg:justify-start">
              <a href="https://wa.me/966535815310" target="_blank" rel="noopener" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-black transition hover:bg-orange">WA</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-black transition hover:bg-orange">in</a>
              <a href="https://x.com/" target="_blank" rel="noopener" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-sm font-black transition hover:bg-orange">X</a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-5 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Darb Al-Tahadi. All rights reserved.</span>
          <span>{isAr ? 'تصميم وتطوير بمعايير احترافية جاهزة للرفع' : 'Designed and developed with production-ready standards'}</span>
        </div>
      </div>
    </footer>
  );
}

function InfoLine({ icon, label, value, ltr = false }) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-4 text-sm">
      <div>
        <div className="font-black text-slate-400">{label}</div>
        <div className={ltr ? 'ltr-only mt-1 text-slate-300' : 'mt-1 text-slate-300'}>{value}</div>
      </div>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/8 text-orange ring-1 ring-white/10">{icon}</span>
    </div>
  );
}

function FloatingActions({ locale }) {
  const isAr = locale === 'ar';
  return (
    <>
      <a className="floating-whatsapp" href="https://wa.me/966535815310" target="_blank" rel="noopener" aria-label={isAr ? 'واتساب' : 'WhatsApp'}>
        <span className="floating-whatsapp-icon">WA</span>
        <span>{isAr ? 'واتساب للأعمال' : 'Business WhatsApp'}</span>
      </a>
      <div className="sticky-mobile-cta" aria-label={isAr ? 'روابط تواصل سريعة' : 'Quick contact links'}>
        <a href="tel:+966535815310" aria-label={isAr ? 'اتصل بنا' : 'Call us'}><span>☏</span><b>{isAr ? 'اتصل' : 'Call'}</b></a>
        <a href="https://wa.me/966535815310" target="_blank" rel="noopener" aria-label={isAr ? 'واتساب' : 'WhatsApp'}><span>WA</span><b>{isAr ? 'واتساب' : 'WhatsApp'}</b></a>
        <a href="/consultingorder" aria-label={isAr ? 'اطلب استشارة' : 'Request advisory'}><span>▣</span><b>{isAr ? 'استشارة' : 'Advisory'}</b></a>
      </div>
      <a href="#home" className="back-to-top" aria-label={isAr ? 'العودة للأعلى' : 'Back to top'}>↑</a>
    </>
  );
}

export function FadeIn({ children, className = '', delay = 0 }) {
  return <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay }} className={className}>{children}</motion.div>;
}

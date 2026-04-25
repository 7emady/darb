# Darb Al-Tahadi Consulting Website

موقع شركة استشارات عربي/إنجليزي مبني بـ Next.js و Tailwind CSS و Framer Motion، بتصميم احترافي مناسب لشركات الاستشارات السعودية.

## التشغيل المحلي

```bash
npm install
npm run dev
```

الرابط المحلي الافتراضي:

```text
http://localhost:3000
```

## البناء للإنتاج

```bash
npm run build
npm run start
```

## الهيكل

- `components/`: مكونات الواجهة المشتركة.
- `pages/`: صفحات الموقع و API التواصل.
- `data/`: النصوص العربية والإنجليزية.
- `styles/`: التنسيقات العامة.
- `public/`: الصور والملفات العامة.
- `_legacy-php/`: نسخة PHP القديمة محفوظة كأرشيف فقط.

## ملاحظات النشر

حدث قيمة `NEXT_PUBLIC_SITE_URL` في `.env.local` عند رفع الموقع على الدومين الحقيقي، ثم حدّث `public/sitemap.xml` إذا تغيّر الرابط النهائي.

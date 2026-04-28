# Darb Static Site

هذا هو مسار التشغيل الحالي لموقع درب التحدي. الموقع يعمل كواجهة ثابتة من ملفات HTML و CSS و JavaScript داخل هذا المجلد، بدون اعتماد مباشر على نسخة Next.js المؤرشفة.

## الملفات النشطة

- `index.html`: الصفحة الرئيسية.
- `branches.html`, `consultingorder.html`, `join_us.html`, `privacy-policy.html`: صفحات الموقع المباشرة.
- `blog/`: صفحات المقالات الثابتة.
- `admin/`: واجهات إدارة/لوحات ثابتة محفوظة ضمن الموقع.
- `assets/css/site.css`: ملف التنسيق الرئيسي للواجهة الحالية.
- `assets/js/main.js`: تفاعل الصفحة الرئيسية والمحتوى الديناميكي.
- `assets/js/page-shell.js`: الهيدر والفوتر للصفحات الداخلية.
- `assets/js/site-config.js` و `data/site.js`: بيانات التواصل والإعدادات المشتركة.
- `assets/images/` و `assets/fonts/`: الصور والخطوط المستخدمة في الموقع.

## بيانات ومحتوى

- `data/*.json`: بيانات المشاريع، الشهادات، المعرض، الشركاء، والمدونة.
- `assets/data/`: بيانات المقالات بصيغ JavaScript للاستخدام المباشر في المتصفح.
- `sitemap.xml`, `robots.txt`, `CNAME`: ملفات النشر والفهرسة.

## مجلدات مؤرشفة أو محلية

- `_archive-next/`: نسخة Next.js ونسخة PHP القديمة محفوظة كمرجع فقط، وليست مسار التشغيل الحالي.
- `_archive-static/`: ملفات ثابتة قديمة نُقلت من الجذر لتقليل ازدحام المشروع.
- `_checks/`: لقطات فحص محلية، وهي مستثناة من Git عبر `.gitignore`.

## التحقق السريع

افتح الموقع محليًا عبر XAMPP:

```text
http://localhost/darb/index.html
```

أو تحقق من ملفات JavaScript الرئيسية:

```powershell
node --check assets\js\main.js
node --check assets\js\page-shell.js
node --check assets\js\site-config.js
```

## ملاحظة تنظيمية

لا تنقل ملفات من `assets/`, `data/`, `blog/`, أو `admin/` إلا بعد التأكد من عدم وجود مراجع لها في صفحات HTML أو JavaScript. الأرشيفات مخصصة للرجوع عند الحاجة وليست جزءًا من مسار النشر اليومي.

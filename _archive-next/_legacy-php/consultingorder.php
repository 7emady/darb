<?php
$pageTitle = 'طلب جلسة استشارية - درب التحدي';
$activePage = 'home';
require __DIR__ . '/includes/header.php';
?>

<main>
  <section class="page-title"><span class="eyebrow">جلسة سؤال وجواب</span><h1>طلب جلسة استشارية</h1><p>املأ بياناتك وحدد نوع الاستشارة المطلوبة، وسنعود لك بموعد مناسب خلال ساعات العمل.</p></section>
  <section class="section"><div class="grid cols-2">
    <article class="card accent"><h2>ماذا تشمل الجلسة؟</h2><ul class="list"><li>فهم التحدي الإداري أو المالي أو التقني.</li><li>اقتراح مسار عملي أولي.</li><li>تحديد الوثائق أو البيانات المطلوبة للخطوة التالية.</li></ul></article>
    <article class="card"><h2>نموذج الطلب</h2><form class="form" data-static-form method="post"><input name="name" placeholder="الاسم" required><input name="phone" placeholder="رقم الجوال" required><input type="email" name="email" placeholder="البريد الإلكتروني"><select name="service"><option>البناء المؤسسي</option><option>الموارد البشرية</option><option>الخدمات المالية</option><option>التحول الرقمي</option><option>الأيزو والتدريب</option></select><textarea name="details" placeholder="نبذة عن احتياجك"></textarea><button class="btn" type="submit">إرسال الطلب</button><div class="notice">تم تسجيل الطلب محليًا للمعاينة.</div></form></article>
  </div></section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>

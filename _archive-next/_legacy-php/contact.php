<?php
$pageTitle = 'تواصل معنا - درب التحدي';
$activePage = 'contact';
require __DIR__ . '/includes/header.php';
?>

<main>
  <section class="page-title"><span class="eyebrow">اتصل بنا</span><h1>لا تتردد في التواصل معنا</h1><p>يسعدنا استقبال طلباتكم واستفساراتكم عبر بيانات التواصل أو النموذج التالي.</p></section>
  <section class="section"><div class="grid cols-2">
    <article class="card"><h2>بيانات التواصل</h2><ul class="list"><li>المكان: المملكة العربية السعودية.</li><li>البريد الإلكتروني: info@darb-altahadi.sa</li><li>رقم الهاتف: +966535815310</li><li>ساعات العمل: 9AM - 5PM</li></ul></article>
    <article class="card">
      <h2>نموذج تواصل معنا</h2>
      <form class="form" data-static-form method="post">
        <input name="name" placeholder="الاسم" required>
        <input type="email" name="email" placeholder="البريد الإلكتروني" required>
        <input name="phone" placeholder="رقم الجوال">
        <textarea name="message" placeholder="رسالتك" required></textarea>
        <button class="btn" type="submit">إرسال</button>
        <div class="notice">تم تسجيل الطلب محليًا للمعاينة. اربط النموذج بخدمة إرسال عند النشر.</div>
      </form>
    </article>
  </div></section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>

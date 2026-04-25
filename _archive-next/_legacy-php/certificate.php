<?php
$pageTitle = 'تحقق من الشهادات - درب التحدي';
$activePage = 'certificate';
require __DIR__ . '/includes/header.php';
?>

<main>
  <section class="page-title"><span class="eyebrow">الشهادات</span><h1>تحقق من الشهادات</h1><p>صفحة مخصصة للتحقق من الشهادات الصادرة أو المسجلة لدى المؤسسة.</p></section>
  <section class="section"><div class="grid cols-2"><article class="card"><h2>نموذج التحقق</h2><form class="form" data-static-form method="post"><input name="certificate" placeholder="رقم الشهادة" required><input name="holder" placeholder="اسم صاحب الشهادة"><button class="btn" type="submit">تحقق</button><div class="notice">هذه نسخة محلية للمعاينة. يلزم ربط قاعدة بيانات الشهادات عند النشر.</div></form></article><article class="card accent"><h2>ملاحظة</h2><p>الموقع المرجعي يعرض هذه الصفحة من خلال إطار iframe. في النسخة المحلية تم توفير واجهة جاهزة للربط لاحقًا بنظام التحقق.</p></article></div></section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>

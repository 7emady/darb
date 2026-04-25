<?php
$pageTitle = 'انضم إلينا - درب التحدي';
$activePage = 'home';
require __DIR__ . '/includes/header.php';
?>

<main>
  <section class="page-title"><span class="eyebrow">انضم إلينا</span><h1>شاركنا صناعة الأثر الاستشاري والرقمي</h1><p>نرحب بالمستشارين والخبراء والمدربين الراغبين في التعاون ضمن مجالات الإدارة والجودة والمالية والتقنية.</p></section>
  <section class="section"><div class="grid cols-2">
    <article class="card"><h2>مجالات التعاون</h2><ul class="list"><li>استشارات إدارية وبناء مؤسسي.</li><li>موارد بشرية وتدريب.</li><li>جودة وأيزو وتميز مؤسسي.</li><li>مالية ودراسات جدوى.</li><li>تحول رقمي وأنظمة ERP.</li></ul></article>
    <article class="card"><h2>بيانات الانضمام</h2><form class="form" data-static-form method="post"><input name="name" placeholder="الاسم" required><input name="specialty" placeholder="التخصص" required><input type="email" name="email" placeholder="البريد الإلكتروني"><input name="phone" placeholder="رقم الجوال"><textarea name="bio" placeholder="نبذة مختصرة عن الخبرة"></textarea><button class="btn" type="submit">إرسال</button><div class="notice">تم تسجيل البيانات محليًا للمعاينة.</div></form></article>
  </div></section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>

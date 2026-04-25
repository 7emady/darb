<?php
http_response_code(404);
$pageTitle = 'الصفحة غير موجودة | درب التحدي';
$activePage = 'home';
require __DIR__ . '/includes/header.php';
?>

<main>
  <section class="page-title">
    <span class="eyebrow">404</span>
    <h1>الصفحة غير موجودة</h1>
    <p>قد يكون الرابط غير صحيح أو تم نقل الصفحة. يمكنك العودة للرئيسية أو التواصل معنا.</p>
  </section>
  <section class="section">
    <div class="grid cols-2">
      <article class="card">
        <h2>روابط مفيدة</h2>
        <ul class="list">
          <li><a href="index.php">العودة للرئيسية</a></li>
          <li><a href="services.php">استعراض الخدمات</a></li>
          <li><a href="contact.php">التواصل معنا</a></li>
        </ul>
      </article>
      <article class="card accent">
        <h2>هل تحتاج مساعدة؟</h2>
        <p>يسعدنا مساعدتك في الوصول للخدمة أو المعلومة التي تبحث عنها.</p>
        <a class="btn" href="contact.php">تواصل معنا</a>
      </article>
    </div>
  </section>
</main>

<?php require __DIR__ . '/includes/footer.php'; ?>
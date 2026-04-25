<?php
$siteName = 'درب التحدي';
$pageTitle = $pageTitle ?? $siteName . ' | استشارات وحلول رقمية وتطوير أعمال';
$pageDescription = $pageDescription ?? 'مؤسسة درب التحدي للتجارة تقدم الاستشارات والحلول الرقمية وتطوير الأعمال.';
$activePage = $activePage ?? 'home';

$navItems = [
  'home' => ['label' => 'الرئيسية', 'href' => 'index.php'],
  'about' => ['label' => 'من نحن', 'href' => 'about.php'],
  'services' => ['label' => 'خدماتنا', 'href' => 'services.php'],
  'branches' => ['label' => 'الأفرع', 'href' => 'branches.php'],
  'initiatives' => ['label' => 'مبادراتنا', 'href' => 'initiatives.php'],
  'certificate' => ['label' => 'تحقق من الشهادات', 'href' => 'certificate.php'],
  'contact' => ['label' => 'اتصل بنا', 'href' => 'contact.php'],
];
?>
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="<?= htmlspecialchars($pageDescription, ENT_QUOTES, 'UTF-8') ?>">
  <title><?= htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8') ?></title>
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  <header class="site-header">
    <div class="topbar">
      <div class="topbar-inner">
        <span>المملكة العربية السعودية</span>
        <span><a href="tel:+966535815310">+966535815310</a></span>
        <span><a href="mailto:info@darb-altahadi.sa">info@darb-altahadi.sa</a></span>
      </div>
    </div>
    <nav class="nav">
      <a class="brand" href="index.php">
        <span class="brand-mark"><img src="images/logo.jpeg" alt="شعار مؤسسة درب التحدي للتجارة"></span>
        <span>درب التحدي<small>استشارات | حلول رقمية | تطوير الأعمال</small></span>
      </a>
      <button class="menu-toggle" type="button" aria-expanded="false">القائمة</button>
      <div class="nav-links">
        <?php foreach ($navItems as $key => $item): ?>
          <a class="<?= $activePage === $key ? 'active' : '' ?>" href="<?= $item['href'] ?>">
            <?= htmlspecialchars($item['label'], ENT_QUOTES, 'UTF-8') ?>
          </a>
        <?php endforeach; ?>
      </div>
    </nav>
  </header>
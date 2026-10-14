# Ugi Ajans

Referans görsellerdeki görsel dilden uyarlanan, mobil uyumlu yaratıcı ajans sitesi.

## Çalıştırma

Node.js 22.13 veya üzeri gerekir.

```sh
npm ci
npm run dev
```

Windows PowerShell yürütme ilkesi `npm.ps1` dosyasını engelliyorsa `npm.cmd run dev` kullanın.

```sh
npm run build
npm run typecheck
npm test
```

## İçerik ve davranışlar

- Türkçe ve İngilizce içerik, cihazda saklanan tema ve dil tercihi.
- Klavye ve dokunmatik destekli hizmet menüleri, mobil akordeon menü.
- Hizmet detayları, dört seçili proje, üç blog yazısı, animasyonlu konsept showreel.
- Proje özeti formu doğrulama, metin olarak indirme ve kopyalama sağlar.
- Hareket azaltma tercihi ve animasyon durdurma düğmesi.
- Kritik görsel ve font dosyaları yerel olarak sunulur.

Hizmet ve proje metinleri `app/content.ts`, sayfa `app/ugi-home.tsx`, etkileşim pencereleri `app/dialogs.tsx`, tasarım `app/site.css` içindedir.

## Önizleme içeriği

İletişim kanalları WhatsApp (`+90 530 783 33 70`) ve e-posta (`info@ugi.net.tr`) olarak tanımlıdır. Proje özeti formu bilgileri otomatik göndermez; kullanıcı özeti indirip bu kanallardan iletebilir.

Seçili proje ekran görüntüleri ana sayfadaki Kreatif İşler bölümünde sunulur. Showreel, animasyonlu bir marka konseptidir. Önizleme arama motorları için `noindex` olarak ayarlanmıştır.

Fotoğraf kaynağı `public/images/CREDITS.md` içinde yer alır. Diğer görsel kompozisyonlar HTML/CSS ile hazırlanmıştır.

## Yayın

Vercel için `npm run build` Next.js çıktısını `.next` klasörüne üretir; `npm start` bu çıktıyı çalıştırır. Vercel ayarları `vercel.json` içinde tanımlıdır.

Sites / Cloudflare için `npm run build:vinext` kullanılır. `npm test` bu Worker çıktısını derleyip test eder. Sites proje bağlantısı `.openai/hosting.json` içinde tutulur. Kaynak erişim anahtarları depoya yazılmaz.

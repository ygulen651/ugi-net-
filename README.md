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
- Hizmet detayları, üç konsept proje, üç blog yazısı, animasyonlu konsept showreel.
- Proje özeti formu doğrulama, metin olarak indirme ve kopyalama sağlar.
- Hareket azaltma tercihi ve animasyon durdurma düğmesi.
- Kritik görsel ve font dosyaları yerel olarak sunulur.

Hizmet ve proje metinleri `app/content.ts`, sayfa `app/ugi-home.tsx`, etkileşim pencereleri `app/dialogs.tsx`, tasarım `app/site.css` içindedir.

## Önizleme içeriği

Kullanıcı iletişim bilgilerini daha sonra eklemeyi seçti. Form bilgileri ajansa göndermez; bu durum formda açıkça belirtilir. E-posta, telefon ve sosyal hesap uydurulmamıştır.

Nova Studio, Luma Living ve Forma Active kurgusal konsept çalışmalardır. Showreel, animasyonlu bir marka konseptidir. Gerçek müşteri işleri ve video sağlandığında değiştirilebilir. Önizleme arama motorları için `noindex` olarak ayarlanmıştır.

Fotoğraf kaynağı `public/images/CREDITS.md` içinde yer alır. Diğer görsel kompozisyonlar HTML/CSS ile hazırlanmıştır.

## Yayın

Vinext, React ve Cloudflare Worker çıktısı kullanılır. Sites proje bağlantısı `.openai/hosting.json` içinde tutulur. Kaynak erişim anahtarları depoya yazılmaz.

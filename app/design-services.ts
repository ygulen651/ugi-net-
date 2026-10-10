import type { WebService } from "./web-services";

export const designServices: (WebService & { word: string })[] = [
  {
    slug: "logo-gorsel-kimlik", title: ["Logo & Görsel Kimlik", "Logo & Visual Identity"], word: "Identity.", label: "MARK / COLOUR / CHARACTER",
    tagline: ["Bir işaretten, size ait bir dünyaya.", "From a mark to a world of your own."],
    intro: ["Markanızın karakterini logo, renk ve tipografiyle görünür kılıyoruz. Tek bir işaretin ötesinde, farklı temas noktalarında aynı kimliği taşıyan bir görsel sistem tasarlıyoruz.", "We express your character through a logo, colour and typography. Beyond a single mark, we design a visual system that feels consistent across touchpoints."],
    scope: [["Marka keşfi ve görsel yön araştırması", "Brand discovery and visual direction"], ["Logo ve alternatif kullanım biçimleri", "Logo and usage variants"], ["Renk paleti ve tipografi sistemi", "Colour palette and typography system"], ["Temel kullanım rehberi ve dosyalar", "Core guidelines and asset files"]],
    faq: [
      { question: ["Mevcut logomuzu yenileyebilir miyiz?", "Can you refresh our existing logo?"], answer: ["Markanın tanınırlığını korumak istediğiniz unsurları belirleriz. Küçük bir iyileştirme ile kapsamlı yeniden tasarım seçeneklerini birlikte değerlendiririz.", "We identify which recognisable elements to preserve, then consider anything from a small refinement to a full redesign."] },
      { question: ["Tescil işlemleri dahil mi?", "Is trademark registration included?"], answer: ["Bu hizmet tasarım kapsamındadır. Tescil başvurusu ve hukuki uygunluk değerlendirmesi ayrı uzmanlık gerektirir.", "This is a design service. Registration and legal clearance require separate professional review."] },
    ],
  },
  {
    slug: "marka-stratejisi", title: ["Marka Stratejisi", "Brand Strategy"], word: "Purpose.", label: "POSITION / PURPOSE / VOICE",
    tagline: ["Ne söylediğiniz kadar, neden söylediğiniz.", "Not just what you say, but why."],
    intro: ["Markanızın kime seslendiğini, hangi ihtiyacı karşıladığını ve nasıl ayrıştığını netleştiriyoruz. Araştırma ve atölye çıktılarından tasarım ile iletişime yön veren bir strateji oluşturuyoruz.", "We clarify your audience, the need you address and what makes you distinct. Research and workshop findings become a strategy that guides design and communication."],
    scope: [["Marka ve rakip görünümü incelemesi", "Brand and competitor landscape review"], ["Hedef kitle ve konumlandırma", "Audience and positioning"], ["Değer önerisi ve mesaj mimarisi", "Value proposition and messaging architecture"], ["Marka kişiliği ve iletişim tonu", "Brand personality and tone of voice"]],
    faq: [
      { question: ["Yeni markalar için mi uygundur?", "Is this only for new brands?"], answer: ["Yeni markalar kadar yönünü yeniden tanımlayan veya farklı bir kitleye ulaşmak isteyen mevcut markalar için de planlanabilir.", "It can support both new brands and existing ones redefining their direction or reaching a different audience."] },
      { question: ["Araştırma nasıl yapılır?", "How is research carried out?"], answer: ["Mevcut veriler, ekip görüşmeleri ve masa başı araştırma kapsamı birlikte belirlenir. Saha araştırması gerekiyorsa ayrıca planlanır.", "We agree on existing data, team interviews and desk research. Field research is planned separately if required."] },
    ],
  },
  {
    slug: "kurumsal-kimlik", title: ["Kurumsal Kimlik", "Corporate Identity"], word: "Consistent.", label: "SYSTEM / TOUCHPOINT / TRUST",
    tagline: ["Her temas noktasında aynı karakter.", "One character across every touchpoint."],
    intro: ["Görsel kimliğinizi günlük iş hayatında kullanılan materyallere taşıyoruz. Basılı evraktan sunumlara kadar ekibinizin tutarlı iletişim kurmasını kolaylaştıran şablonlar hazırlıyoruz.", "We bring your visual identity into everyday business materials. From printed stationery to presentations, practical templates help your team communicate consistently."],
    scope: [["Mevcut kimlik ve ihtiyaç envanteri", "Identity review and material inventory"], ["Kartvizit ve kurumsal evrak tasarımı", "Business cards and stationery"], ["Sunum ve dijital belge şablonları", "Presentation and document templates"], ["Uygulama kuralları ve teslim seti", "Usage rules and delivery package"]],
    faq: [
      { question: ["Logo tasarımı da dahil mi?", "Is logo design included?"], answer: ["Mevcut logo üzerinden ilerleyebiliriz. Yeni logo veya görsel kimlik çalışması gerekiyorsa ayrı kapsam olarak belirlenir.", "We can work with an existing logo. A new logo or visual identity is defined as an additional scope when needed."] },
      { question: ["Baskı hizmeti sağlanıyor mu?", "Is printing included?"], answer: ["Baskıya hazırlık ile fiziksel üretim ayrı kalemlerdir. Matbaa teknik ölçüleri ve üretim sorumlulukları önceden netleştirilir.", "Print preparation and physical production are separate items. Printer specifications and production responsibilities are agreed beforehand."] },
    ],
  },
  {
    slug: "ambalaj-tasarimi", title: ["Ambalaj Tasarımı", "Packaging Design"], word: "Unbox.", label: "FORM / SHELF / EXPERIENCE",
    tagline: ["İlk bakıştan ilk açılışa.", "From first glance to first opening."],
    intro: ["Ürününüzün raftaki duruşunu ve eldeki deneyimini birlikte düşünüyoruz. Marka dili, bilgi hiyerarşisi ve üretim ölçülerini bir araya getiren ambalaj yüzeyleri tasarlıyoruz.", "We consider both shelf presence and the experience in hand. Brand language, information hierarchy and production dimensions come together in packaging design."],
    scope: [["Ürün ailesi ve raf bağlamı araştırması", "Product range and shelf context review"], ["Görsel konsept ve bilgi yerleşimi", "Visual concept and information layout"], ["Varyant ve ürün ailesi uyarlamaları", "Variant and product family adaptations"], ["Kesim şablonuna uygun baskı dosyaları", "Print files aligned to supplied dielines"]],
    faq: [
      { question: ["Ambalajın fiziksel formunu da tasarlıyor musunuz?", "Do you design the physical packaging structure?"], answer: ["Bu kapsam ambalajın grafik tasarımını temel alır. Yapısal tasarım, prototip ve üretici koordinasyonu gerekiyorsa ayrıca planlanır.", "The core scope is packaging graphics. Structural design, prototypes and manufacturer coordination are planned separately if needed."] },
      { question: ["Etiketteki bilgileri kim sağlar?", "Who provides label information?"], answer: ["Ürün içeriği, barkod ve zorunlu metinler markanız tarafından doğrulanmış olarak sağlanmalıdır. Tasarımda okunabilir yerleşimini hazırlarız.", "Your team provides verified product information, barcodes and required copy. We organise it in a readable design."] },
    ],
  },
  {
    slug: "editoryal-tasarim", title: ["Editoryal Tasarım", "Editorial Design"], word: "Read.", label: "TYPE / GRID / NARRATIVE",
    tagline: ["İçeriğe ritim, bilgiye düzen.", "Rhythm for content. Structure for information."],
    intro: ["Katalog, rapor ve yayınları okunabilir bir görsel akışa dönüştürüyoruz. Tipografi, sayfa düzeni ve görseller arasında içeriğinizi destekleyen bir denge kuruyoruz.", "We turn catalogues, reports and publications into readable visual journeys. Typography, layouts and imagery are balanced to support your content."],
    scope: [["İçerik ve sayfa planı", "Content and pagination plan"], ["Grid ve tipografi sistemi", "Grid and typography system"], ["Tablo, grafik ve görsel yerleşimi", "Table, chart and image layout"], ["Baskı ve dijital PDF hazırlığı", "Print and digital PDF preparation"]],
    faq: [
      { question: ["Metinler tamamlanmadan başlanabilir mi?", "Can work begin before all copy is ready?"], answer: ["Örnek içerikle görsel yön geliştirilebilir. Sayfa sayısı ve son yerleşim için onaylanmış metinlere ihtiyaç vardır.", "Sample content can establish visual direction. Final copy is needed to confirm page counts and final layouts."] },
      { question: ["Dijital ve basılı sürüm hazırlanabilir mi?", "Can you prepare digital and printed versions?"], answer: ["Evet; baskı ölçüleri, bağlantılar ve dosya boyutu gibi farklı ihtiyaçları başlangıçta belirleriz.", "Yes. We agree on different needs such as print dimensions, links and file size at the start."] },
    ],
  },
  {
    slug: "kampanya-tasarimi", title: ["Kampanya Tasarımı", "Campaign Design"], word: "Impact.", label: "IDEA / MESSAGE / IMPACT",
    tagline: ["Tek fikir, güçlü bir görsel dünya.", "One idea. A compelling visual world."],
    intro: ["Lansman, duyuru ve dönemsel kampanyalar için ana fikri görünür kılıyoruz. Farklı mecralara taşınabilen, mesajını kaybetmeyen bir kampanya tasarım sistemi kuruyoruz.", "We make the core idea visible for launches, announcements and seasonal campaigns. A flexible design system carries the message across channels."],
    scope: [["Kampanya briefi ve yaratıcı yön", "Campaign brief and creative direction"], ["Ana görsel ve mesaj hiyerarşisi", "Key visual and message hierarchy"], ["Dijital ve basılı mecra uyarlamaları", "Digital and print adaptations"], ["Format listesi ve teslim paketi", "Format list and delivery package"]],
    faq: [
      { question: ["Kampanya fikrini de geliştiriyor musunuz?", "Can you develop the campaign concept?"], answer: ["Yaratıcı fikir geliştirme kapsamda yer alabilir. Hazır bir kampanya fikrini görsel dile dönüştürmek için de çalışabiliriz.", "Concept development can be included. We can also translate an existing campaign idea into a visual language."] },
      { question: ["Reklam yayınları dahil mi?", "Is ad placement included?"], answer: ["Tasarım üretimi ile medya satın alma ve reklam yönetimi ayrı hizmetlerdir. Kullanılacak mecralara göre teslimleri planlarız.", "Design production, media buying and ad management are separate services. Deliverables are planned for the intended channels."] },
    ],
  },
  {
    slug: "sosyal-medya-tasarimi", title: ["Sosyal Medya Tasarımı", "Social Media Design"], word: "Recognise.", label: "FEED / FORMAT / IDENTITY",
    tagline: ["Akışta size ait bir imza.", "A recognisable signature in the feed."],
    intro: ["Markanızın sosyal medyada tutarlı görünmesini sağlayan içerik şablonları ve görseller tasarlıyoruz. Her paylaşımın aynı dünyaya ait olduğu, esnek bir görsel sistem kuruyoruz.", "We design templates and visuals that make your brand consistent on social media. A flexible visual system makes every post feel part of the same world."],
    scope: [["Görsel dil ve içerik türleri", "Visual language and content types"], ["Gönderi, hikâye ve carousel tasarımları", "Post, story and carousel designs"], ["Kapak ve profil görsel setleri", "Cover and profile image sets"], ["Şablon kullanım notları", "Template usage notes"]],
    faq: [
      { question: ["Şablonları ekibimiz düzenleyebilir mi?", "Can our team edit the templates?"], answer: ["Kullanacağınız tasarım aracı ve ekibinizin ihtiyacına göre düzenlenebilir dosya teslimini planlayabiliriz.", "Editable delivery can be planned around your team's needs and preferred design tool."] },
      { question: ["İçerik metinleri ve paylaşım dahil mi?", "Are copywriting and publishing included?"], answer: ["Bu hizmet görsel tasarıma odaklanır. Metin üretimi, takvim ve yayın yönetimi ayrıca kapsamlandırılır.", "This service focuses on visual design. Copywriting, calendars and publishing are scoped separately."] },
    ],
  },
  {
    slug: "dijital-illustrasyon", title: ["Dijital İllüstrasyon", "Digital Illustration"], word: "Imagine.", label: "CHARACTER / COLOUR / WORLD",
    tagline: ["Hazır görsellerin ötesinde bir anlatım.", "A visual voice beyond stock imagery."],
    intro: ["Markanızın mesajını özgün çizimler, karakterler ve sahnelerle anlatıyoruz. Web, yayın ve kampanya dünyalarına uyarlanabilen bir illüstrasyon dili geliştiriyoruz.", "We express your message through original drawings, characters and scenes. An illustration language can adapt across websites, publications and campaigns."],
    scope: [["Stil araştırması ve eskizler", "Style exploration and sketches"], ["Karakter, ikon veya sahne çizimleri", "Character, icon or scene illustration"], ["Renk ve kompozisyon geliştirme", "Colour and composition development"], ["Kullanım alanına uygun dosya seti", "Application-ready file set"]],
    faq: [
      { question: ["Mevcut marka stilimize uyarlanabilir mi?", "Can illustrations match our existing brand?"], answer: ["Marka rehberi ve referansları inceleyerek renk, çizgi ve karakter yaklaşımını mevcut dünyanızla uyumlu geliştiririz.", "We review your guidelines and references to align colour, line work and character design with your brand."] },
      { question: ["Animasyon için dosya hazırlanabilir mi?", "Can files be prepared for animation?"], answer: ["Hareketlendirme ihtiyacı önceden belirlenirse katmanlı üretim planlanabilir. Animasyonun kendisi ayrı bir kapsamdır.", "Layered artwork can be planned if animation requirements are known in advance. Animation itself is a separate scope."] },
    ],
  },
  {
    slug: "sanat-yonetimi", title: ["Sanat Yönetimi", "Art Direction"], word: "Vision.", label: "DIRECTION / STYLE / COHERENCE",
    tagline: ["Tüm yaratıcı kararlar, aynı yönde.", "Every creative decision, one direction."],
    intro: ["Fotoğraf, tasarım ve hareketli görüntünün aynı görsel hikâyeyi anlatmasını sağlıyoruz. Yaratıcı ekiplerin birlikte üretebileceği net bir estetik yön ve değerlendirme çerçevesi oluşturuyoruz.", "We align photography, design and motion around one visual story. A clear aesthetic direction and review framework help creative teams produce coherent work."],
    scope: [["Yaratıcı yön ve referans panosu", "Creative direction and moodboard"], ["Renk, ışık ve kompozisyon yaklaşımı", "Colour, lighting and composition direction"], ["Üretim briefleri ve ekip koordinasyonu", "Production briefs and team coordination"], ["Görsel tutarlılık değerlendirmeleri", "Visual consistency reviews"]],
    faq: [
      { question: ["Mevcut üretim ekibimizle çalışabilir misiniz?", "Can you work with our production team?"], answer: ["Ekip rolleri ve onay akışları netleştirilerek mevcut tasarımcı, fotoğrafçı ve prodüksiyon ekipleriyle koordinasyon planlanabilir.", "We can coordinate with existing designers, photographers and production teams once roles and approval workflows are agreed."] },
      { question: ["Uygulama dosyalarının üretimi dahil mi?", "Is asset production included?"], answer: ["Sanat yönetimi yaratıcı yönlendirmeye odaklanır. Çekim, tasarım ve diğer uygulama üretimleri ayrıca kapsamlandırılır.", "Art direction focuses on creative guidance. Photography, design and other production work are scoped separately."] },
    ],
  },
];

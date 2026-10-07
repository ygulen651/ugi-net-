import type { WebService } from "./web-services";

export const digitalServices: (WebService & { word: string })[] = [
  {
    slug: "sosyal-medya-yonetimi", title: ["Sosyal Medya Yönetimi", "Social Media Management"], word: "Connect.", label: "PLAN / PUBLISH / CONNECT",
    tagline: ["Paylaşmanın ötesinde, bir iletişim düzeni.", "Beyond posting. A consistent conversation."],
    intro: ["Markanızın sosyal medya varlığını hedef, içerik ve yayın ritmi etrafında düzenliyoruz. Planlama, onay ve raporlama adımlarını görünür hale getirerek sürdürülebilir bir iletişim akışı kuruyoruz.", "We organise your social presence around goals, content and a publishing rhythm. Clear planning, approvals and reporting create a sustainable communication workflow."],
    scope: [["Hesap incelemesi ve kanal planı", "Account review and channel plan"], ["İçerik takvimi ve yayın koordinasyonu", "Content calendar and publishing coordination"], ["Marka tonu ve onay akışı", "Brand voice and approval workflow"], ["Dönemsel performans değerlendirmesi", "Periodic performance review"]],
    faq: [
      { question: ["Aylık kaç paylaşım yapılır?", "How many posts are published each month?"], answer: ["Sıklığı kanal sayısı, üretim kapasitesi ve hedeflere göre birlikte belirleriz. Her marka için aynı paylaşım sayısını önermiyoruz.", "Frequency is agreed around channel count, production capacity and goals. One posting volume does not suit every brand."] },
      { question: ["Mesaj yanıtları ve reklamlar dahil mi?", "Are message replies and ads included?"], answer: ["Topluluk yanıtları, reklam yönetimi ve medya bütçesi ayrıca tanımlanır. Erişimler ve ekip sorumlulukları başlangıçta netleştirilir.", "Community replies, ad management and media spend are defined separately. Access and team responsibilities are agreed at the start."] },
    ],
  },
  {
    slug: "icerik-stratejisi", title: ["İçerik Stratejisi", "Content Strategy"], word: "Meaning.", label: "AUDIENCE / MESSAGE / VALUE",
    tagline: ["Daha çok içerik değil, daha anlamlı içerik.", "Not more content. More meaningful content."],
    intro: ["İçerik üretimini hedef kitlenizin soruları ve markanızın uzmanlığı etrafında planlıyoruz. Konu başlıklarını, formatları ve dağıtım kanallarını birbirini destekleyen bir yapıda birleştiriyoruz.", "We plan content around your audience's questions and your expertise. Topics, formats and distribution channels become a coordinated system."],
    scope: [["İçerik envanteri ve boşluk analizi", "Content inventory and gap analysis"], ["Hedef kitle ve içerik sütunları", "Audience and content pillars"], ["Format, ton ve dağıtım planı", "Format, tone and distribution plan"], ["Editoryal takvim ve ölçüm hedefleri", "Editorial calendar and measurement goals"]],
    faq: [
      { question: ["İçerikleri de siz üretiyor musunuz?", "Do you also produce the content?"], answer: ["Strateji çıktıları üretime yol gösterir. Metin, tasarım ve video üretimi ihtiyaçlarını ayrıca kapsamlandırabiliriz.", "Strategy guides production. Copy, design and video deliverables can be scoped separately."] },
      { question: ["Mevcut içeriklerimiz kullanılabilir mi?", "Can existing content be reused?"], answer: ["Arşivdeki güncel ve uygun içerikleri belirler, yeniden düzenleme veya farklı formata uyarlama fırsatlarını planlarız.", "We identify relevant, current material in your archive and plan opportunities to refresh it or adapt it to other formats."] },
    ],
  },
  {
    slug: "topluluk-yonetimi", title: ["Topluluk Yönetimi", "Community Management"], word: "Listen.", label: "LISTEN / RESPOND / RELATE",
    tagline: ["Yalnızca yanıt vermek değil, ilişki kurmak.", "Not just answering. Building relationships."],
    intro: ["Yorum ve mesajları markanızın iletişim tonuyla karşılayan bir süreç kuruyoruz. Sık sorulan sorular, hassas durumlar ve ilgili ekibe aktarılacak talepler için net yanıt yolları hazırlıyoruz.", "We establish a process for comments and messages in your brand's voice. FAQs, sensitive situations and requests for other teams each have a clear response path."],
    scope: [["Yanıt dili ve moderasyon çerçevesi", "Response voice and moderation framework"], ["Sık sorulan sorular için yanıt kütüphanesi", "FAQ response library"], ["Talep yönlendirme ve eskalasyon akışı", "Request routing and escalation workflow"], ["Topluluk geri bildirim özeti", "Community feedback summary"]],
    faq: [
      { question: ["Günün her saati yanıt verilir mi?", "Are replies available around the clock?"], answer: ["Çalışma saatleri, kanallar ve yanıt hedefleri anlaşmada belirlenir. Kesintisiz veya anında yanıt varsayılan kapsam değildir.", "Working hours, channels and response targets are agreed in the contract. Continuous or instant replies are not assumed."] },
      { question: ["Şikâyetler nasıl ele alınır?", "How are complaints handled?"], answer: ["Onaylı yanıtlar ve sorumlu ekipler belirlenir. Sipariş, ödeme veya teknik çözüm gerektiren talepler ilgili yetkiliye aktarılır.", "Approved responses and responsible teams are defined. Requests involving orders, payments or technical fixes are routed to the appropriate owner."] },
    ],
  },
  {
    slug: "google-ads", title: ["Google Ads", "Google Ads"], word: "Intent.", label: "INTENT / MESSAGE / ACTION",
    tagline: ["Doğru arayışla, doğru mesajı buluşturun.", "Match the right intent with the right message."],
    intro: ["Arama niyetini, teklifinizi ve açılış sayfasını birlikte değerlendiriyoruz. Reklam çalışmalarını hedeflerinizle ilişkilendirerek test, ölçüm ve iyileştirme odaklı bir yönetim planı hazırlıyoruz.", "We consider search intent, your offer and the landing page together. Campaign management is planned around your goals, testing, measurement and improvement."],
    scope: [["Hesap incelemesi ve hedef tanımı", "Account review and goal definition"], ["Kampanya yapısı ve mesaj planı", "Campaign structure and messaging plan"], ["Dönüşüm ölçümleme kontrolü", "Conversion measurement review"], ["Bütçe takibi ve dönemsel raporlama", "Budget monitoring and periodic reporting"]],
    faq: [
      { question: ["Reklam bütçesi hizmet ücretine dahil mi?", "Is media spend included in the service fee?"], answer: ["Medya bütçesi ile yönetim hizmeti ayrı kalemlerdir. Harcama limiti ve ödeme sorumluluğu başlangıçta belirlenir.", "Media spend and management fees are separate. Spending limits and payment responsibilities are agreed at the start."] },
      { question: ["Satış veya başvuru garantisi var mı?", "Are sales or leads guaranteed?"], answer: ["Hayır. Sonuçlar teklif, rekabet, bütçe ve site deneyimi gibi etkenlere bağlıdır. Hedefleri ve değerlendirme dönemini birlikte belirleriz.", "No. Results depend on your offer, competition, budget and site experience. Goals and review periods are agreed together."] },
    ],
  },
  {
    slug: "meta-reklamlari", title: ["Meta Reklamları", "Meta Ads"], word: "Reach.", label: "CREATIVE / AUDIENCE / LEARN",
    tagline: ["Yaratıcı mesajı doğru bağlamla buluşturun.", "Put creative messages in the right context."],
    intro: ["Markanızın teklifini farklı görsel ve mesaj yaklaşımlarıyla test edebileceğiniz reklam çalışmaları planlıyoruz. Kreatif üretim, hedef ve ölçümleme ihtiyaçlarını birlikte ele alıyoruz.", "We plan campaigns that test your offer through different visuals and messaging approaches. Creative production, goals and measurement needs are considered together."],
    scope: [["Hesap ve mevcut kampanya incelemesi", "Account and existing campaign review"], ["Kreatif varyasyon ve test planı", "Creative variations and testing plan"], ["Kampanya kurulumu ve bütçe takibi", "Campaign setup and budget monitoring"], ["Sonuç analizi ve iyileştirme önerileri", "Results analysis and improvement recommendations"]],
    faq: [
      { question: ["Reklam görselleri dahil mi?", "Are ad creatives included?"], answer: ["Mevcut görsellerle çalışabilir veya yeni üretimi planlayabiliriz. Tasarım ve video adedi ile revizyonlar teklifte ayrıca belirtilir.", "We can use existing assets or plan new production. Design and video counts and revisions are specified in the proposal."] },
      { question: ["Hesap erişimlerini nasıl paylaşacağız?", "How will account access be shared?"], answer: ["Gerekli işlemler için rol bazlı erişim planlarız; kişisel şifre paylaşımı istemeyiz. Hesap sahipliği markanızda kalır.", "We plan role-based access for the required work rather than requesting personal passwords. Account ownership stays with your brand."] },
    ],
  },
  {
    slug: "donusum-optimizasyonu", title: ["Dönüşüm Optimizasyonu", "Conversion Optimization"], word: "Improve.", label: "OBSERVE / TEST / IMPROVE",
    tagline: ["Ziyaretten aksiyona giden yolu sadeleştirin.", "Simplify the path from visit to action."],
    intro: ["Kullanıcıların form, sepet veya başvuru akışında nerede zorlandığını araştırıyoruz. Veri ve kullanılabilirlik bulgularıyla iyileştirme hipotezleri oluşturup öncelikli testleri planlıyoruz.", "We investigate friction in forms, carts and enquiry flows. Data and usability findings inform improvement hypotheses and prioritised tests."],
    scope: [["Dönüşüm akışı ve ölçüm denetimi", "Conversion flow and measurement audit"], ["Sürtünme noktaları ve hipotez listesi", "Friction review and hypothesis backlog"], ["Arayüz ve mesaj iyileştirme önerileri", "Interface and messaging recommendations"], ["Test planı ve sonuç değerlendirmesi", "Test plan and results review"]],
    faq: [
      { question: ["Her sitede A/B testi yapılabilir mi?", "Is A/B testing suitable for every site?"], answer: ["Testin anlamlı olması için yeterli trafik ve ölçülebilir olay gerekir. Düşük trafikte kullanılabilirlik incelemesi gibi farklı yöntemlerle başlayabiliriz.", "Meaningful tests require sufficient traffic and measurable events. Lower-traffic sites can start with methods such as usability reviews."] },
      { question: ["Önerilerin uygulanması dahil mi?", "Is implementation included?"], answer: ["Analiz, tasarım ve yazılım uygulaması ayrı kapsamlar olarak belirlenebilir. Mevcut geliştirme ekibinizle de koordinasyon kurabiliriz.", "Analysis, design and development can be scoped separately. We can also coordinate with your existing development team."] },
    ],
  },
  {
    slug: "seo-icerik", title: ["SEO & İçerik", "SEO & Content"], word: "Discover.", label: "SEARCH / RELEVANCE / CONTENT",
    tagline: ["Aranan sorulara, anlamlı cevaplar.", "Useful answers to real searches."],
    intro: ["Sitenizin içerik yapısını insanların aradığı konular ve markanızın uzmanlığıyla buluşturuyoruz. Teknik inceleme, konu planı ve içerik iyileştirmelerini sürdürülebilir bir yol haritasında topluyoruz.", "We connect your site's content with the topics people search for and your expertise. Technical reviews, topic planning and content improvements form a sustainable roadmap."],
    scope: [["Teknik durum ve içerik envanteri", "Technical review and content inventory"], ["Arama niyeti ve konu araştırması", "Search intent and topic research"], ["Sayfa yapısı ve iç bağlantı önerileri", "Page structure and internal linking recommendations"], ["İçerik briefleri ve gelişim takibi", "Content briefs and progress tracking"]],
    faq: [
      { question: ["İlk sıraya çıkma garantisi veriyor musunuz?", "Do you guarantee first-place rankings?"], answer: ["Hayır. Sıralamalar üzerinde tam kontrol yoktur. Uygulanabilir iyileştirmeler, içerik kalitesi ve gözlemlenen gelişim üzerinden çalışırız.", "No. Rankings cannot be fully controlled. We focus on practical improvements, content quality and observed progress."] },
      { question: ["İçerik üretimi nasıl onaylanır?", "How is content approved?"], answer: ["Konu ve brief onayından sonra taslaklar hazırlanır. Markanıza veya ürününüze ait bilgilerin doğruluğu ilgili ekibinizle kontrol edilir.", "Drafts follow topic and brief approval. Your team verifies information specific to your brand or products."] },
    ],
  },
  {
    slug: "analiz-raporlama", title: ["Analiz & Raporlama", "Analytics & Reporting"], word: "Understand.", label: "DATA / CONTEXT / DECISION",
    tagline: ["Rakamları değil, ne söylediklerini konuşalım.", "Understand what the numbers are telling you."],
    intro: ["Farklı kanallardaki verileri karar almaya yardımcı olacak bir raporlama düzenine taşıyoruz. Hedefleri, olayları ve metrik tanımlarını netleştirerek aynı sonuçları aynı dille değerlendirmeyi kolaylaştırıyoruz.", "We organise cross-channel data into reporting that supports decisions. Clear goals, events and metric definitions create a shared understanding of results."],
    scope: [["Ölçüm planı ve metrik sözlüğü", "Measurement plan and metric glossary"], ["Veri kaynakları ve izleme kontrolleri", "Data source and tracking checks"], ["Gösterge paneli ve rapor şablonları", "Dashboards and report templates"], ["Bulgu özeti ve aksiyon önerileri", "Findings summary and action recommendations"]],
    faq: [
      { question: ["Geçmiş veriler de raporlanabilir mi?", "Can historical data be reported?"], answer: ["Erişilebilir ve daha önce kaydedilmiş verileri değerlendirebiliriz. Kaydedilmemiş geçmiş olaylar geriye dönük oluşturulamaz.", "We can review accessible, previously recorded data. Events that were never recorded cannot be reconstructed retrospectively."] },
      { question: ["Rapor ne sıklıkla hazırlanır?", "How often are reports prepared?"], answer: ["İş hedefi ve veri akışına göre rapor sıklığını belirleriz. Canlı panel ile yorumlanmış dönem raporu farklı teslimlerdir.", "Frequency follows business goals and data availability. A live dashboard and an interpreted periodic report are distinct deliverables."] },
    ],
  },
  {
    slug: "dijital-marka-stratejisi", title: ["Dijital Marka Stratejisi", "Digital Brand Strategy"], word: "Align.", label: "CHANNEL / EXPERIENCE / DIRECTION",
    tagline: ["Dijitalde her kanal, aynı hedefe.", "Every digital channel, one direction."],
    intro: ["Web, sosyal medya, içerik ve reklam çalışmalarınızı ortak bir marka hedefinde birleştiriyoruz. Her kanalın rolünü tanımlayıp kaynaklarınızı önceliklere göre kullanabileceğiniz bir yol haritası hazırlıyoruz.", "We align web, social, content and advertising around a shared brand goal. Clear channel roles and priorities create a roadmap for using your resources effectively."],
    scope: [["Dijital varlık ve deneyim incelemesi", "Digital presence and experience review"], ["Hedef kitle yolculuğu ve kanal rolleri", "Audience journey and channel roles"], ["Mesaj tutarlılığı ve öncelik planı", "Messaging consistency and priority plan"], ["Aşamalı yol haritası ve başarı ölçütleri", "Phased roadmap and success measures"]],
    faq: [
      { question: ["Marka stratejisinden farkı nedir?", "How does this differ from brand strategy?"], answer: ["Markanın temel konumunu dijital temas noktalarına taşımaya odaklanır. Kanal seçimi, deneyim ve uygulama öncelikleri bu çalışmanın merkezindedir.", "It focuses on applying brand positioning across digital touchpoints. Channel choices, experience and implementation priorities are central."] },
      { question: ["Yol haritasını kendi ekibimiz uygulayabilir mi?", "Can our own team implement the roadmap?"], answer: ["Evet. Sorumluluklar, bağımlılıklar ve teslim beklentileri açıkça tanımlanabilir. Uygulama desteği ayrıca planlanır.", "Yes. Responsibilities, dependencies and deliverables can be clearly defined. Implementation support is planned separately."] },
    ],
  },
];

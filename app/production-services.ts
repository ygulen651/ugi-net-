import type { WebService } from "./web-services";

export const productionServices: (WebService & { word: string })[] = [
  {
    slug: "urun-fotografciligi", title: ["Ürün Fotoğrafçılığı", "Product Photography"], word: "Detail.", label: "PRODUCT / LIGHT / DETAIL",
    tagline: ["Ürününüzü anlatan detaylar.", "Details that tell your product's story."],
    intro: ["E-ticaret kataloğundan kampanya görsellerine kadar ürününüzün formunu, dokusunu ve kullanımını öne çıkaran fotoğraflar hazırlıyoruz. Çekim dilini markanız ve yayın mecralarınızla birlikte planlıyoruz.", "From store catalogues to campaign imagery, we photograph your product's shape, texture and use. The visual approach is planned around your brand and publishing channels."],
    scope: [["Referans panosu ve çekim listesi", "Moodboard and shot list"], ["Işık, fon ve ürün yerleşimi", "Lighting, backgrounds and styling"], ["Renk düzenleme ve rötuş", "Colour correction and retouching"], ["Mecraya uygun görsel teslimleri", "Channel-ready image exports"]],
    faq: [
      { question: ["Ürünleri size göndermem gerekir mi?", "Do I need to send you the products?"], answer: ["Ürün boyutu ve çekim koşullarına göre stüdyo veya yerinde çekim planlarız. Taşıma, hazırlık ve iade sorumlulukları önceden belirlenir.", "We plan a studio or on-location shoot according to product size and requirements. Transport, preparation and returns are agreed beforehand."] },
      { question: ["Kaç fotoğraf teslim edilir?", "How many images are delivered?"], answer: ["Ürün başına açı, varyasyon ve rötuş sayısı çekim listesinde netleştirilir. Ham dosya teslimi ayrıca kapsamlandırılır.", "Angles, variations and retouched image counts are agreed in the shot list. Raw file delivery is scoped separately."] },
    ],
  },
  {
    slug: "mekan-mimari-cekim", title: ["Mekân & Mimari Çekim", "Space & Architecture"], word: "Space.", label: "SPACE / LIGHT / PERSPECTIVE",
    tagline: ["Mekânın karakterini görünür kılın.", "Reveal the character of a space."],
    intro: ["Mimari projelerin, otellerin ve çalışma alanlarının atmosferini doğru ışık ve kadrajla anlatıyoruz. Mekânın bütünü ile malzeme ve tasarım detaylarını aynı görsel hikâyede buluşturuyoruz.", "We capture the atmosphere of architecture, hotels and workplaces through considered lighting and framing. Overall views and material details form one coherent visual story."],
    scope: [["Mekân keşfi ve ışık planı", "Location review and lighting plan"], ["İç ve dış mekân çekimleri", "Interior and exterior photography"], ["Perspektif ve renk düzenleme", "Perspective and colour correction"], ["Web ve sunum için teslimler", "Web and presentation exports"]],
    faq: [
      { question: ["Çekimden önce mekân hazırlanmalı mı?", "Should the location be prepared?"], answer: ["Temizlik, mobilya düzeni ve çekimde görünmesini istemediğiniz unsurlar için hazırlık listesi paylaşırız.", "We share a preparation checklist for cleaning, furniture placement and items that should stay out of frame."] },
      { question: ["Çekim saati nasıl seçilir?", "How is the shoot time chosen?"], answer: ["Cephe yönü, doğal ışık ve mekânın kullanım saatlerine göre planlarız. Hava koşulları dış çekim takvimini etkileyebilir.", "We plan around orientation, natural light and opening hours. Weather can affect the exterior shoot schedule."] },
    ],
  },
  {
    slug: "yemek-fotografciligi", title: ["Yemek Fotoğrafçılığı", "Food Photography"], word: "Taste.", label: "FOOD / TEXTURE / STORY",
    tagline: ["Lezzetin ilk izlenimi.", "The first impression of flavour."],
    intro: ["Menü, paket servis ve sosyal medya için yemeklerin dokusunu ve sunumunu öne çıkarıyoruz. Mutfağınızın çalışma ritmine uygun bir çekim akışıyla tutarlı bir görsel dil oluşturuyoruz.", "We highlight texture and presentation for menus, delivery listings and social media. A shoot planned around your kitchen's workflow creates a consistent visual language."],
    scope: [["Menü ve çekim sıralaması", "Menu review and shoot sequence"], ["Sunum, aksesuar ve fon planı", "Plating, props and backgrounds"], ["Detay ve masa kompozisyonları", "Detail and table compositions"], ["Rötuş ve farklı oranlarda çıktılar", "Retouching and aspect-ratio exports"]],
    faq: [
      { question: ["Yemekleri kim hazırlar?", "Who prepares the food?"], answer: ["Yemek hazırlığı mutfak ekibiyle koordine edilir. Stilist, aksesuar ve ek hazırlık ihtiyaçları teklifte ayrıca belirtilir.", "Food preparation is coordinated with your kitchen. Styling, props and additional preparation are listed separately in the proposal."] },
      { question: ["Fotoğraflar menü ve sosyal medyada kullanılabilir mi?", "Can the images be used on menus and social media?"], answer: ["Kullanım mecralarını baştan belirleyerek gerekli kadraj ve dosya boyutlarını planlarız.", "We agree on the publishing channels in advance and plan the required framing and file sizes."] },
    ],
  },
  {
    slug: "marka-kurumsal-film", title: ["Marka & Kurumsal Film", "Brand & Corporate Film"], word: "Story.", label: "PEOPLE / PURPOSE / FILM",
    tagline: ["Markanızın hikâyesi, kendi sesiyle.", "Your brand's story, in its own voice."],
    intro: ["Markanızın insanlarını, yaklaşımını ve ürettiği değeri bir film anlatısında birleştiriyoruz. Mesajı netleştirip senaryo, çekim ve kurguyu aynı hedef etrafında şekillendiriyoruz.", "We bring your people, approach and value together in a film narrative. A clear message guides the script, shoot and edit."],
    scope: [["Anlatı, senaryo ve storyboard", "Narrative, script and storyboard"], ["Röportaj ve çekim organizasyonu", "Interviews and shoot coordination"], ["Kurgu, renk ve ses düzenleme", "Editing, colour and sound"], ["Ana film ve kısa versiyonlar", "Main film and shorter versions"]],
    faq: [
      { question: ["Film süresi ne olmalı?", "How long should the film be?"], answer: ["Süreyi yayın mecrası, hedef kitle ve anlatılacak mesaj belirler. Ana film ile kısa uyarlamaları birlikte planlayabiliriz.", "Length follows the channel, audience and message. We can plan a main film alongside shorter adaptations."] },
      { question: ["Oyuncu ve seslendirme dahil mi?", "Are actors and voice-over included?"], answer: ["Oyuncu, seslendirme, müzik ve kullanım lisansları ihtiyaçlara göre ayrı kalemler olarak netleştirilir.", "Actors, voice-over, music and usage licences are specified as separate items according to the brief."] },
    ],
  },
  {
    slug: "urun-tanitim-filmi", title: ["Ürün Tanıtım Filmi", "Product Films"], word: "Show.", label: "PRODUCT / ACTION / BENEFIT",
    tagline: ["Özellikten deneyime, hareketle.", "From features to experience, in motion."],
    intro: ["Ürününüzün ne yaptığını ve kullanıcı için neden anlamlı olduğunu gösteriyoruz. Detay çekimlerini kullanım senaryoları ve anlaşılır bir anlatımla birleştiriyoruz.", "We show what your product does and why it matters to users. Detail shots, use cases and a clear narrative work together."],
    scope: [["Ürün mesajı ve kullanım senaryosu", "Product messaging and use cases"], ["Detay ve uygulama çekimleri", "Detail and demonstration footage"], ["Açıklayıcı grafik ve metinler", "Explanatory graphics and text"], ["Web, reklam ve sosyal medya uyarlamaları", "Web, ad and social adaptations"]],
    faq: [
      { question: ["Teknik bir ürün de anlatılabilir mi?", "Can a technical product be explained?"], answer: ["Teknik ekibinizle özellikleri doğrular, hedef kitlenin anlayacağı bir anlatıya dönüştürürüz. İddiaların doğruluğu için ürün bilgisi gerekir.", "We verify features with your technical team and translate them into a clear narrative. Product information is needed to substantiate claims."] },
      { question: ["Animasyon kullanabilir miyiz?", "Can animation be included?"], answer: ["Çekimle gösterilemeyen detaylar için grafik veya animasyon planlanabilir. 3D modelleme ve ek üretim ayrıca kapsamlandırılır.", "Graphics or animation can explain details that footage cannot show. 3D modelling and additional production are scoped separately."] },
    ],
  },
  {
    slug: "drone-cekimi", title: ["Drone Çekimi", "Drone Filming"], word: "Above.", label: "PERSPECTIVE / SCALE / MOTION",
    tagline: ["Hikâyenize yeni bir perspektif.", "A new perspective on your story."],
    intro: ["Mekânın ölçeğini ve çevresiyle ilişkisini havadan görüntülerle anlatıyoruz. Çekimi lokasyonun uygunluğu, güvenlik koşulları ve projenin görsel ihtiyacı üzerinden planlıyoruz.", "Aerial imagery reveals a location's scale and surroundings. Each shoot is planned around location feasibility, safety conditions and the project's visual needs."],
    scope: [["Lokasyon ve çekim uygunluğu değerlendirmesi", "Location and shoot feasibility review"], ["Hava koşullarına göre çekim planı", "Weather-aware shoot planning"], ["Havadan fotoğraf ve video kadrajları", "Aerial photo and video framing"], ["Seçki, renk düzenleme ve teslim", "Selection, colour correction and delivery"]],
    faq: [
      { question: ["Her lokasyonda çekim yapılabilir mi?", "Can you film at any location?"], answer: ["Hayır. Lokasyon, izinler ve güvenli çalışma koşulları değerlendirilmeden çekim taahhüt edilmez. Gerekli izin sorumlulukları planlama sırasında netleştirilir.", "No. Location, permissions and safe operating conditions must be assessed before confirming a shoot. Permission responsibilities are clarified during planning."] },
      { question: ["Hava uygun olmazsa ne olur?", "What happens in unsuitable weather?"], answer: ["Alternatif çekim günü ve erteleme koşulları önceden belirlenir. Güvenli olmayan koşullarda çekim gerçekleştirilmez.", "Alternative dates and postponement terms are agreed in advance. Filming does not proceed in unsafe conditions."] },
    ],
  },
  {
    slug: "sosyal-medya-videolari", title: ["Sosyal Medya Videoları", "Social Media Videos"], word: "Watch.", label: "HOOK / STORY / SHARE",
    tagline: ["Kısa sürede, net bir hikâye.", "A clear story in a short format."],
    intro: ["Markanızın mesajını sosyal medyanın izleme alışkanlıklarına uygun video serilerine dönüştürüyoruz. İlk kare, anlatım ritmi ve sessiz izleme deneyimini birlikte ele alıyoruz.", "We turn your message into video series shaped for social viewing. The opening frame, pacing and sound-off experience are considered together."],
    scope: [["İçerik fikri ve kısa senaryo", "Content concepts and short scripts"], ["Dikey ve yatay çekim planı", "Vertical and horizontal shoot planning"], ["Kurgu, altyazı ve kapak görselleri", "Editing, captions and cover images"], ["Seri ve mecra uyarlamaları", "Series and channel adaptations"]],
    faq: [
      { question: ["Mevcut görüntülerimiz kullanılabilir mi?", "Can you use our existing footage?"], answer: ["Görüntü kalitesi, oranı ve kullanım izinleri uygunsa mevcut arşivinizi değerlendirebiliriz.", "We can use your archive if its quality, aspect ratios and usage permissions fit the project."] },
      { question: ["Paylaşım yönetimi de dahil mi?", "Is publishing management included?"], answer: ["Video üretimi ile hesap ve yayın yönetimi ayrı kapsamlardır. İhtiyacınıza göre birlikte planlanabilir.", "Video production and account or publishing management are separate scopes that can be planned together."] },
    ],
  },
  {
    slug: "motion-design", title: ["Motion Design", "Motion Design"], word: "Move.", label: "TYPE / SHAPE / MOTION",
    tagline: ["Görsel kimliğinize hareket katın.", "Put your visual identity in motion."],
    intro: ["Tipografi, şekil ve illüstrasyonları markanıza ait bir hareket diline dönüştürüyoruz. Logo animasyonlarından açıklayıcı videolara kadar mesajı destekleyen ritimler tasarlıyoruz.", "We turn typography, shapes and illustration into a motion language for your brand. From logo animations to explainers, movement supports the message."],
    scope: [["Stil kareleri ve storyboard", "Style frames and storyboard"], ["2D animasyon ve geçiş tasarımı", "2D animation and transitions"], ["Ses ve hareket senkronu", "Sound and motion synchronisation"], ["Mecraya uygun video çıktıları", "Channel-ready video exports"]],
    faq: [
      { question: ["Başlamak için hangi dosyalar gerekir?", "Which files are needed to start?"], answer: ["Varsa vektör logo, marka rehberi ve kullanılacak metinleri isteriz. Eksik görsel varlıkların üretimi ayrıca planlanır.", "We request vector logos, brand guidelines and copy where available. Creating missing visual assets is planned separately."] },
      { question: ["Kaynak proje dosyaları teslim edilir mi?", "Are editable project files delivered?"], answer: ["Kaynak dosya teslimi, font ve eklenti bağımlılıklarıyla birlikte sözleşmede belirlenir; video tesliminden ayrı değerlendirilir.", "Editable files are agreed in the contract, including font and plugin dependencies, separately from final video delivery."] },
    ],
  },
  {
    slug: "yaratici-kurgu", title: ["Yaratıcı Kurgu", "Creative Editing"], word: "Frame.", label: "SELECT / CUT / FEEL",
    tagline: ["Görüntülerden güçlü bir anlatıya.", "From footage to a compelling narrative."],
    intro: ["Çekilmiş görüntülerin içindeki hikâyeyi buluyor; ritim, ses ve geçişlerle şekillendiriyoruz. Markanızın tonu ve yayın hedefi doğrultusunda odaklı bir izleme deneyimi oluşturuyoruz.", "We find the story within your footage and shape it through pacing, sound and transitions. Your brand's tone and publishing goals guide the edit."],
    scope: [["Arşiv inceleme ve görüntü seçkisi", "Archive review and footage selection"], ["Anlatı kurgusu ve ritim", "Narrative editing and pacing"], ["Renk, ses ve altyazı düzenleme", "Colour, sound and caption editing"], ["Ana kurgu ve versiyon teslimleri", "Master edit and version delivery"]],
    faq: [
      { question: ["Görüntüleri nasıl paylaşmalıyım?", "How should I share the footage?"], answer: ["Orijinal dosyalar, varsa ses kayıtları ve çekim notları tercih edilir. Aktarım yöntemi ve klasör yapısını başlangıçta belirleriz.", "Original files, separate audio and shoot notes are preferred. Transfer methods and folder structure are agreed at the start."] },
      { question: ["Revizyon süreci nasıl ilerler?", "How do revisions work?"], answer: ["Kurgu taslağı üzerinde zaman kodlu, toplu geri bildirim alırız. Revizyon turu sayısı ve kapsam değişiklikleri teklifte tanımlanır.", "We collect consolidated, time-coded feedback on a draft edit. Revision rounds and scope changes are defined in the proposal."] },
    ],
  },
];

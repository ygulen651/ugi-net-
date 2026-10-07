import { type Pair, type ServiceKey } from "./content";
import { webServices, type WebService } from "./web-services";
import { productionServices } from "./production-services";
import { designServices } from "./design-services";
import { digitalServices } from "./digital-services";

export type ServicePageContent = WebService & { category: ServiceKey; word: string };

const webWords = ["Build.", "Shop.", "Sync.", "Stand out.", "Feel.", "Act.", "Adapt.", "Faster.", "Evolve."];
export const serviceCatalog: ServicePageContent[] = [
  ...webServices.map((service, index) => ({ ...service, category: "web" as const, word: webWords[index] })),
  ...productionServices.map(service => ({ ...service, category: "production" as const })),
  ...designServices.map(service => ({ ...service, category: "design" as const })),
  ...digitalServices.map(service => ({ ...service, category: "digital" as const })),
];

export function serviceHref(title: string) {
  const service = serviceCatalog.find(item => item.title.includes(title));
  return service ? `/hizmetler/${service.slug}` : undefined;
}

type ProcessStep = { title: Pair; text: Pair };
export const serviceProcesses: Record<ServiceKey, ProcessStep[]> = {
  web: [
    { title: ["Önce doğru sorular.", "The right questions first."], text: ["Hedeflerinizi, mevcut yapınızı ve kullanıcı ihtiyaçlarını birlikte ele alır; kapsamı ve öncelikleri netleştiririz.", "We review your goals, current setup and user needs together to define scope and priorities."] },
    { title: ["Fikirden uygulamaya.", "From idea to implementation."], text: ["Kararlaştırılan kapsamı küçük, değerlendirilebilir adımlarla hayata geçirir; geri bildirimlerle geliştiririz.", "We deliver the agreed scope in manageable, reviewable steps and refine the work with your feedback."] },
    { title: ["Kontrol. Teslim. Gelişim.", "Review. Deliver. Improve."], text: ["Farklı ekran ve kullanım senaryolarını kontrol eder, teslim notlarını hazırlar ve sonraki adımları planlarız.", "We check screen sizes and usage scenarios, prepare handover notes and plan the next steps."] },
  ],
  production: [
    { title: ["Hikâyeyi planlarız.", "Plan the story."], text: ["Mesajı, görsel referansları ve kullanım mecralarını netleştirir; çekim veya üretim listesini birlikte onaylarız.", "We clarify the message, visual references and publishing channels, then agree on the shoot or production list."] },
    { title: ["Kadrajı hayata geçiririz.", "Bring the frame to life."], text: ["Çekim, animasyon veya kurgu aşamasını onaylanan yaratıcı yön ve üretim takvimine göre yürütürüz.", "Photography, filming, animation or editing follows the approved creative direction and production schedule."] },
    { title: ["Son dokunuş, doğru format.", "Final polish, the right format."], text: ["Seçki ve revizyonların ardından görüntü, renk ve gerekiyorsa ses kontrollerini yapar; belirlenen formatları teslim ederiz.", "After selection and revisions, we review image quality, colour and audio where relevant, then deliver the agreed formats."] },
  ],
  design: [
    { title: ["Karakteri keşfederiz.", "Discover the character."], text: ["Markanızın hedeflerini ve kullanım alanlarını dinler, referanslar ve araştırmayla yaratıcı yönü belirleriz.", "We explore your goals and applications, then establish creative direction through research and references."] },
    { title: ["Fikre biçim veririz.", "Give the idea form."], text: ["Konseptleri geliştirir, seçilen yönü geri bildirimlerle olgunlaştırır ve uygulama ihtiyaçlarına uyarlarız.", "We develop concepts, refine the selected direction with feedback and adapt it to practical requirements."] },
    { title: ["Bir sisteme dönüştürürüz.", "Make it a system."], text: ["Onaylanan çalışmayı kullanım notları, gerekli varyasyonlar ve kapsamda belirlenen dosyalarla teslim ederiz.", "The approved work is delivered with usage notes, required variations and the files agreed in scope."] },
  ],
  digital: [
    { title: ["Hedefi netleştiririz.", "Clarify the goal."], text: ["Mevcut kanalları, erişilebilir verileri ve iş hedeflerini inceler; başarıyı nasıl değerlendireceğimizi belirleriz.", "We review channels, available data and business goals, then define how progress will be assessed."] },
    { title: ["Planlar, uygularız.", "Plan and implement."], text: ["Kanal, içerik veya ölçüm planını oluşturur; sorumlulukları ve onay adımlarını belirleyerek uygulamaya geçeriz.", "We build the channel, content or measurement plan and agree on responsibilities and approvals before implementation."] },
    { title: ["Öğrenir, iyileştiririz.", "Learn and improve."], text: ["Sonuçları bağlamıyla değerlendirir, bulguları paylaşır ve sonraki dönemin önceliklerini birlikte güncelleriz.", "We interpret results in context, share findings and update priorities for the next period together."] },
  ],
};

export const servicePricingNotes: Record<ServiceKey, Pair> = {
  web: ["Sayfa ve özellik sayısı, içerik hazırlığı, entegrasyonlar ve teslim kapsamı üzerinden bir çalışma planı çıkarırız. İhtiyaçlar netleşmeden sabit bir süre veya ücret belirtmeyiz.", "We plan around page and feature counts, content readiness, integrations and deliverables. We do not quote a fixed timeline or price before understanding the scope."],
  production: ["Çekim veya üretim süresi, ekip, lokasyon, teslim sayısı ve kullanım ihtiyaçları üzerinden planlama yaparız. Ek üretim, lisans ve revizyon koşulları teklifte belirtilir.", "Planning considers shoot or production time, crew, locations, deliverable counts and usage needs. Additional production, licences and revision terms are specified in the proposal."],
  design: ["Konsept, uygulama ve varyasyon sayısı ile teslim formatlarını birlikte belirleriz. Revizyon turları, lisans ihtiyaçları ve üretim maliyetleri teklifte netleştirilir.", "We agree on concepts, applications, variation counts and delivery formats. Revision rounds, licensing needs and production costs are clarified in the proposal."],
  digital: ["Kanal sayısı, mevcut veri yapısı, üretim ve yönetim kapsamına göre planlama yaparız. Medya bütçesi, üçüncü taraf araçlar ve ek üretimler hizmet bedelinden ayrı belirtilir.", "Planning follows channel count, available data and production and management scope. Media spend, third-party tools and additional production are listed separately from service fees."],
};

import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import TestimonialTrustCard from "@/components/sections/testimonial/TestimonialTrustCard";
import HeroWorkScrollStack from "@/components/sections/hero/HeroWorkScrollStack";
import AboutTestimonialParallax from "@/components/sections/about/AboutTestimonialParallax";
import FeaturesBentoGridCta from "@/components/sections/features/FeaturesBentoGridCta";
import FaqTabbedAccordion from "@/components/sections/faq/FaqTabbedAccordion";
import ContactSplitFormParallax from "@/components/sections/contact/ContactSplitFormParallax";
import CornerGlowBackground from "@/components/ui/CornerGlowBackground";

export default function HomePage() {
  return (
    <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
      <SiteBackgroundSlot />
      <CornerGlowBackground position="fixed" />

      <div id="hero" data-section="hero">
        <div id="work" data-section="work">
          <HeroWorkScrollStack
            textAnimation="fade"
            heroAnimationDelay={0}
            tag="وكالة مسار الرقمية"
            title="نبني مواقع وتجارب رقمية"
            titleHighlight="تقود عملك للقمة."
            description="تصميم وتطوير مواقع وتطبيقات ويب احترافية مخصصة للشركات والعلامات التجارية الطموحة."
            descriptionMuted="في مسار، نجمع بين الإبداع البصري والأداء الفني الفائق لنقدم لك موقعاً متميزاً يجذب العملاء ويحقق أعلى معدلات التحويل."
            primaryButton={{
              text: "ابدأ مشروعك الآن",
              href: "#contact",
              avatarSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp",
              avatarLabel: "مسار",
            }}
            sectionTag="نماذج من أعمالنا"
            sectionTitle="مشاريع رقمية نفخر بإطلاقها"
            sectionDescription="جولة في أبرز المواقع والمنصات التي طورها فريق مسار لشركات ومؤسسات رائدة."
            items={[
              {
                title: "منصة فاخرة للتجارة الإلكترونية",
                description: "موقع إلكتروني متكامل للبيع بالتجزئة مع بوابة دفع آمنة وتجربة مستخدم سلسة وعالية السرعة.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-1.webp",
                tag: "متجر إلكتروني",
              },
              {
                title: "موقع مجموعة الأفق الاستثمارية",
                description: "موقع تعريفي فاخر للشركات يوفر تجربة تصفح تفاعلية وتصميماً يعكس الهوية المؤسسية القوية.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-2.webp",
                tag: "موقع شركات",
              },
              {
                title: "منصة مسار لإدارة الخدمات الرقمية",
                description: "تطبيق ويب تفاعلي حديث يسهل إدارة المشاريع والتواصل الفعال بين فريق العمل والعملاء.",
                imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/screen-3.webp",
                tag: "تطبيق ويب",
              },
            ]}
            secondaryButton={{ text: "استكشف خدمات مسار", href: "#services" }}
          />
        </div>
      </div>

      <TestimonialTrustCard
        textAnimation="fade"
        quote="التعامل مع وكالة مسار كان قراراً فارقاً لمشروعنا. تم تسليم الموقع الإلكتروني باحترافية عالية وبسرعة فائقة تتجاوز كافة التوقعات."
        rating={5}
        author="سعود الشمري — المدير التنفيذي لشركة نماء"
        avatars={[
          { name: "سعود الشمري", imageSrc: "https://randomuser.me/api/portraits/men/75.jpg" },
        ]}
      />

      <div id="about" data-section="about">
        <AboutTestimonialParallax
          textAnimation="fade"
          tag="عن مسار"
          quote="في مسار، لا نصمم مجرد صفحات ويب، بل نبني بيئة رقمية متكاملة تمنح علامتك التجارية الحضور والتميز الذي تستحقه."
          author="فريق وكالة مسار"
          role="حلول تطوير الويب المتكاملة"
          imageSrc="https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp?_wi=2"
          socialLinks={[
            { icon: "Twitter", label: "تويتر", href: "#" },
            { icon: "Linkedin", label: "لينكد إن", href: "#" },
            { icon: "Instagram", label: "إنستغرام", href: "#" },
          ]}
        />
      </div>

      <div id="services" data-section="services">
        <FeaturesBentoGridCta
          textAnimation="fade"
          tag="خدمات مسار"
          title="حلول ويب شاملة لتنمية مشروعك"
          description="نقدم مجموعة واسعة من خدمات الويب والتصميم المبتكر المصممة خصيصاً لتلبية احتياجات أعمالك والوصول لأهدافك."
          features={[
            {
              title: "تطوير المواقع المخصصة",
              description: "نصمم ونطور مواقع إلكترونية فريدة متجاوبة كلياً مع الجوال والكمبيوتر، مع الالتزام بأحدث معايير الأمان والسرعة.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/website.webp",
            },
            {
              title: "تصميم واجهات وتجربة المستخدم (UI/UX)",
              description: "نبتكر واجهات تفاعلية جذابة وسلسة تضمن لزوار موقعك تجربة تصفح ممتازة وسهولة الوصول للمعلومات.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/product-design.webp",
            },
            {
              title: "تطوير المتاجر الإلكترونية",
              description: "نبني متاجر إلكترونية احترافية سهلة الإدارة ومزودة بجميع أنظمة الدفع والتسويق لزيادة مبيعاتك وأرباحك.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/photography.webp",
            },
            {
              title: "تحسين محركات البحث والأداء (SEO)",
              description: "نجهّز موقعك ليتصدر نتائج البحث الأولى في جوجل مع تسريع الأداء وتحسين جودة تجربة المستفيد.",
              imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/videos.webp",
            },
          ]}
          ctaButton={{
            text: "اطلب موقعك الآن",
            href: "#contact",
            avatarSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp",
            avatarLabel: "مسار",
          }}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqTabbedAccordion
          textAnimation="fade"
          tag="الأسئلة الشائعة"
          title="كل ما تحتاج معرفته عن خدمات مسار"
          description="إجابات شاملة لأهم الاستفسارات حول كيفية عملنا وخطوات تطوير موقعك معنا."
          categories={[
            {
              name: "الخدمات والتطوير",
              items: [
                {
                  question: "ما هي نوعية المواقع التي تطورها مسار؟",
                  answer: "نطور كافة أنواع المواقع بدءاً من المواقع التعريفية للشركات والمؤسسات، والمتاجر الإلكترونية، وحتى المنصات وتطبيقات الويب المخصصة.",
                },
                {
                  question: "هل تعمل جميع المواقع على الهواتف والأجهزة اللوحية؟",
                  answer: "نعم، جميع أعمالنا تتميز بتصميم متجاوب 100% يضمن ظهور الموقع بشكل مثالي وسلس على كافة الشاشات والأجهزة (جوال، أيباد، لابتوب، كمبيوتر).",
                },
                {
                  question: "هل توفر مسار خدمات الاستضافة والدومين؟",
                  answer: "ندعمك في إعداد الاستضافة، اسم النطاق (الدومين)، وشهادات الأمان SSL لتسليم موقع جاهز للانطلاق.",
                },
                {
                  question: "هل يمكنني تعديل محتوى الموقع بعد تسليمه؟",
                  answer: "نعم، نوفر لوحة تحكم سهلة الاستخدام ونقوم بتدريب فريقك على إدارة المحتوى والتعديل عليه بكل يسر.",
                },
              ],
            },
            {
              name: "الأسعار والتكلفة",
              items: [
                {
                  question: "كيف يتم تحديد تكلفة تطوير الموقع؟",
                  answer: "تعتمد التكلفة على متطلبات المشروع، عدد الصفحات، والميزات المطلوبة. نقدم عرض سعر شفاف ومفصل بعد مناقشة تفاصيل العمل.",
                },
                {
                  question: "ما هي طريقة الدفع المتبعة؟",
                  answer: "نتبع نظام الدفع على دفعتين: 50% كدفعة أولى لبدء العمل، و50% عند الاستلام النهائي للمشروع واختباره.",
                },
                {
                  question: "هل توفرون خطط صيانة دورية؟",
                  answer: "نعم، نوفر باقات صيانة ودعم فني دوري لضمان تحديث الموقع وأمانه واستقراره المستمر.",
                },
                {
                  question: "هل هناك أي مصاريف إضافية غير معلنة؟",
                  answer: "لا يوجد أي مصاريف خفية، يحدد العرض النهائي كافة التفاصيل والتكاليف بوضوح.",
                },
              ],
            },
            {
              name: "مراحل العمل",
              items: [
                {
                  question: "ما هي خطوات بناء الموقع في مسار؟",
                  answer: "1. دراسة الاحتياجات والتخطيط -> 2. تصميم الواجهات UI/UX -> 3. البرمجة والتطوير -> 4. الاختبار والتهيئة -> 5. الإطلاق والتدريب.",
                },
                {
                  question: "كم تستغرق مدة تنفيذ الموقع؟",
                  answer: "تتراوح مدة التنفيذ عادةً بين 2 إلى 4 أسابيع بناءً على حجم المشروع ومتطلباته الفنية.",
                },
                {
                  question: "هل يمكن تقديم تعديلات على التصميم؟",
                  answer: "نقدم جولات مراجعة وتعديل محددة في عقد العمل لنضمن وصولنا إلى التصميم المناسب برضاك التام.",
                },
                {
                  question: "كيف أقوم بمتابعة تقدم المشروع؟",
                  answer: "نزودك برابط معاينة تجريبي مباشر وتحديثات أسبوعية لمتابعة كافة مراحل التطور أولاً بأول.",
                },
              ],
            },
          ]}
          cta={{
            imageSrc: "https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp?_wi=3",
            name: "لديك استفسار آخر؟ فريق مسار جاهز للإجابة.",
            role: "info@masar-agency.com",
            buttonText: "تواصل معنا",
            buttonHref: "#contact",
          }}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitFormParallax
          textAnimation="fade"
          tag="تواصل مع مسار"
          title="لنبدأ في تطوير مشروعك القادم"
          description="تواصل معنا اليوم لمناقشة فكرتك والحصول على عرض سعر خاص بمشروعك من فريق وكالة مسار."
          inputs={[
            { name: "name", type: "text", placeholder: "الاسم الكريم", required: true },
            { name: "email", type: "email", placeholder: "البريد الإلكتروني", required: true },
          ]}
          textarea={{ name: "message", placeholder: "أخبرنا عن تفاصيل مشروعك والخدمة المطلوبة...", rows: 5, required: true }}
          buttonText="إرسال الطلب"
          imageSrc="https://storage.googleapis.com/webild/default/templates/creative-portfolio/contact.webp"
        />
      </div>
    </StyleProvider>
  );
}

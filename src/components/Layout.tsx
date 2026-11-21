import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarFloatingLogo from "@/components/ui/NavbarFloatingLogo";
import FooterMinimal from "@/components/sections/footer/FooterMinimal";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarFloatingLogo
        logo="مسار | MASAR"
        logoImageSrc="https://storage.googleapis.com/webild/default/templates/creative-portfolio/avatar.webp"
        navItems={[
          { name: "الرئيسية", href: "#hero" },
          { name: "أعمالنا", href: "#work" },
          { name: "عن مسار", href: "#about" },
          { name: "خدماتنا", href: "#services" },
          { name: "الأسئلة الشائعة", href: "#faq" },
          { name: "تواصل معنا", href: "#contact" },
          { name: "لوحة التحكم MASAR ADMIN", href: "/admin" },
        ]}
        ctaButton={{ text: "تواصل معنا", href: "#contact" }}
      />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterMinimal
        brand="MASAR"
        copyright="© 2026 مسار - وكالة تطوير وتصميم المواقع الاحترافية. جميع الحقوق محفوظة."
        socialLinks={[
          { icon: "Twitter", href: "#" },
          { icon: "Linkedin", href: "#" },
          { icon: "Instagram", href: "#" },
        ]}
      />
    </StyleProvider>
  );
}

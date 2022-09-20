import NewsLetter from "../NewsLetter";
import FooterLinks from "../FooterLinks";
import FooterCopyright from "../FooterCopyright";
import FooterLinksMobile from "../FooterLInksMobile";

export default function Footer() {
  return (
    <footer>
      <NewsLetter />
      <FooterLinks />
      <FooterLinksMobile />
      <FooterCopyright />
    </footer>
  );
}

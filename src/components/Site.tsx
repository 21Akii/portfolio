import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Practice } from "./Practice";
import { TechStrip } from "./TechStrip";
import { Work } from "./Work";
import { getContent, type Lang } from "../content";

export function Site({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  return (
    <>
      <Nav c={c.nav} />
      <main>
        <Hero c={c.hero} />
        <TechStrip aria={c.tech.aria} />
        <Work c={c} />
        <Practice c={c.practice} />
        <About c={c.about} />
        <Contact c={c.contact} />
      </main>
      <Footer c={c.footer} />
    </>
  );
}

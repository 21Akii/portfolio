import { Contact } from "./Contact";
import { Duo } from "./Duo";
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
        <Hero c={c.hero} automations={c.automations} />
        <TechStrip aria={c.tech.aria} />
        <Duo c={c.duo} />
        <Work c={c} />
        <Practice c={c.practice} />
        <Contact c={c.contact} />
      </main>
      <Footer c={c.footer} />
    </>
  );
}

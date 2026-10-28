import { RootShell, rootMetadata, rootViewport } from "../../components/RootShell";

export const metadata = rootMetadata("fr");
export const viewport = rootViewport;

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="fr">{children}</RootShell>;
}

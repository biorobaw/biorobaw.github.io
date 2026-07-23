import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "USF BioRobotics Laboratory",
  description: "Biologically inspired robotics, spatial cognition, neurorobotics, and multi-robot systems at the University of South Florida.",
  metadataBase: new URL("https://biorobaw.github.io"),
  openGraph: {
    title: "USF BioRobotics Laboratory",
    description: "Intelligence inspired by living systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

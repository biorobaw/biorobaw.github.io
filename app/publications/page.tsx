import data from "../../content/legacy/publications.json";
import ArchivePage from "../archive-page";

export default function PublicationsPage() {
  return <ArchivePage eyebrow="Research archive" title="Publications" description="Journal articles, conference papers, abstracts, and technical reports spanning computational neuroscience, spatial cognition, and robotics." html={data.content.rendered} />;
}

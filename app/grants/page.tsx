import data from "../../content/legacy/grants.json";
import ArchivePage from "../archive-page";

export default function GrantsPage() {
  return <ArchivePage eyebrow="Research support" title="Grants" description="A history of collaborative funded research in spatial memory, neural modeling, and biomimetic robotics." html={data.content.rendered} />;
}

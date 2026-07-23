import data from "../../content/legacy/teaching.json";
import ArchivePage from "../archive-page";

export default function TeachingPage() {
  return <ArchivePage eyebrow="Education" title="Teaching" description="Undergraduate and graduate instruction in autonomous mobile robotics." html={data.content.rendered} />;
}

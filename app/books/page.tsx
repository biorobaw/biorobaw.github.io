import data from "../../content/legacy/books.json";
import ArchivePage from "../archive-page";

export default function BooksPage() {
  return <ArchivePage eyebrow="Books" title="Books and educational resources" description="Books and supporting resources authored by Prof. Alfredo Weitzenfeld." html={data.content.rendered} />;
}

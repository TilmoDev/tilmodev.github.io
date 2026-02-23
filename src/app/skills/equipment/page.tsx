import DataPage from "@/templates/DataPage/DataPage";
import { DataCard, DataTable } from "@/components";
import SampleDataPage from "@/templates/DataPage/SampleDataPage";

const sections = [
  {
    id: "overview",
    title: "Overview",
    description: "General information about the topic",
    content: <DataCard heading="Key Points" body={<p>Content here</p>} />
  }
];

export default function Page() {
	// return <DataPage title="My Data Page" backgroundImage="/path/to/image.jpg" sections={sections} />; 
    return <SampleDataPage />;
}

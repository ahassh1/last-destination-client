import { DestinationsGrid } from "@/components/destination/destinations-grid";

async function Destinations() {
  const res = await fetch("http://localhost:8000/destinations");
  const data = await res.json();

  return <DestinationsGrid destinations={data} />;
}

export default Destinations;
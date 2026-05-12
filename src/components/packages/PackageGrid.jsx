import PackageCard from "./PackageCard";

export default function PackageGrid({ trips }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {trips.map((trip) => <PackageCard key={trip.slug} trip={trip} />)}
    </div>
  );
}

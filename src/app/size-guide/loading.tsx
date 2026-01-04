import { Skeleton } from "@/components/ui/skeleton";

export default function SizeGuideLoading() {
  return (
    <div className="container space-y-6 py-10">
      <Skeleton className="h-10 w-40" />
      <Skeleton className="h-20 w-full rounded-lg" />
      <div className="space-y-2 rounded-lg border border-border bg-card p-4">
        {[...Array(6)].map((_, idx) => (
          <Skeleton key={idx} className="h-6 w-full rounded" />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Skeleton className="h-32 w-full rounded-lg" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
    </div>
  );
}

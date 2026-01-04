import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <div className="container space-y-6 py-10">
      <Skeleton className="h-10 w-40" />
      <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
        <Skeleton className="h-72 w-full rounded-lg" />
        <Skeleton className="h-64 w-full rounded-lg" />
      </div>
    </div>
  );
}

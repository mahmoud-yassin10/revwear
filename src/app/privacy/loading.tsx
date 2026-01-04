import { Skeleton } from "@/components/ui/skeleton";

export default function PrivacyLoading() {
  return (
    <div className="container space-y-6 py-10">
      <Skeleton className="h-8 w-40" />
      <Skeleton className="h-32 w-full rounded-lg" />
    </div>
  );
}

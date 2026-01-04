import { Skeleton } from "@/components/ui/skeleton";

export default function CheckoutLoading() {
  return (
    <div className="container space-y-6 py-10">
      <Skeleton className="h-10 w-48" />
      <div className="grid gap-6 lg:grid-cols-[1.6fr,1fr]">
        <Skeleton className="h-[520px] w-full rounded-lg" />
        <Skeleton className="h-[320px] w-full rounded-lg" />
      </div>
    </div>
  );
}

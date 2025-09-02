import CardSkeleton from '@/components/loaders/CardSkeleton'
import PageNavSkeleton from '@/components/loaders/PageNavSkeleton'
import PageTitleSkeleton from '@/components/loaders/PageTitleSkeleton'
import PaginationSkeleton from '@/components/loaders/PaginationSkeleton'
import SkeletonTest from '@/components/loaders/SkeletonTest'

export default function TeamsLoading() {
  return (
    <SkeletonTest className="flex w-full flex-col gap-2">
      <PageTitleSkeleton />
      <PageNavSkeleton />
      <CardSkeleton />
      <PaginationSkeleton />
    </SkeletonTest>
  )
}

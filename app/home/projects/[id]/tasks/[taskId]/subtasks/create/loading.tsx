import FormSkeleton from '@/components/loaders/FormSkeleton'
import PageTitleSkeleton from '@/components/loaders/PageTitleSkeleton'
import SkeletonTest from '@/components/loaders/SkeletonTest'

export default function SubtaskFormLoading() {
  return (
    <SkeletonTest className="flex w-full flex-col gap-2">
      <PageTitleSkeleton />
      <FormSkeleton />
    </SkeletonTest>
  )
}

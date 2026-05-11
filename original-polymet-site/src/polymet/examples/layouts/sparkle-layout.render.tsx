import { BrowserRouter } from "react-router-dom"
import { SparkleLayout } from "@/polymet/layouts/sparkle-layout"
import { Skeleton } from "@/components/ui/skeleton"

export default function SparkleLayoutRender() {
  return (
    <BrowserRouter>
      <SparkleLayout>
        <div className="px-6 md:px-12 lg:px-24 py-20 space-y-6">
          <Skeleton className="h-12 w-96 bg-muted" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Skeleton className="h-64 w-full bg-muted" />
            <Skeleton className="h-64 w-full bg-muted" />
          </div>
          <Skeleton className="h-48 w-full bg-muted" />
        </div>
      </SparkleLayout>
    </BrowserRouter>
  )
}

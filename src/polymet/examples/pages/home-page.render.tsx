import { BrowserRouter } from "react-router-dom"
import { HomePage } from "@/polymet/pages/home-page"
import { SparkleLayout } from "@/polymet/layouts/sparkle-layout"

export default function HomePageRender() {
  return (
    <BrowserRouter>
      <SparkleLayout>
        <HomePage />
      </SparkleLayout>
    </BrowserRouter>
  )
}

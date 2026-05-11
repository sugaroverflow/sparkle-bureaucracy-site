import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SparkleLayout } from "@/polymet/layouts/sparkle-layout"
import { HomePage } from "@/polymet/pages/home-page"

export default function SparkleApp() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SparkleLayout>
              <HomePage />
            </SparkleLayout>
          }
        />
      </Routes>
    </Router>
  )
}

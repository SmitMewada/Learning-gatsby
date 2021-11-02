import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>
        I'm Smit Mewada, a full stack developer living in a beautiful Toronto.
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

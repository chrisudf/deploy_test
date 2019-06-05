import React from "react"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import ApiRef from "../components/api-reference"

export default ({ data }) => {
  return (
    <Layout>
      <Container>
          <ApiRef />
      </Container>
    </Layout>
  )
}

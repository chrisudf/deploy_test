import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Row, Col } from "react-bootstrap"
import styles from "../style/guide-template.module.css"
import {GuideSidebar} from "../components/sidebar"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Row>
        <Col xs={12} md={3} xl={2}>
          <GuideSidebar />
        </Col>
        <Col xs={12} md={9} xl={10}>
          <div className={styles.guideContainer}>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

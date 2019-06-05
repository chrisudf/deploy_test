import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import "../style/guide.css"

export default ({ data }) => {
  return (
    <Layout>
      <div className="landing">
        <Col md={{ span: 4, offset: 4 }} className="guide-title">
          <h1>Cohort Go Api Documentation</h1>
        </Col>
      </div>
      <Container>
        <Row className="blog-list justify-content-center">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Col md={3} key={node.id} className="blog-container">
              <Link to={node.fields.slug} className="blog-link ">
                <h3 className="blog-title">{node.frontmatter.title}</h3>
                <img
                  src={node.frontmatter.imgPath}
                  alt={node.frontmatter.title}
                  className="guide-logo"
                />
                <p className="blog-date">— {node.frontmatter.date}</p>
                <p>{node.frontmatter.summary}</p>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { tag: { eq: "guide" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            summary
            tag
            imgPath
          }
          fields {
            slug
          }
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`

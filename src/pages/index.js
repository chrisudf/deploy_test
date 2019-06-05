import React from "react"
import Layout from "../components/layout"
import { Media, Container } from "react-bootstrap"
import HomeBanner from "../components/home-banner"

export default () => (
  <Layout>
    <HomeBanner />
    <Container>
      <h1>This is a title</h1>
      <Media>
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in
            faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel
            metus scelerisque ante sollicitudin commodo. Cras purus odio,
            vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
            nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
            faucibus.Cras sit amet nibh libero, in gravida nulla. Nulla vel
            metus scelerisque ante sollicitudin commodo. Cras purus odio,
            vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
            nunc ac nisi vulputate fringilla. Donec lacinia congue felis in
            faucibus.
          </p>
        </Media.Body>
      </Media>
    </Container>
  </Layout>
)

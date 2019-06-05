import React from "react"
import { Col, Row } from "react-bootstrap"
import styles from "../style/home-banner.module.css"


const HomeBanner = () => (
  <div className={styles.bgImage}>
    <Col xs={12} sm={12} md={{ span: 8, offset: 4 }} className={styles.content}>
      <div className={styles.contentTitle}>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </div>
      <Row>
        <Col xs={12} sm={6} md={6} className={styles.contentBtn}>
          <a className={styles.link} alt="guide" href="guide">
            guide.
          </a>
        </Col>
        <Col xs={12} sm={5} md={5} className={styles.contentBtn}>
          <a className={styles.link} alt="api reference" href="/">
            api reference.
          </a>
        </Col>
      </Row>
    </Col>
  </div>
)

export default HomeBanner

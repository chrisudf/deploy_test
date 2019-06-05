import React, { Component } from "react"
import SwaggerUi, { presets } from "swagger-ui"
import "swagger-ui/dist/swagger-ui.css"
import globalStyles from "../style/global/bootstrap.min.module.css"
import styles from "../style/api-reference.module.css"
import cx from "classnames"

class ApiRef extends Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: "#swaggerContainer",
      url: `/api-reference/swagger-api.yml`,
      presets: [presets.apis],
    })
  }

  render() {
    return (
      <div
        id="swaggerContainer"
        className={cx(globalStyles.container, styles.apiref)}
      />
    )
  }
}

export default ApiRef

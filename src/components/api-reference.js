import React, { Component } from "react"
import "swagger-ui/dist/swagger-ui.css"
import globalStyles from "../style/global/bootstrap.min.module.css"
import styles from "../style/api-reference.module.css"
import cx from "classnames"

export default class ApiRef extends Component {
  componentDidMount() {
    window.SwaggerUI({
      dom_id: "#swaggerContainer",
      url: `/api-reference/swagger-api.yml`,
      presets: [window.SwaggerUI.presets.apis],
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

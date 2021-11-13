import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: "description",
          content: description || "Gela Samsonidze's personal website",
        },
      ]}
    ></Helmet>
  )
}

export default Seo

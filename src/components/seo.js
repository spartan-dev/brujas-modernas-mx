/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
//import baner from '../images/logob-negro.jpg'

function SEO({ description, lang, meta, title, image, url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
            url
          }
        }
      }
    `
  )
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet>
        <title>{`${title} | ${site.siteMetadata.title}`}</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="og:title" content={`${title}`}/>
        <meta property="og:site_name" content="Festival de brujas modernas."/>
        <meta property="og:description" content={`${metaDescription}`}/>
        <meta property="og:image" content="https://res.cloudinary.com/drakarzamael/image/upload/v1570920161/logob-negro.jpg"/>
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="2160" />
        <meta property="og:image:height" content="2160" />
        <meta property="og:image:alt" content="Festival Bruja Moderna Logo" />

        <meta property="og:url" content={`${site.siteMetadata.url}`}/>
        

        <meta name="twitter:card" content="summary"/>
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={metaDescription}/>
        <meta property="twitter:image" content="https://res.cloudinary.com/drakarzamael/image/upload/v1570920161/logob-negro.jpg"/>
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="2160" />
        <meta property="og:image:height" content="2160" />
        <meta property="og:image:alt" content="Festival Bruja Moderna Logo" />
        <meta property="og:url" content={`${site.siteMetadata.url}`}/>

{/* 
        <meta property="facebok:card" content="summary"/>
        <meta property="facebook:title" content={title}/>
        <meta property="facebook:decription" content={metaDescription}/>
        <meta property="facebook:image" content="https://res.cloudinary.com/drakarzamael/image/upload/v1570920161/logob-negro.jpg"/>
        <meta property="og:url" content={`${site.siteMetadata.url}`}/> */}
        <meta property="fb:app_id" content="your_app_id" />


        <meta property="og:type" content="website"/>
        <meta property="og:locale" content="es_Es"/>
        </Helmet>
  )

}



SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  url:PropTypes.string,
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  title:``,
  image:``,
  url:``
}
export default SEO

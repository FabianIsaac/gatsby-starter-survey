import * as React from "react";
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../components/UiComponents/Header";

const OkPage = () => {
	const Data = useStaticQuery(graphql`
        query {
          surveyJson {
            header {
              custom_background {
                src {
                  publicURL
                }
              }
              thanks {
                text
              }
           
            }
           
          }
        }
    `);

	return <Header header={Data.surveyJson.header} />;
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Gracias" />;

export default OkPage;

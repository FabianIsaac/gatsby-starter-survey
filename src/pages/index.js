import * as React from "react";
import Seo from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";

import GenerateBlocks from "../components/UiComponents/GenerateBlocks";
import Header from "../components/UiComponents/Header";

const IndexPage = () => {
	const Data = useStaticQuery(graphql`
        query {
          surveyJson {
            header {
              custom_background {
                src {
                  publicURL
                }
              }
              welcome {
                head
                body
              }
              advertisement {
                head
                points
              }
            }
            blocks {
              number
              type
              text
              parameters {
                complementCondition
                complementInput
                headers
                handle {
                  text
                  type
                }
                cols {
                  text
                  custom_background {
                    src 
                  }
                }
                inputs {
                  data_a {
                    name
                    negative_text
                    positive_text
                  }
                  name
                  parameters {
                    name
                    options
                  }
                  placeholder
                  text
                  type
                  data_b {
                    positive_text
                    negative_text
                    name
                  }
                }
              }
              configurations {
                variant
                validations {
                  value
                  type
                }
                color
                step
                min
                max
                labels {
                  value
                  label
                }
                information_text
                helper_text
                defaultValue
                backgroundColor
              }
            }
          }
        }
    `);

	return (
		<>
			<Header header={Data.surveyJson.header} />
			<GenerateBlocks blocks={Data.surveyJson.blocks} />
		</>
	);
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;

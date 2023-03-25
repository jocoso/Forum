// src/pages/index.js

import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>This is my artist blog</p>
            <StaticImage
                alt="A piece of art I made myself"
                src="../images/godofdeep.png"
            />
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
// src/pages/index.js

import * as React from 'react'
import Layout from '../components/layout'


const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <p>This is my artist blog</p>
        </Layout>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
// src/pages/about.js

import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
	return(
		<Layout pageTitle="About Me">
			<p>I want this site to be something okay</p>
		</Layout>
	)
}

export const Head = () => <Seo title="About Me" />

export default AboutPage
// src/pages/about.js

import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
	return(
		<Layout pageTitle="About Me">
			<p>I want this site to be something okay</p>
		</Layout>
	)
}

export const Head = () => <title>About Me</title>

export default AboutPage
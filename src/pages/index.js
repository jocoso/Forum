// src/pages/index.js

import * as React from 'react'
import Layout from '../components/layout'
import ContentCard from '../components/contentcard'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { showcaseData } from './styles.module.css'


const IndexPage = () => {
    return (
        <Layout pageTitle="Home Page">
            <ContentCard>
                <h1>My Name Is Josh</h1>
                <h2>I Am a Computer Scientist</h2>
                <p>
                    I am a computer scientist who graduated from
                    Lehman College in 2020. Right now I am working
                    to get into a masters program in computer science.
                    I am interested in Computer graphics and parallel 
                    processing. I am a fan of old languages like C,
                    C++, LISPS, and FOLTRAN and like to play with
                    them in my free time.
                </p>
                <div className={showcaseData}>
                    <div>
                        <h1>+7</h1>
                        <p>Teaching: Years of Experience</p>
                    </div>
                    <div>
                        <h1>+6</h1>
                        <p>Computer Scientist: Years of Experience</p>
                    </div>
                    <div>
                        <h1>23+</h1>
                        <p>Original Projects</p>
                    </div>
                </div>
            </ContentCard>
        </Layout>
    )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
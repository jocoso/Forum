import * as React from 'react'
import { container } from './contentcard.module.css'

const ContentCard = ({ children }) => {
    return (
        <div className={container}>
            { children }
        </div>
    )
}

export default ContentCard;
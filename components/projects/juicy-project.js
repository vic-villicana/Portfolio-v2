import {Fragment} from 'react'

import ProjectHeading from './project-heading'
import ProjectFlex from './project-flex'
import ProjectProcess from './project-process' 

export default function JuicyProject(){
    return (
        <Fragment>
            <ProjectHeading />
            <ProjectFlex />
            <ProjectProcess />
        </Fragment>
    )
}
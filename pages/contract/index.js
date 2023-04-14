import { Fragment } from 'react'
import HelloForm from '../../components/contact/hello-form'
import ContractProject from '../../components/projects/contract-project'
import NavBar from '../../components/layout/navbar'
export default function ProjectPageC() {

    return (
        <Fragment>
            <ContractProject />
            <HelloForm />

        </Fragment>
    )
}
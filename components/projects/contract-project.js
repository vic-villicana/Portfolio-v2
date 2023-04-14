import {Fragment} from 'react'

import ContractHeading from './contract-heading'
import ContractFlex from './contract-flex'
import ContractProcess from './contract-process' 

export default function ContractProject(){
    return (
        <Fragment>
           <ContractHeading /> 
           <ContractFlex />
           <ContractProcess />
        </Fragment>
    )
}
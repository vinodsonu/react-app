import React from "react"

import {
    PaginationDiv,
    PrevBtn,
    PageNumber,
    SlashDiv,
    ForwardBtn,
}
from '../../styledComponents'

class PaginationBtn extends React.Component {
    render() {
        let { onClickPrevBtn, onClickForwardBtn, currentPgNum } = this.props
        return (
            <PaginationDiv>
            <PrevBtn onClick={onClickPrevBtn} currentPgNum={currentPgNum}><span>&#60;</span></PrevBtn>
            <SlashDiv>/</SlashDiv>
            <PageNumber>{currentPgNum}</PageNumber>
            <ForwardBtn onClick={onClickForwardBtn} currentPgNum={currentPgNum}><span>&#62;</span></ForwardBtn>
            </PaginationDiv>
        )
    }
}
export { PaginationBtn }

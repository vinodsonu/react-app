import React from 'react'
import { FooterHeading, FooterDiv, FooterPara } from './../styledComponents.js'
class HowToPlay extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (<FooterDiv selectedTheme={this.props.selectedTheme}>
         <FooterHeading>How To Play?</FooterHeading>  
         <FooterPara>Get points by clicking on the image but don't click more than once</FooterPara>
        </FooterDiv>);
    }
}
export default HowToPlay;

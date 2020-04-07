import React from "react"
import styled from '@emotion/styled'
import { jsx } from '@emotion/core'
import { EmojiName, Emoji, EmojiImage } from './../styledComponents.js';

class EmojiCard extends React.Component {
    constructor() {
        super()
    }
    onEmojiClick = () => {
        this.props.onEmojiClick(this.props.emoji.name);
    }
    render() {
        return (<Emoji selectedTheme={this.props.selectedTheme}>
        <EmojiImage onClick={this.onEmojiClick} src={this.props.emoji.emojiSrc}/>
        <EmojiName>{this.props.emoji.name}</EmojiName>
        </Emoji>)
    }
}
export default EmojiCard;

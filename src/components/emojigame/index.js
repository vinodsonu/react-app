/*global React*/
import React from 'react';
import { withRouter } from "react-router-dom";
import NavBar from './components/NavBar.js';
import EmojiCard from './components/EmojiCard.js';
import WinOrLoss from './components/WinOrLoss.js';
import HowToPlay from './components/HowToPlay.js';
import { StateComponent } from './components/StateComponent.js';
import { ImageContainer, MainDiv } from './styledComponents';
const emojiNames = ["Eploding Head", "Grinning Face with Sweat", "Smiling Face with Heart-Eyes", "Smirking Face", "Thinking Face", "Winking Face", "Grinning Face", "Crying Face", "Astonished Face", "Face with Tears of Joy", "Star-Struck", "Winking Face with Tongue"];


class EmojiGame extends React.Component {
    constructor() {
        super();
        this.state = {
            emojis: [],
            score: 0,
            topScore: 0,
            gameState: 'PLAYING',
        }
    }
    componentDidMount() {
        this.getEmojis();
    }
    getEmojis() {
        let emojisObjectArray = [...Array(12).keys()].map((index) => ({
            id: index,
            isClicked: false,
            name: emojiNames[index],
            emojiSrc: `https://tap.ibhubs.in/react/assignments/assignment-5/preview/images/memoji-${index+1}.png`,
        }))
        this.setState({ emojis: emojisObjectArray });
    }
    onEmojiClick = (clickedEmojiName) => {
        let emojisArray = this.state.emojis;
        let newEmojiArray = emojisArray.map((emoji) => {
            if (clickedEmojiName === emoji.name) {
                if (emoji.isClicked) {
                    this.setState({ gameState: "LOSS" });
                }
                else {
                    emoji.isClicked = true;
                    this.incrementScore();
                }
            }
        })
        this.setState({ emojis: emojisArray });
        this.shuffleEmojis();
    }
    shuffleEmojis = () => {
        let emojisArray = this.state.emojis;
        emojisArray.sort(() => Math.random() - 0.5);
        this.setState({ emojis: emojisArray });
    }
    incrementScore = () => {
        let currentScore = this.state.score + 1;
        this.setState({ score: currentScore }); {
            (currentScore === 12) && this.setState({ gameState: "WON" })
        };
    }
    onPlayAgainClick = () => {
        this.setState({ score: 0 });
        this.setTopScore();
        this.setState({ gameState: "PLAYING" });
        this.resetGame();
    }
    resetGame = () => {
        this.getEmojis();
    }
    setTopScore = () => { { this.state.score > this.state.topScore && this.setState({ topScore: this.state.score }) };
    }
    componentToBedisplayed = () => {
        let { gameState } = this.state;
        let gameComponent = null;
        if (gameState !== "PLAYING")
            return <WinOrLoss onPlayAgainClick={this.onPlayAgainClick} 
        score={this.state.score} selectedTheme={this.props.selectedTheme}
         isWin={(this.state.gameState==='WON')?(true):(false)} />
        else {
            let { gameState } = this.state;
            let gameComponent = this.state.emojis.map((emoji) => {
                return <EmojiCard selectedTheme={this.props.selectedTheme} onChangeTheme={this.props.onChangeTheme} emoji={emoji} onEmojiClick={this.onEmojiClick}/>
            })
            return gameComponent

        }
    }
    render() {
        return (<MainDiv  onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.selectedTheme}>
        <NavBar onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.selectedTheme} score={this.state.score} topScore={this.state.topScore}/>
        <ImageContainer onChangeTheme={this.props.onChangeTheme} selectedTheme={this.props.selectedTheme}>
        {this.componentToBedisplayed()}
        </ImageContainer>
        <HowToPlay selectedTheme={this.props.selectedTheme} onChangeTheme={this.props.onChangeTheme} />
        </MainDiv>)
    }
}
export default withRouter(EmojiGame)

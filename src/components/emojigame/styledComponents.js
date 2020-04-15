import styled from '@emotion/styled'
import tw from 'tailwind.macro';
const NavBarDiv =styled.div `${
                tw`block  flex justify-between items-center p-4`}${props=>({backgroundColor:(props.selectedTheme.id==="1"?"#666699":"")})}`
const MainDiv = styled.div `${``}${props=>({backgroundColor:props.selectedTheme.name,color:props.selectedTheme.fontColor})}`
const NavBarHeadingDiv = styled.div `${tw` text-3xl flex ml-4 items-center`}`
const ScoreTextDiv = styled.div `${tw`font-semibold text-md   flex justify-around items-center w-1/3`}`
const Button = styled.button `${tw` py-2 px-4 border-black border-solid border focus:outline-none cursor-pointer rounded shadow`}`
const ImageContainer = styled.div `${tw` flex  flex-wrap justify-center items-center`}${props=>({backgroundColor:(props.selectedTheme.id==="0"?"#e6eeff":"")})}`;
const ResultContainer = styled.div `${tw` flex justify-center items-center flex-col py-32`}`
const ResultSubDiv = styled.div `${tw`text-3xl font-semibold mb-1`}${props=>({color:(props.isWin)?("green"):("#ff4d4d")})}`
const ResultScoreDiv = styled.div `${tw`text-4xl mb-1  font-bold`}`
const PlayAgainButton = styled.button `${tw`bg-blue-500 hover:bg-blue-700 text-xl text-white font-bold py-3 px-4 mb-1 rounded `}`
const Emoji = styled.div `${tw`flex flex-col w-64 border-solid border my-4 mx-6 justify-center shadow-custom`}${props=>({backgroundColor:(props.selectedTheme.id==="1"?"#3366ff":"#fff")})}`;
const EmojiImage = styled.img `${tw`flex w-48 self-center`}`;
const EmojiName = styled.h3 `${tw `text-md  flex justify-center   mb-6`}`
const FooterDiv = styled.div `${tw`   border-solid  border-2   `}${props=>({backgroundColor:(props.selectedTheme.id==="1"?"#9494b8":"")})}`
const FooterHeading = styled.h3 `${tw `text-2xl font-medium flex self-start `}`
const FooterPara = styled.p `${tw `text-lg ml-5 mb-5`}`;
export { MainDiv, FooterPara, FooterHeading, FooterDiv, EmojiName, EmojiImage, ResultSubDiv, NavBarDiv, NavBarHeadingDiv, ScoreTextDiv, Button, ImageContainer, Emoji, ResultContainer, ResultScoreDiv, PlayAgainButton };

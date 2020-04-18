import styled from '@emotion/styled'
import tw from 'tailwind.macro';
const Game = styled.div `${tw `flex  items-center justify-center  h-screen`}${props=>({backgroundColor:props.selectedTheme.name,color:props.selectedTheme.fontColor})}`
const HeaderDiv = styled.div `${tw `flex flex-col items-center justify-between w-full `}`
const HeaderPara = styled.p `${tw`text-xl mb-12 `}`
const HeaderSubDiv = styled.div `${tw`flex items-center justify-between mb-4 px-1  w-full`}`
const LevelPara = styled.p `${tw`text-xl ml-10`}`
const HeaderButton = styled.button `${tw`mr-10 py-2 px-4 border-black border-solid border focus:outline-none cursor-pointer rounded shadow`}`
const MainDiv = styled.div `${tw`flex flex-col items-center justify-center w-2/4 `}`
const CellDiv = styled.button `${tw`m-1 flex justify-center items-center bg-blue-900 pointer-events-auto flex-grow`}${props=>({width:props.dimensions,height:props.dimensions})}
${props=>({backgroundColor:((props.isClickedOnCell)?(props.isHidden?"#4fd1c5":"red"):(props.shouldShowHiddenCells===true && props.isHidden===true?"#4fd1c5":"")),})}`
const GameDiv = styled.div `${tw`flex flex-row flex-wrap justify-center `}${props=>({width:props.width})}`
const ResultContainer = styled.div `${tw` flex justify-center items-center flex-col py-32`}`
const ResultSubDiv = styled.div `${tw`text-3xl font-semibold mb-1 text-green-500 block`}`
const ResultLevelDiv = styled.div `${tw`text-4xl mb-1  font-bold`}`
const PlayAgainButton = styled.button `${tw`bg-blue-500 hover:bg-blue-700 text-xl text-white font-bold py-3 px-4 mb-1 rounded `}`
export { PlayAgainButton, ResultContainer, ResultSubDiv, ResultLevelDiv, CellDiv, GameDiv, MainDiv, HeaderSubDiv, HeaderDiv, HeaderPara, LevelPara, HeaderButton, Game };

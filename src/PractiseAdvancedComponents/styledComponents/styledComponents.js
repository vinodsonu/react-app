import styled from '@emotion/styled'
import tw from 'tailwind.macro'
const UserInput = styled.input `${tw`border border-gray-400 mb-3 w-48 h-10 pl-2 
focus:outline-none rounded`}`
const TextDiv = styled.div `${tw`flex items-center`}`
const ComponentContainer = styled.div `${tw`py-4 flex flex-col items-center bg-gray-400 w-full`}`
const SubmitBtn = styled.button `${tw`ml-2 px-2 py-1 bg-blue-500 
                                rounded text-white focus:outline-none`}`
const ToggleHeading = styled.h3 `${tw `text-xl font-bold`}`
const MainContainer = styled.div `${tw `flex flex-col items-center my-8`}`
const MainHeading = styled.div `${tw `text-3xl font-bold mb-2`}`
const SubContainer = styled.div `${tw `flex items-center`}`

export {
    UserInput,
    SubContainer,
    TextDiv,
    SubmitBtn,
    ToggleHeading,
    MainContainer,
    MainHeading,
    ComponentContainer,
}

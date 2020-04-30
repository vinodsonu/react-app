import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const SpanMessage = styled.span `${tw`text-yellow-800`}`
const FormContainer = styled.form `${tw`flex flex-col p-8 bg-white`}`
const FormHeading = styled.h1 `${tw`font-bold mb-4`}`
const UserInput = styled.input `${tw`border border-gray-400 mb-3 w-48 h-10 pl-2 
focus:outline-none rounded`}`
const UserPassword = styled.input `${tw`border border-gray-400 mb-3 w-48 h-10 pl-2
focus:outline-none rounded`}`
const SignInButton = styled.button `${tw`flex justify-center w-48 h-10 rounded bg-gray-900 
text-white focus:outline-none cursor-pointer`}`
const MainDiv = styled.div `${tw`flex justify-center items-center h-screen bg-gray-200`}`

export { SpanMessage, MainDiv, FormContainer, FormHeading, UserInput, UserPassword, SignInButton }

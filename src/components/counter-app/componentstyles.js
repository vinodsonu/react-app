import styled from '@emotion/styled'
import tw from 'tailwind.macro';
const CounterContainer = styled.div `${tw`flex flex-col justify-center items-center w-full h-screen`}`;
const Heading = styled.h3 `${tw` mb-6 text-5xl font-bold `}`;
const Button = styled.button `${tw`h-12 w-12 mx-4 font-bold text-3xl sm:h-16 sm:w-16 bg-blue-700 text-white focus:outline-none rounded `}`
const Input = styled.input `${tw`w-40 h-12 sm:h-16 text-3xl border-orange-400 border-2 text-center rounded`}`
const CounterDiv = styled.div `${tw `flex justify-center items-center `}`
export { CounterContainer, Button, Input, Heading, CounterDiv };

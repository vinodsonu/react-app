import styled from '@emotion/styled'
import tw from 'tailwind.macro';
const Button = styled.button ` ${tw`
           bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4 
    `}`
const BorderHeadingDiv = styled.div `${tw` block w-full `}`
const CountryDetailsSubChord = styled.div `${tw`m-4 p-4 `}`
const SubHeading = styled.h3 `${tw`text-lg font-bold mt-4`}`
const MainHeading = styled.h2 `${tw`text-2xl font-bold flex justify-center items-center`}`
const CountryDetailsDiv = styled.div `${tw`flex text-lg p-6 flex-wrap`}`
const DetailsSubcord = styled.div `${tw`mt-3`}`
const ImgDiv = styled.div `${tw `flex-grow  w-2/4 justify-center flex items-center`}`
export { Button, SubHeading, BorderHeadingDiv, MainHeading, CountryDetailsDiv, CountryDetailsSubChord, DetailsSubcord, ImgDiv }

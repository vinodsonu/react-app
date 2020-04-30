import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const ProductContainer = styled.div `${tw`flex`}`
const ProductListContainer = styled.div `${tw`flex flex-wrap justify-start`}`
const ProductDiv = styled.div `${tw`flex flex-wrap justify-start`}`
const ProductSubDiv = styled.div `${tw`flex flex-col  border 
border-transparent border-solid md:w-46 
lg:w-30 xl:w-23 m-2 items-center p-2 relative`}`
const FreeShippingComponent = styled.p `${tw`absolute top-10 right-0 bg-black p-1 
text-xs text-white`}`
const Image = styled.div `${tw`w-4/5 object-contain mb-2`}`
const ProductTitle = styled.p `${tw`h-45px text-center`}`
const spaceDiv = styled.div `${tw`w-4 border-t-2 rounded 
border-yellow-600 mt-2px mb-4`}`
const Span1 = styled.span `${tw`text-xs mr-1`}`
const Span2 = styled.span `${tw`text-xl`}`
const Span3 = styled.span `${tw`text-xs`}`
const Span4 = styled.span `${tw`text-sm text-gray-700 mb-4 h-5`}`
const AddToCartButton = styled.button `${tw`w-full py-3 text-white bg-black
text-center rounded text-sm focus:outline-none`}`
const SizesContainer = styled.div `${tw`w-1/4 px-4`}`
const SizeButton = styled.button `${tw`rounded-full h-10 w-10 m-1 focus:outline-none 
bg-gray-200 text-black`}`
const SizePara = styled.p `${tw`my-4 font-bold`}`
const ProductsSortDiv = styled.div `${tw`flex justify-between items-center my-4`}`
const SortByLabel = styled.label `${tw`text-center`}`
const Selectbar = styled.select `${tw`rounded-md bg-white border border-gray-400 hover:border-gray-700 py-2 px-2 focus:outline-none `}`
const optionVal = styled.option `${tw`focus:outline-none`}`
const HeaderDiv = styled.div `${tw`flex justify-between items-center my-4`}`
const ProductsPara = styled.p `${tw`hidden sm:flex`}`
const MainDiv = styled.div `${tw`m-6 relative `}`
const SignOutButton = styled.button `${tw`border border-gray-800 p-1 rounded text-xs`}`
const FreeShippingPara = styled.p `${tw`absolute top-10 right-0 bg-black
p-1 text-xs text-white`}`
const CartContainer = styled.div `${tw`fixed top-0 right-0 z-10  h-screen w-1/3`}`
const ShowCartContainer = styled.div `${tw`flex relative h-screen `}`
const CrossButton = styled.button `${tw`h-10 p-3 text-white bg-gray-800 focus:outline-none active:outline-none leading-none`}`
const CartBody = styled.div `${tw` p-4 bg-gray-800 flex flex-col w-full`}`
const CartItemsInnerDiv = styled.div `${tw`flex items-center justify-center`}`
const CartImageDiv = styled.div `${tw`h-10 mr-4`}`
const CartPara = styled.p `${tw`text-center text-sm text-yellow-600 relative `}`
const CartHeading = styled.h1 `${tw`text-white font-bold text-xl`}`
const AddSomeProductsDiv = styled.div `${tw`mt-8 overflow-y-auto flex-1 items-center justify-center`}`
const AddSomeProductsMsg = styled.p `${tw`text-white text-sm my-auto h-3/4 flex items-center justify-center`}`
const SubTotalDiv = styled.div `${tw` bottom-0 right-0 p-4  bg-gray-800 shadow-inner`}`
const SubTotalSubDiv = styled.div `${tw`flex justify-between mt-4`}`
const SubTotalText = styled.h3 `${tw`text-gray-500`}`
const SubTotalVal = styled.p `${tw`text-yellow-600`}`
const CheckOutButton = styled.button `${tw`bg-black w-full py-2 text-white my-4 rounded opacity-50 focus:outline-none`}`
const HideCartContainer = styled.button `${tw`fixed top-0 right-0 z-10`}`
const HideCartImageDiv = styled.div `${tw`bg-gray-800 p-2 cursor-pointer flex`}`
const HideCartContainerPara = styled.p `${tw`text-center text-sm text-yellow-600 relative `}`
const CartItemContainer = styled.div `${tw`flex text-sm my-2 items-center relative`}`
const ItemCrossButton = styled.button `${tw`font-bold absolute top-0 right-0`}`
const ItemImageSize = styled.div `${tw`w-12 object-contain`}`
const ItemDataContainer = styled.div `${tw`ml-2 flex-1`}`
const ItemDataHeading = styled.h3 `${tw`text-white`}`
const ItemDataPara = styled.p `${tw`text-gray-500 text-xs`}`
const ItemDataPrice = styled.p `${tw`text-yellow-600 ml-auto`}`
const SearchBar = styled.input `${tw`  bg-left bg-no-repeat rounded border-1 py-2 px-3 shadow-md 
 mb-10 md:mb-0 w-42 border-2 border-solid border-gray-200 focus:outline-none`}`
export {
    CartItemContainer,
    ItemCrossButton,
    ItemImageSize,
    ItemDataContainer,
    ItemDataPara,
    ItemDataHeading,
    ItemDataPrice,
    HideCartContainer,
    HideCartImageDiv,
    HideCartContainerPara,
    CartContainer,
    ShowCartContainer,
    CrossButton,
    CartBody,
    CartItemsInnerDiv,
    CartImageDiv,
    CartPara,
    CartHeading,
    AddSomeProductsDiv,
    AddSomeProductsMsg,
    SubTotalDiv,
    SubTotalSubDiv,
    SubTotalText,
    SubTotalVal,
    CheckOutButton,
    FreeShippingPara,
    SignOutButton,
    MainDiv,
    HeaderDiv,
    ProductsPara,
    optionVal,
    Selectbar,
    SortByLabel,
    ProductContainer,
    SizesContainer,
    SizePara,
    SizeButton,
    ProductListContainer,
    ProductDiv,
    ProductSubDiv,
    FreeShippingComponent,
    Image,
    ProductTitle,
    spaceDiv,
    Span1,
    Span2,
    Span3,
    Span4,
    AddToCartButton,
    SearchBar,
}

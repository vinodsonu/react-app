import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'

import {
    SizesContainer,
    SizePara,
    SizeButton,
}
from '../../styledComponents'

@observer
class SizeFilter extends React.Component {
    sizes = ["XS", "S", "M", "L", "XL", "XXL"]
    @observable isChecked = false
    @action.bound
    getStore() {
        return this.props.productStore
    }
    @action.bound
    onselectSize(event) {
        this.getStore().onSelectSize(event.target.value)
    }
    showSizesButttons() {
        return (
            this.sizes.map((size) => <SizeButton 
            style={{backgroundColor:`${this.getStore().sizeFilter.indexOf(size)!=-1?("black"):("#d7ecf5")}`,
                color:`${this.getStore().sizeFilter.indexOf(size)!=-1?("white"):("black")}`
            }} value={size} 
            onClick={this.onselectSize}>{size}</SizeButton>)
        )
    }
    render() {
        return (<SizesContainer>
        <SizePara>Sizes:</SizePara>
        {this.showSizesButttons()}
        </SizesContainer>)
    }
}
export { SizeFilter }

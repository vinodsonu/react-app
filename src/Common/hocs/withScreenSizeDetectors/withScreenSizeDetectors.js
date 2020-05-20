import React from 'react'
import { observer } from 'mobx-react'
import { observable, action, computed } from 'mobx'

export function withScreenSizeDetectors(WrappedComponent) {
    @observer
    class ScreenDetector extends React.Component {
        @observable windowInnerWidth = window.innerWidth;
        componentDidMount() {
            window.addEventListener("resize", this.updateDimensions)
        }
        @action.bound
        updateDimensions() {
            this.windowInnerWidth = window.innerWidth
        }
        @computed
        get mobileFn() {
            if (this.windowInnerWidth < 576)
                return true
            return false
        }
        @computed
        get TabletFn() {
            if (this.windowInnerWidth > 576 && this.windowInnerWidth < 992)
                return true
            return false
        }
        @computed
        get DesktopFn() {
            if (this.windowInnerWidth >= 992)
                return true
            return false
        }
        render() {
            return <WrappedComponent  
            isMobileFn={this.mobileFn}
            isDesktopFn={this.isDesktopFn}
            isTabletFn={this.TabletFn}
            />;
        }

    }
    return ScreenDetector
}

import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
class ThemeStore {
    @observable selectedTheme
    constructor() {
        this.selectedTheme = ThemeStore.themeOptions.light;
    }
    static themeOptions = {
        light: {
            id: "0",
            name: "#fff",
            fontColor: "#2b3945",
            modeName: "Mode:Light",
        },
        dark: {
            id: "1",
            name: "#2b3945",
            fontColor: "#fff",
            modeName: "Mode:Dark"
        }
    }
    @action
    setCurrentTheme(themeId) {
        if (themeId === '0')
            this.selectedTheme = ThemeStore.themeOptions.dark;
        else
            this.selectedTheme = ThemeStore.themeOptions.light;
    }
}
const themeStore = new ThemeStore();
export default themeStore;

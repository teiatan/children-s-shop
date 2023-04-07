//кольори використовуємо в styled файлах:
//background-color: ${props => (props.theme.footer.backgroundColor)};

class Theme {
    constructor({header, main, footer}) {

        this.header = header ?? {
            backgroundColor: "rgba(247, 169, 168, 1)",
            textColor: "rgba(97, 63, 117, 1)",
        };

        this.main = main ?? {
            background: "rgba(206, 198, 225, 0.1)",
            backgroundDots: "rgba(247, 169, 168, 0.4)",
            
        };

        this.footer = footer ?? {
            backgroundColor: "rgba(247, 169, 168, 1)",
            textColor: "rgba(97, 63, 117, 1)",
        };
    }
}

//світла тема дефолтна
export const light = new Theme({});

export const dark = new Theme({
    header: {
        backgroundColor: "rgb(70, 42, 61)",
        textColor: "rgb(200, 198, 215)",
    },
    main: {
        background: "rgba(90, 90, 102, 0.7)",
        backgroundDots: "rgb(200, 198, 215)",
    },
    footer: {
        backgroundColor: "rgb(70, 42, 61)",
        textColor: "rgb(200, 198, 215)",
    }
});
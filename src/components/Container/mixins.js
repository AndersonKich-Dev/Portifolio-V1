export function toogleBd(bd, colorText) {
    return`
        background-color: ${bd};

        p {
            color: ${colorText};
        }
    `;
}

export function toogleMinHeight() {
    return`
       min-height: 100vh;
    `;
}

export function toogleHeigth() {
    return`
       height: 100vh;
    `;
}
export function toogleBackground( colorA, colorB ){

    return`
        border: 1px solid ${colorA};

        :hover {
            background-color: ${colorA};
        }

        :hover > a svg{
            color: ${colorB}
        }

        a {
            svg {
                color: ${colorA}
            }
        }
    `;
}
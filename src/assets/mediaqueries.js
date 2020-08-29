const size = {
    small: '37.5em',
    medium: '48em',
    large: '64em'
}

const screen = {
    small: `only screen and (max-width: ${size.small})`,
    medium: `only screen and (max-width: ${size.medium})`,
    large: `only screen and (max-width: ${size.large})`,
    darkMode: `(prefers-color-scheme: dark)`,
    noHover: `only screen and (hover:none)`
};

export default screen
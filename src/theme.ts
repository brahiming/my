import { createTheme } from '@mui/material';
import 'typeface-raleway';

const BLUE: string = '#011C77';
const BLUElight: string = '#4D609F';
const BLUElightButton: string = '#82B5DC';
const BLUEdark: string = '#000D3B';
const ORANGE: string = '#F24F03';
const ORANGElight: string = '#F47235';
const ORANGEdark: string = '#C13F02';
const White: string = '#FFF';

const theme = createTheme({
    components: {
        MuiFormHelperText: {
            styleOverrides: {
                root: {
                    color: ORANGElight
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                outlined: {
                    fontFamily: 'Nunito',
                    fontWeight: 'bold',
                    color: White,
                    backgroundColor: BLUE,
                    boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.1)',
                    ':hover': {
                        backgroundColor: BLUElightButton,
                        color: BLUE,
                    }
                },
                text: {
                    ':hover': {
                        backgroundColor: BLUE,
                        color: White,
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: White
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontFamily: 'Nunito',
                    fontWeight: 'bold',
                    color: BLUE,
                    backgroundColor: White,
                    ':hover': {
                        textDecoration: 'none',
                        backgroundColor: BLUE,
                        color: White,
                        border: '1px solid white',
                    }
                },
            }
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    alignItems: 'stretch',
                    boxShadow: '0px 2px 1px rgba(255, 255, 255, 0.5)',
                    color: White,
                    paddingBottom: 0,
                    paddingTop: 0,
                    fontSize: '1.2rem',
                    '@media (min-width:600px)': {
                        fontSize: '1.5rem',
                        marginTop: '1rem',
                        paddingLeft: '0.75rem',
                    },
                },
                icon: {
                    fill: White
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    minWidth: '-webkit-fill-available',
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: BLUE,
                    fontSize: '1.2rem',
                    '@media (min-width:600px)': {
                        fontSize: '1.5rem',
                    },
                }
            }
        },
        MuiRating: {
            styleOverrides: {
                iconFilled: {
                    color: White
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                title: {
                    color: BLUE,
                    boxShadow: '0px 2px 1px rgba(0, 0, 0, 0.5)',
                    fontSize: '1rem',
                    textAlign: 'center',
                    fontWeight: 'bold'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    color: BLUE,
                    textAlign: 'center'
                }
            }
        },
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    width: '100px',
                    height: '100px'
                }
            }
        }
    },
    palette: {
        mode: 'light',
        error: {
            main: ORANGE,
            light: ORANGElight,
            dark: ORANGEdark
        },
        info: {
            main: BLUE,
            light: BLUElight,
            dark: BLUEdark
        },
        text: {
            primary: ORANGE,
            secondary: BLUE
        },
        primary: {
            main: White,
        },
        secondary: {
            main: BLUElightButton,
        }
    },
    typography: {
        fontFamily: [
            'Nunito',
            'Raleway',
            'Roboto',
            'Arial'
        ].join(','),
        h1: {
            fontFamily: 'Raleway',
            fontSize: '2.5rem',
            '@media (min-width:600px)': {
                fontSize: '3.5rem',
            },
            color: White,
            textAlign: 'center',
            marginTop: '20px',
        },
        h2: {
            fontFamily: 'Raleway',
            fontSize: '1.5rem',
            '@media (min-width:600px)': {
                fontSize: '2.5rem',
            },
            color: White,
            textAlign: 'center',
            marginTop: '0px',
            marginBottom: '40px',
        },
        h3: {
            fontFamily: 'Raleway',
            fontSize: '1.25rem',
            '@media (min-width:600px)': {
                fontSize: '1.5rem',
            },
            color: White,
            textAlign: 'center',
            marginTop: '12px',
            marginBottom: '12px',
        },
        h6: {
            fontFamily: 'Nunito',
            fontSize: '1.5rem',
            color: White,
            margin: '0.313rem',
            display: 'inline-block'
        },
        caption: {
            color: White,
            fontSize: '1.1rem'
        },
    },
});

export default theme;
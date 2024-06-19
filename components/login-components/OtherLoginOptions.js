// React Native components
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';

// Styles
import { otherLoginOptionsStyles } from '../../styles/login-styles/otherLoginOptionsStyles';

export default function OtherLoginOptions() {
    return(
        <View style = {otherLoginOptionsStyles.otherLoginOptionsContainer}>
            <View style = {otherLoginOptionsStyles.orContinueWithContainer}>
                <View style = {otherLoginOptionsStyles.orContinueWithLine}></View>
                <Text style = {otherLoginOptionsStyles.orContinueWith}>  
                    Or continue with 
                </Text>
                <View style = {otherLoginOptionsStyles.orContinueWithLine}></View>
            </View>
            <View style = {otherLoginOptionsStyles.otherLoginOptionsIconsContainer}>
                <View style = {otherLoginOptionsStyles.otherLoginOptionsIconContainer}>
                    <AppleIcon />
                </View>
                <View style = {otherLoginOptionsStyles.otherLoginOptionsIconContainer}>
                    <GoogleIcon />
                </View>
                <View style = {otherLoginOptionsStyles.otherLoginOptionsIconContainer}>
                    <FacebookIcon />
                </View>
            </View>
            <View style = {otherLoginOptionsStyles.registerContainer}> 
                <Text style = {otherLoginOptionsStyles.registerText}>
                    Haven't an account?
                </Text>
                <Text style = {otherLoginOptionsStyles.registerLink}>
                        Register
                </Text>
            </View>
        </View>
    )
}

function AppleIcon(){
    return(
        <Svg width = "22" height = "26" viewBox = "0 0 22 26" fill = "none" xmlns = "http://www.w3.org/2000/svg">
            <Path d = "M5.66838 25.5133C5.15577 25.1723 4.70145 24.7509 4.32288 24.2653C3.90646 23.7642 3.52064 23.2383 3.1675 22.6907C2.33882 21.4767 1.68895 20.1498 1.23782 18.7509C0.695879 17.1259 0.433441 15.5683 0.433441 14.0449C0.433441 12.3435 0.801504 10.8583 1.52138 9.61027C2.05501 8.63482 2.83959 7.81966 3.79394 7.24915C4.71882 6.67468 5.78151 6.36031 6.87007 6.33914C7.25113 6.33914 7.66144 6.39439 8.09694 6.50002C8.40976 6.58858 8.79082 6.72833 9.25638 6.90221C9.84869 7.13052 10.1745 7.27027 10.285 7.30439C10.6319 7.43114 10.9236 7.48639 11.1528 7.48639C11.3266 7.48639 11.572 7.43114 11.8507 7.34664C12.0075 7.29139 12.3033 7.19389 12.7266 7.01271C13.1458 6.85996 13.4757 6.72914 13.7381 6.63164C14.1403 6.51302 14.5295 6.40333 14.8764 6.34808C15.2877 6.28324 15.7051 6.26606 16.1204 6.29689C16.8399 6.34393 17.5487 6.49641 18.2239 6.74946C19.3281 7.19389 20.2211 7.88777 20.8857 8.87414C20.6048 9.04729 20.3411 9.24699 20.0984 9.47052C19.5699 9.93899 19.1198 10.489 18.7651 11.0996C18.3014 11.9341 18.061 12.8741 18.0671 13.8288C18.0842 15.0012 18.3848 16.0339 18.9771 16.9268C19.4126 17.5886 19.9785 18.1546 20.6403 18.59C20.9791 18.8183 21.2708 18.9751 21.5503 19.0808C21.4195 19.487 21.2798 19.8803 21.1148 20.2703C20.7407 21.1448 20.2874 21.9833 19.7604 22.7752C19.2908 23.4569 18.9227 23.9647 18.6432 24.3027C18.2077 24.8186 17.7884 25.2127 17.3651 25.4873C16.8996 25.7961 16.3495 25.961 15.7905 25.961C15.4119 25.9756 15.0334 25.9298 14.6693 25.8253C14.3564 25.7197 14.0469 25.6051 13.7422 25.4743C13.4254 25.3288 13.0988 25.2058 12.7648 25.1063C11.939 24.8942 11.0732 24.8928 10.2468 25.1022C9.90801 25.1997 9.58219 25.3135 9.26044 25.4532C8.80788 25.6433 8.50726 25.7709 8.33338 25.8253C7.98644 25.9269 7.6265 25.9903 7.26251 26.0114C6.69944 26.0114 6.17457 25.8505 5.65457 25.5247L5.66838 25.5133ZM13.0946 5.51364C12.3585 5.88171 11.6557 6.03852 10.9578 5.98733C10.8481 5.28452 10.9578 4.56546 11.2494 3.77814C11.4978 3.11114 11.8647 2.49454 12.3325 1.95814C12.8265 1.39347 13.426 0.930637 14.0973 0.595582C14.8123 0.227519 15.4939 0.0284565 16.1456 -0.000793457C16.2301 0.735332 16.1456 1.45927 15.875 2.24171C15.6246 2.93338 15.2584 3.5774 14.7919 4.14621C14.3159 4.71165 13.7316 5.17628 13.0735 5.51283L13.0946 5.51364Z" fill = "#0D0D26" />
        </Svg>
    )
}

function GoogleIcon() {
    return(
        <Svg width = "28" height = "28" viewBox = "0 0 28 28" fill = "none" xmlns = "http://www.w3.org/2000/svg">
            <Path d = "M25.4397 11.7151H24.5V11.6666H14V16.3333H20.5934C19.6315 19.0499 17.0467 21 14 21C10.1342 21 7 17.8657 7 14C7 10.1342 10.1342 6.99998 14 6.99998C15.7844 6.99998 17.4078 7.67315 18.6439 8.77273L21.9438 5.47281C19.8602 3.5309 17.073 2.33331 14 2.33331C7.55708 2.33331 2.33333 7.55706 2.33333 14C2.33333 20.4429 7.55708 25.6666 14 25.6666C20.4429 25.6666 25.6667 20.4429 25.6667 14C25.6667 13.2177 25.5862 12.4541 25.4397 11.7151Z" fill = "#FFC107" />
            <Path d = "M3.67848 8.56973L7.51156 11.3808C8.54873 8.81298 11.0606 6.99998 14 6.99998C15.7844 6.99998 17.4078 7.67314 18.6439 8.77273L21.9438 5.47281C19.8601 3.5309 17.073 2.33331 14 2.33331C9.51882 2.33331 5.63265 4.86323 3.67848 8.56973Z" fill = "#FF3D00" />
            <Path d = "M14 25.6666C17.0135 25.6666 19.7517 24.5134 21.8219 22.638L18.2111 19.5825C17.0004 20.5032 15.521 21.0012 14 21C10.9655 21 8.38892 19.0651 7.41825 16.3648L3.61375 19.2961C5.54459 23.0743 9.46575 25.6666 14 25.6666Z" fill = "#0E9D57" />
            <Path d = "M25.4398 11.7151H24.5V11.6667H14V16.3334H20.5934C20.1333 17.6263 19.3045 18.756 18.2093 19.5831L18.2111 19.5819L21.8219 22.6374C21.5664 22.8696 25.6667 19.8334 25.6667 14C25.6667 13.2178 25.5862 12.4542 25.4398 11.7151Z" fill = "#1976D2" />
        </Svg>
    )
}

function FacebookIcon(){
    return(
        <Svg width = "26" height = "26" viewBox = "0 0 26 26" fill = "none" xmlns = "http://www.w3.org/2000/svg">
            <Path fill-rule = "evenodd" clip-rule = "evenodd" d = "M25.25 13.0739C25.25 6.30901 19.7648 0.823853 13 0.823853C6.23516 0.823853 0.75 6.30901 0.75 13.0739C0.75 19.1879 5.22891 24.2558 11.0859 25.1756V16.616H7.97477V13.0739H11.0859V10.375C11.0859 7.30541 12.9152 5.60846 15.713 5.60846C17.0534 5.60846 18.4556 5.84799 18.4556 5.84799V8.86292H16.9102C15.3893 8.86292 14.9135 9.80682 14.9135 10.777V13.0739H18.3107L17.7682 16.616H14.9141V25.1767C20.7711 24.2574 25.25 19.1896 25.25 13.0739Z" fill = "#395185" />
        </Svg>
    )
}
import { StyleSheet } from "react-native";

export const userProfileStyles = StyleSheet.create({
    userProfileContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        position: "relative",
        height: '12%',
        marginTop: 30,
        flex: 1,
    },
    nameAndEmail: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        justifyContent: "center",
        flex: 4.5,
    },
    name: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#0D0D26',
    },
    email: {
        fontSize: 24,
        color: '#95969D'
    },
    imageAndStatus: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    userProfileImage: {
        position: 'absolute',
    },
    userStatus: {
        position: 'absolute',
        top: 10,
        right: 5,
        width: 15,
        height: 15,
        backgroundColor: "red",
        borderRadius: 50,
        borderWidth: 4,
        borderColor: "#FAFAFD",
        zIndex: 1,
    }
});
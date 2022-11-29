const style = {
    title: {
        textAlign: 'center',
        textAlignVertical: 'center',
        // fontWeight: "bold",
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },

    // TEXT
    text: {
        textAlign: 'left',
        textAlignVertical: 'center',
        // fontWeight: "bold",
        fontSize: 12,
    },
    text_alart: {
        color: '#b53737',
        fontWeight: 'bold',
        fontSize: 13,
    },
    text_busstop: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 15,
    },

    // CONTAINER
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer_bus: {
        // backgroundColor: '#77dd77',
        padding: 7,
        borderRadius: 10,
        marginLeft: 15,
        marginRight: 5,
    },
    iconContainer_busstop: {
        // backgroundColor: '#77dd77',
        padding: 7,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 15,
    },
    mapContainer: {
        borderWidth: 2,
        borderColor: '#10b6f6',
        position: 'relative',
        padding: 5,
    },

    // DATA
    emptyData: {
        textAlign: 'center',
        color: "#888",
    },
    inputScreen: {
        paddingVertical: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#29b6f6",
    },
    textInput: {
        width: "95%",
        height: 40,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 16,
    },
    bookmark: {
        borderTopWidth: 5,
        borderTopColor: '#A9CBD7',
        backgroundColor: '#fff',
        height: 130,
        flex: 1,
    },

    // MODAL
    bottomSheetContainer: {
        height: 200,
        backgroundColor: '#fff',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        padding: 20
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    AlarmTitle: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center'
    },
    modalBtn: {
        padding: 10,
        backgroundColor: '#29b6f6',
        borderRadius: 7,
        width: 100,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 10
    },
    btnText: {
        padding: 6,
        fontSize: 17,
        fontWeight: '700',
        color: '#fff',
        textAlign: 'center'
    }
}
export default style;
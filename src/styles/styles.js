import { makeStyles } from '@material-ui/core/styles';
//Create a constant that recives the component makeStyles from material-UI;
//This component help to create css styles with js objects;
//For each function (Page) have respective const;
export const HeaderStyles = makeStyles({
    header:{
        backgroundColor: "#707070",
        height: 220,
    },
    headerDesc:{
        textAlign: 'center',
        overflow: 'hidden',
        padding: "20px 10px",
    },
    btnContent:{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'space-between',
    },
})
export const HomeStyles = makeStyles({
    home:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content:{
        display: 'flex',
        flexWrap: 'wrap',
        height: 'auto',
        width: 850,
        alignContent: 'space-between',
    },
    card: {
        maxWidth: 180,
        height: 'auto',
        margin: '0 auto',
        marginTop: 20,
    },
    media: {
        height: 0,
        paddingTop: '100%',
    },
    selection:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    prodName:{
        marginBottom: 10,
    },
    prodDesc:{
        marginBottom: 10,
    },
    oldPrice:{},
    newPrice:{
        fontWeight: 'bold'
    },
    otherMethods:{
        marginBottom: 10,
    },
    btnBuy:{
        margin: '0 auto',
        width: '100%',
    },
    btnShowMore:{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 30,
    }
})
export const SendStyles = makeStyles( {
    textField:{
        width: 350,
    },
    btnSend:{
        marginTop: 10,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'space-between',
    }
})
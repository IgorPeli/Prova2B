import { Text, View, StyleSheet, Button, Image } from "react-native";

export default function Filme(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.filme.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.titulo}>Título: {props.filme.titulo}</Text>
                <Text style={styles.ataque}>Poder de Ataque: {props.filme.ataque}</Text>
                <Text style={styles.defesa}>Poder de Defesa: {props.filme.defesa}</Text> 
                <Text style={styles.especial}>Poder Especial: {props.filme.especial}</Text>
                <Button style={styles.btn} title="Trocar"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'red'
    },
    viewImg: {
        width: '30%',
        height: 150,
        backgroundColor: 'red'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData: {
        padding: 10,
        width: '70%',
        height: '100%',
    },
    titulo: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    sinopse: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    }, 
    preco: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
        
    },
    btn: {
        padding: 10,
        backgroundColor: 'black'
    }
});


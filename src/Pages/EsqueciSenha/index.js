import { TextInput, SafeAreaView, View, Image} from "react-native";
import styles from "./style"; 
import { Link } from "@react-navigation/native";


export default function EsqueciSenha(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    style={styles.logoImg}
                    source={{uri: 'https://i.pinimg.com/736x/fa/81/4a/fa814a9d4cab3c81f5ccf04cf157aaf9.jpg'}}
                />
            </View>
            <View style={styles.inputs}>
                <TextInput style={styles.inputEmail} placeholder='Login/Email'/>
                <TextInput style={styles.inputSenha} placeholder='Senha Antiga'/>
                <TextInput style={styles.inputSenha} placeholder='Nova Senha'/>
                <TextInput style={styles.inputSenha} placeholder='Repita sua nova senha'/>
            </View>
            <View style={styles.viewConfirmar}>
                <Link style={styles.btnConfirmar} to={{screen: "MoviesPage"}}>Confirmar</Link>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Login"}}>Volar a página inicial</Link>
            </View>
        </SafeAreaView>
    )
}
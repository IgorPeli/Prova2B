import { TextInput, SafeAreaView, View, Image} from "react-native";
import styles from "./style"; 
import { Link } from "@react-navigation/native";

export default function Registrar(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.viewImg}>
                <Image 
                    style={styles.logoImg}
                    source={{uri: 'https://i.pinimg.com/736x/fa/81/4a/fa814a9d4cab3c81f5ccf04cf157aaf9.jpg'}}
                />
            </View>
            <View style={styles.inputs}>
                <TextInput style={styles.inputNome} placeholder='Nome Completo'/>
                <TextInput style={styles.inputEmail} placeholder='Email'/>
                <TextInput style={styles.inputSenha} placeholder='Senha'/>
                <TextInput style={styles.inputConfirmarSenha} placeholder='Confirmar Senha'/>
            </View>
            <View style={styles.viewConfirmar}>
                <Link style={styles.btnConfirmar} to={{screen: "MoviesPage"}}>Registrar-se</Link>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Login"}}>Volte a pagina inicial</Link>
            </View>
        </SafeAreaView>
    )
}
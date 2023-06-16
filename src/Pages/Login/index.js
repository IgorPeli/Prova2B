import { TextInput, SafeAreaView, View, Image} from "react-native";
import { Link } from "@react-navigation/native";
import styles from "./style";

export default function Login(){
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
                <TextInput style={styles.inputSenha} placeholder='Senha'/>
            </View>
            <View style={styles.viewConfirmar}>
                <Link style={styles.btnConfirmar} to={{screen: "RGPlist"}}>Entrar</Link>
            </View>
            <View style={styles.viewLink}>
                <Link style={styles.link} to={{screen: "Register"}}>Registre-se</Link>
                <Link style={styles.link} to={{screen: "ForgotPassword"}}>Esqueci a senha</Link>
            </View>
        </SafeAreaView>
    )
}
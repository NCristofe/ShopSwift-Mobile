import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { styles } from './style'
import logo from '../../assets/logoShopSwift.png'

export const Login = () => {
    return (

        <View style={styles.containerHome}>
            <Image source={logo}/>

            <View style={styles.contentHome}>

                <View>

                    <Text style={styles.txtTitulo}>Faça login e se <Text style={styles.txtHighlights}>surpreenda</Text></Text>
                    <View style={styles.containerForm}>

                        <View style={styles.containerInputs}>

                            <View>
                                <Text>E-mail</Text>
                                <TextInput style={styles.Input} keyboardType='email-address' />
                            </View>

                            <View>
                                <Text>Senha</Text>
                                <TextInput style={styles.Input} secureTextEntry={true}/>
                            </View>

                        </View>

                        <Pressable style={styles.buttonLogin}>
                            <Text style={styles.txtLogin}>Entrar</Text>
                        </Pressable>

                    </View>

                    <Text style={styles.txtNaoTemConta}> Não tem um conta? <Text style={styles.txtCriarConta}>Criar conta</Text></Text>
                </View>

            </View>

        </View>

    )
}

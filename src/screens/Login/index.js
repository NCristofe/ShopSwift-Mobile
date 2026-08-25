import { Image, Text, View } from 'react-native'
import { styles } from './style'
import logo from '../../assets/logoShopSwift.png'

export const Login = () => {
    return(

        <View>
            <Image source={logo}/>

            <Text style={styles.txtTitulo}>Faça login e se <Text style={styles.txtHighlights}>surpreenda</Text></Text>

        </View>

    )
}
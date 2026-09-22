import { TextInput, Pressable, Text } from 'react-native'

import {
    ContainerContact,
    MapContainer,
    MapText,
    MapImage,
    ContainerForm,
    MessageText,
    TextLabel,
    TextHighlight,
} from './style'

import Logo from './assets/logo.png'
import Localizacao from './assets/localizacao.png'
import { ScrollView } from 'react-native/types_generated/index'

export const Contact = () => {
    return (
        <ScrollView>
               <ContainerContact>

            <MapImage source={Logo} />

            <MapContainer>

                <MapText>
                    Venha nos <TextHighlight>Visitar</TextHighlight>
                </MapText>

                <MapImage source={Localizacao} />

            </MapContainer>

            <ContainerForm>

                <MessageText>
                    Mande uma <TextHighlight>Mensagem</TextHighlight>
                </MessageText>

                <TextLabel>
                    Assunto
                </TextLabel>

                <TextInput />

                <TextLabel>
                    Mensagem
                </TextLabel>

                <TextInput />

                <Pressable>
                    <Text>Enviar</Text>
                </Pressable>

            </ContainerForm>

        </ContainerContact>
    )
}   

        </ScrollView>
     
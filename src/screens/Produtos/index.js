import { Image, Pressable } from 'react-native'
import Logo from '../../../assets/logoShopSwift.png'
import IconFilter from '../../../assets/IconFilter.svg'
import { ContainerProducts, ContainerSearch, ProductSection, TextInput } from './style'

export const Produtos = () => {
    return (

       <ScrollView>
          <ContainerProducts>
            <Image source={Logo} />

           <ContainerSearch>

            <TextInput>
<Pressable>
    <Image source={Logo} />
</Pressable>
            </TextInput>
            <Pressable>
                <IconFilter width={24} height={24} />
            </Pressable>


           <ProductSection/>
           </ContainerSearch>
        </ContainerProducts>
       </ScrollView>
      
        
    )
}

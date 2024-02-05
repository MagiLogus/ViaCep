import {
  useFonts, Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light, Roboto_300Light_Italic, Roboto_400Regular, Roboto_400Regular_Italic, Roboto_500Medium, Roboto_500Medium_Italic, Roboto_700Bold, Roboto_700Bold_Italic, Roboto_900Black, Roboto_900Black_Italic
} from '@expo-google-fonts/roboto';
import { useEffect, useState } from 'react';
import api from './src/services/Services';
import TitleBar from './src/components/TitleBar/TitleBar';
import ContainerScreen from './src/components/Container/Container';
import { FullInput, UfInput, StateInput } from './src/components/Input/Input';
import ContainerForm from './src/components/Container/ContainerForm';
import ContainerRow from './src/components/Container/ContainerRow';
import ContainerScroll from './src/components/Container/ContainerScroll';
import ContainerArea from './src/components/Container/ContainerArea';

export default function App() {

  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [uf, setUf] = useState('');

  useEffect(async () => {
    try {
      if (cep != "" && cep.length === 8) {
        const response = await api.get(`/${cep}/json/`);

        if (response.error) {
          alert("Verifique o CEP!")
          return;
        }

        setLogradouro(response.data.logradouro);
        setBairro(response.data.bairro);
        setCidade(response.data.localidade);
        setEstado(response.data.uf);
        setUf(response.data.uf);


      }
    } catch (error) {

    }
  }, [cep]);

  const [fontsLoaded, fontError] = useFonts({
    Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light, Roboto_300Light_Italic, Roboto_400Regular, Roboto_400Regular_Italic, Roboto_500Medium, Roboto_500Medium_Italic, Roboto_700Bold, Roboto_700Bold_Italic, Roboto_900Black, Roboto_900Black_Italic
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerScreen>
      <TitleBar />
      <ContainerArea>
        <ContainerScroll >
          <ContainerForm>
            <FullInput title="Informar CEP:"
              placeholder="CEP..."
              value={cep}
              onChangeText={text => setCep(text)}
              keyboardType="numeric" 
              editable={true}
              />
            <FullInput title="Logradouro:"
              placeholder="Logradouro..."
              value={logradouro}
            />
            <FullInput title="Bairro:"
              placeholder="Bairro..."
              value={bairro}
            />
            <FullInput title="Cidade:"
              placeholder="Cidade..."
              value={cidade}
            />
            <ContainerRow>
              <StateInput title="Estado:"
                placeholder="Estado..."
                value={estado}
              />
              <UfInput title="UF:"
                placeholder="UF..."
                value={uf}
              />
            </ContainerRow>
          </ContainerForm>
        </ContainerScroll>
      </ContainerArea>
    </ContainerScreen>
  );
}
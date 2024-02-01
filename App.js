import {
  useFonts, Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light, Roboto_300Light_Italic, Roboto_400Regular, Roboto_400Regular_Italic, Roboto_500Medium, Roboto_500Medium_Italic, Roboto_700Bold, Roboto_700Bold_Italic, Roboto_900Black, Roboto_900Black_Italic
} from '@expo-google-fonts/roboto';
import { useState } from 'react';
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

  const [fontsLoaded, fontError] = useFonts({
    Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light, Roboto_300Light_Italic, Roboto_400Regular, Roboto_400Regular_Italic, Roboto_500Medium, Roboto_500Medium_Italic, Roboto_700Bold, Roboto_700Bold_Italic, Roboto_900Black, Roboto_900Black_Italic
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  async function buscarEndereco() {
    if (cep.length === 8) {
      try {
        const response = await api.get(`/${cep}/json`);
        // Verifique se a resposta não contém o campo 'erro'
        if (response.data) {
          setLogradouro(response.data.logradouro);
          setBairro(response.data.bairro);
          setCidade(response.data.localidade);
          setEstado(response.data.uf);
          setUf(response.data.uf);
        } else {
          console.error("CEP inválido ou não encontrado");
          // Aqui você pode limpar os campos ou exibir uma mensagem ao usuário
        }
      } catch (error) {
        console.error("Erro na busca do endereço: ", error);
        // Tratamento de erro, como exibir uma mensagem ao usuário
      }
    }
  }

  function handleCepChange(text) {
    setCep(text.replace(/\D/g, ''));
    if (text.replace(/\D/g, '').length === 8) {
      buscarEndereco();
    }
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
              onChangeText={handleCepChange}
              keyboardType="numeric" />
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
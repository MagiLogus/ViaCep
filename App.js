import {
  useFonts, Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light, Roboto_300Light_Italic, Roboto_400Regular, Roboto_400Regular_Italic, Roboto_500Medium, Roboto_500Medium_Italic, Roboto_700Bold, Roboto_700Bold_Italic, Roboto_900Black, Roboto_900Black_Italic
} from '@expo-google-fonts/roboto';
import TitleBar from './src/components/TitleBar/TitleBar';
import ContainerScreen from './src/components/Container/Container';
import { FullInput, UfInput, StateInput } from './src/components/Input/Input';
import ContainerForm from './src/components/Container/ContainerForm';
import ContainerRow from './src/components/Container/ContainerRow';
import ContainerScroll from './src/components/Container/ContainerScroll';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    Roboto_100Thin, Roboto_100Thin_Italic, Roboto_300Light, Roboto_300Light_Italic, Roboto_400Regular, Roboto_400Regular_Italic, Roboto_500Medium, Roboto_500Medium_Italic, Roboto_700Bold, Roboto_700Bold_Italic, Roboto_900Black, Roboto_900Black_Italic
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ContainerScreen>
      <TitleBar />
      <ContainerScroll >
        <ContainerForm>
          <FullInput title="Informar CEP:" placeholder="CEP..."></FullInput>
          <FullInput title="Logradouro:" placeholder="Logradouro..."></FullInput>
          <FullInput title="Bairro:" placeholder="Bairro..."></FullInput>
          <FullInput title="Cidade:" placeholder="Cidade..."></FullInput>
          <ContainerRow>
            <StateInput title="Estado:" placeholder="Estado..."></StateInput>
            <UfInput title="UF:" placeholder="UF..."></UfInput>
          </ContainerRow>
        </ContainerForm>
      </ContainerScroll>
    </ContainerScreen>
  );
}
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, ActivityIndicator, Alert } from 'react-native';
import API from '../../Api';

import { 
    Container, 
    HeaderText, 
    CityTextInput, 
    SearchButton,
    SearchButtonText, 
    WeatherCard,
    CityContainer,
    CityText,
    CountryBadgeText,
    TempContainer,
    TempText,
    CelciusText,
    WeatherIcon,
    WeatherDetails
} from './styles'

export default function home(){
    const [city, setCity] = useState('');
    const [showData, setShowData] = useState(false);
    const [result, setResult] = useState('')
    const [loading, setLoading] = useState(false);

    async function GetWeatherData(){
        Keyboard.dismiss();
        setLoading(true);

        try {
            const response = await API.get(`current.json?key=cd46ead80fb04f11988161547212010&q=${city}&aqi=no&lang=pt`)

            setResult({
                name:response.data.location.name,
                country:response.data.location.country,
                description:response.data.current.condition.text.toUpperCase(),
                icon:"https:" + response.data.current.condition.icon,
                temp:response.data.current.temp_c
            })
    
            setShowData(true);
            setCity('');

        } catch (error) {
            Alert.alert("Erro", "Cidade não encontrada");
            setCity('');
        }
        
        setLoading(false);
    }

    return (
        <Container>
            <StatusBar
              style="light"
              translucent={false}
              backgroundColor="#0A1F44"
            />

            <HeaderText>Digite o nome da sua cidade abaixo.</HeaderText>
            <CityTextInput 
                value={city}
                onChangeText={setCity}
            />

            <SearchButton onPress={() => {GetWeatherData()}}>
                {loading ? <ActivityIndicator color="#FFF" /> : <SearchButtonText>Pesquisar</SearchButtonText>}           
            </SearchButton>

            {showData && <WeatherCard>
                <CityContainer>
                    <CityText>{result.name}</CityText>
                    <CountryBadgeText>{result.country}</CountryBadgeText>
                </CityContainer>

                <TempContainer>
                    <TempText>{Math.round(result.temp)}</TempText>
                    <CelciusText>ºC</CelciusText>
                    <WeatherIcon 
                        source={{uri:result.icon}}
                    />
                </TempContainer>
            
            <WeatherDetails>{result.description.toUpperCase()}</WeatherDetails>
            </WeatherCard>}
        </Container>
    );
}
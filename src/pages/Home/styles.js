import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #0A1F44;
    flex: 1;
`;

export const HeaderText = styled.Text`
    color: #FFF;
    margin-top: 80px;
    margin-left: 35px;
    font-size: 20px;
`;

export const CityTextInput = styled.TextInput`
    background-color: #FFF;
    margin: 15px 20px 0px 20px;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
    font-size: 15px;
`;

export const SearchButton = styled.TouchableOpacity`
    background-color: #FF1E42;
    margin-top: 25px;
    width: 145px;
    height: 40px;
    border-radius: 10px;
    align-self: center;
    align-items: center;
    justify-content: center;
`;

export const SearchButtonText = styled.Text`
    color:#FFF;
    font-size: 20px;
    font-weight: bold;
`;

export const WeatherCard = styled.View`
    align-self: center;
    height: 260px;
    width: 245px;
    margin-top: 50px;
    background-color:#FFF;
    border-radius: 25px;
`;

export const CityContainer = styled.View`
    flex-direction: column;
    margin-left: 25px;
    margin-top: 20px;
`;

export const CityText = styled.Text`
    color: #53627C;
    font-size: 20px;
    font-weight: bold;
`;

export const CountryBadgeText = styled.Text`
    color: #53629C;
    font-size: 16px;
`;

export const TempContainer = styled.View`
    flex-direction: row;
    margin-top: 0px;
    margin-left: 25px;
`;

export const TempText = styled.Text`
    width: 90px;
    font-size: 75px;
    font-weight: bold;
`;

export const CelciusText = styled.Text`
    font-weight: bold;
    font-size: 24px;
    position:absolute;
    top: 14px;
    left: 83px;
`;

export const WeatherIcon = styled.Image`
    margin-left: 40px;
    margin-bottom: 10px;
    height: 64px;
    width: 64px;
    align-self: center;
    justify-content: flex-end;
`;

export const WeatherDetails= styled.Text`
    font-size: 18px;
    font-weight:bold;
    color: #53627C;
    margin-top: 10px;
    margin-left: 25px;
`;
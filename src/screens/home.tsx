import { Avatar, Header, Icon, ListItem, Tab, TabView, Text } from '@rneui/base';
import { FAB } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {

  const [index, setIndex] = React.useState(0);
  const list = [
    {
      name: 'Pelada do capial',
      avatar_url: 'https://www.shoppingoi.com.br/media/catalog/product/cache/1/image/460x460/9df78eab33525d08d6e5fb8d27136e95/5/1/515156126.png',
    },
    {
      name: 'Campeonato porco sorto',
      avatar_url: 'https://iowacapitaldispatch.com/wp-content/uploads/2023/10/football-on-field-_-getty-1024x683.jpg',
    },
    {
      name: 'Nao sei o que',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9VbKEJJDb4ZrXPzv8Syov5j9ofhyLZR1HnvkpUi3lrQ&s',
    },
    {
      name: 'Bola pra frente',
      avatar_url: 'https://cajamar.sp.gov.br/esportes/wp-content/uploads/sites/11/2023/07/logo-campeonato-municipal-1-divisao-1131x960.png',
    },
    {
      name: 'Folia total',
      avatar_url: 'https://s2-ge.glbimg.com/fgBxFeYH7dGgdLkQ9rK_--O0ftE=/0x0:3000x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/Q/c/y1QyHfSDyGtJqf099cLQ/agif2304011528072.jpg',
    },
    {
      name: 'Finalzona braba',
      avatar_url: 'https://jpimg.com.br/uploads/2023/05/12-curiosidades-sobre-o-campeonato-brasileiro-de-futebol.jpg',
    },
    {
      name: 'Pelada do capial',
      avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv89OSY-nBJ14YaeVk8kwYBheRS-1BgcD0Mw&s',
    },
    {
      name: 'Campeonato porco sorto',
      avatar_url: 'https://iowacapitaldispatch.com/wp-content/uploads/2023/10/football-on-field-_-getty-1024x683.jpg',
    },
  ]

  return (
    <SafeAreaProvider>
      <Header
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={{
          text: "CapiApp",
          style: { color: "#fff" }
        }}
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 90,
          backgroundColor: '#3f69ed'
        }}
        centerContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        leftComponent={{ icon: "menu", color: "#fff" }}
        leftContainerStyle={{}}
        linearGradientProps={{}}
        placement="center"
        rightComponent={{ icon: "home", color: "#fff" }}
        rightContainerStyle={{}}
        statusBarProps={{}}
      />

      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        containerStyle={{
          backgroundColor: '#3f69ed'
        }}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Campeonatos"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'trophy', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Favoritos"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'heart', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Apostas"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'cash-outline', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: '100%', }}>
          <View>
            {
              list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar source={{ uri: l.avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title onPress={() => navigation.navigate('CreateTournament')}>{l.name}</ListItem.Title>
                    <Icon
                      name='arrow-forward-outline'
                      type='ionicon'
                      containerStyle={{ position: 'absolute', right: 0 }} />
                  </ListItem.Content>
                </ListItem>
              ))
            }
          </View>
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
      <View style={{position: 'absolute', bottom: 20, right: 20}}>
        <FAB
          icon={{ name: 'add', color: 'white' }}
          color='blue'
          size="large"
          onPress={() => navigation.navigate('CreateTournament')}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
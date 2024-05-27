import { Avatar, Header, Icon, ListItem, Tab, TabView, Text } from '@rneui/base';
import { FAB } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Teams from './teams';
import Players from './players';

const ManageTournament = ({ navigation }) => {

  const [index, setIndex] = React.useState(0);

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
        leftComponent={{ icon: "arrow-back-outline", type: 'ionicon', color: "#fff" }}
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
          title="Equipes"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'shield-half-outline', type: 'ionicon', color: 'white' }}
        />
        <Tab.Item
          title="Jogadores"
          titleStyle={{ fontSize: 12 }}
          icon={{ name: 'people', type: 'ionicon', color: 'white' }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: '100%', }}>
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <Teams navigation={navigation}></Teams>
        </TabView.Item>
        <TabView.Item style={{ width: '100%' }}>
          <Players></Players>
        </TabView.Item>
      </TabView>
    </SafeAreaProvider>
  );
};

export default ManageTournament;
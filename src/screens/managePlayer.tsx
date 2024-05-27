import {
  FAB,
  Header,
  Icon,
  Input,
  Tab,
  TabView
} from '@rneui/themed';
import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ManagePlayer = props => {
  const [index, setIndex] = useState(0);

  const loadPlayers = () => {
    storage
      .load({
        key: 'players',
      })
      .then(ret => {
        console.log(ret.userid);
      })
      .catch(err => {
        // any exception including data not found
        // goes to catch()
        console.warn(err.message);
        switch (err.name) {
          case 'NotFoundError':
            // TODO;
            break;
          case 'ExpiredError':
            // TODO
            break;
        }
      });
  };

  return (
    <SafeAreaProvider>
      <Header
        backgroundImageStyle={{}}
        barStyle="default"
        centerComponent={{
          text: 'CapiApp',
          style: {color: '#fff'},
        }}
        containerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 90,
          backgroundColor: '#3f69ed',
        }}
        centerContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        leftComponent={{
          icon: 'arrow-back-outline',
          type: 'ionicon',
          color: '#fff',
        }}
        leftContainerStyle={{}}
        linearGradientProps={{}}
        placement="center"
        rightComponent={{icon: 'home', color: '#fff'}}
        rightContainerStyle={{}}
        statusBarProps={{}}
      />

      <Tab
        value={index}
        onChange={e => setIndex(e)}
        containerStyle={{
          backgroundColor: '#3f69ed',
        }}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary">
        <Tab.Item
          title="Informações"
          titleStyle={{fontSize: 12}}
          icon={{
            name: 'shield-half-outline',
            type: 'ionicon',
            color: 'white',
          }}
        />
        <Tab.Item
          title="Jogadores"
          titleStyle={{fontSize: 12}}
          icon={{name: 'people', type: 'ionicon', color: 'white'}}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{width: '100%'}}>
          <Input
            containerStyle={{paddingTop: 50}}
            label="Nome"
            leftIcon={
              <Icon name="bookmark-outline" type="ionicons" size={20} />
            }
            placeholder="Equipe azul"
            value={props.route.params.team.name}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          
        </TabView.Item>
      </TabView>
      <View style={{position: 'absolute', bottom: 20, right: 20}}>
        {/* <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
          <Dialog.Title title="Quantas equipes quer criar?" />
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                justifyContent: 'center',
                fontSize: 50,
                alignItems: 'center',
              }}>
              {value}
            </Text>
          </View>

          <Slider
            value={value}
            onValueChange={setValue}
            maximumValue={10}
            minimumValue={0}
            step={1}
            allowTouchTrack
            trackStyle={{height: 5, backgroundColor: 'transparent'}}
            thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
            thumbProps={{
              children: (
                <Icon
                  name="add"
                  size={20}
                  reverse
                  containerStyle={{bottom: 20, right: 20}}
                />
              ),
            }}
          />

          <Button onPress={() => createTeams(value)}>Criar</Button>
        </Dialog> */}
        <FAB
          icon={{name: 'save', color: 'white'}}
          color="blue"
          size="large"
        />
      </View>
    </SafeAreaProvider>
  );
};

export default ManagePlayer;

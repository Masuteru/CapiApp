import {
  Avatar,
  Button,
  Dialog,
  FAB,
  Header,
  Icon,
  Input,
  ListItem,
  Tab,
  TabView,
  Text,
} from '@rneui/themed';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Player, Team} from '../interfaces/models';
import {View} from 'react-native';
import storage from '../storage/storage';

const ManageTeam = props => {
  let initialPlayer: Player[] = [];

  const [index, setIndex] = useState(0);
  const [checked, setChecked] = React.useState([false, false]);
  const [visible1, setVisible1] = useState(false);
  const [players, setPlayers] = useState(initialPlayer);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

  let team: Team = props.route.params.team;

  const loadPlayers = () => {
    storage
      .load({
        key: 'players',
      })
      .then(ret => {
        setPlayers(ret);
        console.log('ret', players);
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

  const CheckPlayers = () => {
    loadPlayers();

    if (team.players.length === 0) {
      return (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Adicionar Jogador</ListItem.Title>
            <Icon
              name="add-circle-outline"
              type="ionicon"
              containerStyle={{position: 'absolute', right: 0}}
              onPress={toggleDialog1}
            />
          </ListItem.Content>
        </ListItem>
      );
    } else {
      return (
        <View>
          {team.players.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar
                source={{
                  uri: 'https://i.etsystatic.com/15536434/r/il/6784b4/3646387848/il_fullxfull.3646387848_d8xu.jpg',
                }}
              />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <Icon
                  name="arrow-forward-outline"
                  type="ionicon"
                  containerStyle={{position: 'absolute', right: 0}}
                />
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      );
    }
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
            value={team.name}
          />
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <CheckPlayers />
        </TabView.Item>
      </TabView>
      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <Dialog.Title title="Escolha os jogadores" />
        {players.map((l, i) => (
          <ListItem>
            <ListItem.CheckBox
              key={i}
              checked={checked[0]}
              onPress={() => setChecked([!checked[0], checked[1]])}
              containerStyle={{
                marginHorizontal: -10,
                borderRadius: 8,
              }}
            />
            <Avatar
              rounded
              source={{
                uri: 'https://i.etsystatic.com/15536434/r/il/6784b4/3646387848/il_fullxfull.3646387848_d8xu.jpg',
              }}
            />
            <ListItem.Content>
              <ListItem.Title style={{fontWeight: '700'}}>
                {l.name}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
        <Button>Adicionar</Button>
      </Dialog>
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
        <FAB icon={{name: 'save', color: 'white'}} color="blue" size="large" />
      </View>
    </SafeAreaProvider>
  );
};

export default ManageTeam;

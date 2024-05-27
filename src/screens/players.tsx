import { Avatar, Header, Icon, ListItem, Tab, TabView, Text } from '@rneui/base';
import { Button, Dialog, FAB, Slider } from '@rneui/themed';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { create } from 'react-test-renderer';
import storage from '../storage/storage';
import { Player } from '../interfaces/models';

const Players = () => {

  let initialPlayer: Player[] = [];

  let test: Player[] = [];


  const [players, setPlayers] = useState(initialPlayer);
  const [value, setValue,] = useState(0);
  const [visible1, setVisible1] = useState(false);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

  const createPlayers = (quantity: number) => {
    console.log(quantity)
    for (let i = 0; i < quantity; i++) {
      initialPlayer[i] = {
        id: i+1,
        name: "Jogador " + (i + 1).toString(),
        teamId: 0,
      }
      console.log('play', initialPlayer)
    }
      setPlayers(test);

      savePlayers();

      toggleDialog1();
    }

    const savePlayers = () => {
      console.log('peeps', players)
      storage
        .save({
          key: 'players', // Note: Do not use underscore("_") in key!
          data: players,
        })
        .then(
          loadPlayers
        );
    };
  
    const loadPlayers = () => {
      storage
        .load({
          key: 'players',
        })
        .then(ret => {
          console.log('load', ret);
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

        <View>
          {
            players.map((l, i) => (
              <ListItem key={i} bottomDivider>
                <Avatar source={{ uri: 'https://i.etsystatic.com/15536434/r/il/6784b4/3646387848/il_fullxfull.3646387848_d8xu.jpg' }} />
                <ListItem.Content>
                  <ListItem.Title >{l.name}</ListItem.Title>
                  <Icon
                    name='arrow-forward-outline'
                    type='ionicon'
                    containerStyle={{ position: 'absolute', right: 0 }} />
                </ListItem.Content>
              </ListItem>
            ))
          }
        </View>

        <View style={{ position: 'absolute', bottom: 20, right: 20 }}>
          <Dialog
            isVisible={visible1}
            onBackdropPress={toggleDialog1}
          >
            <Dialog.Title title="Quantos jogadores quer criar?" />
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ justifyContent: 'center', fontSize: 50, alignItems: 'center' }}>{value}</Text>
            </View>

            <Slider
              value={value}
              onValueChange={setValue}
              maximumValue={10}
              minimumValue={0}
              step={1}
              allowTouchTrack
              trackStyle={{ height: 5, backgroundColor: 'transparent' }}
              thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
              thumbProps={{
                children: (
                  <Icon
                    name="add"
                    size={20}
                    reverse
                    containerStyle={{ bottom: 20, right: 20 }}
                  />
                ),
              }}
            />

            <Button onPress={() => createPlayers(value)}>Criar</Button>


          </Dialog>
          <FAB
            icon={{ name: 'add', color: 'white' }}
            color='blue'
            size="large"
            onPress={() => toggleDialog1()}
          />
        </View>
      </SafeAreaProvider>
    );
  };

  export default Players;
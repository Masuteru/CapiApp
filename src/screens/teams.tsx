import firestore from '@react-native-firebase/firestore';
import {Avatar, Icon, ListItem, Text} from '@rneui/base';
import {Button, Dialog, FAB, Slider} from '@rneui/themed';
import React, {useState} from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Team} from '../interfaces/models';
import storage from '../storage/storage';

const Teams = ({navigation}) => {
  async function getTeams() {
    const usersCollection = await firestore().collection('teams').get();
  }

  let initialTeam: Team[] = [];

  let test: Team[] = [];

  const [teams, setTeams] = useState(initialTeam);
  const [value, setValue] = useState(0);
  const [visible1, setVisible1] = useState(false);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

  const createTeams = (quantity: number) => {
    console.log(quantity);
    for (let i = 0; i < quantity; i++) {
      teams[i] = {id: i, name: 'Equipe ' + i, players: []};
      // firestore()
      //   .collection('teams')
      //   .add({
      //     id: i + 1,
      //     name: "Equipe " + (i + 1).toString()
      //   });
    }

    saveTeams();

    toggleDialog1();
  };

  const saveTeams = () => {
    storage
      .save({
        key: 'teams', // Note: Do not use underscore("_") in key!
        data: teams,
      })
      .then(
        loadTeams
      );
  };

  const loadTeams = () => {
    storage
      .load({
        key: 'teams',
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

  const navigate = () => {

  }

  return (
    <SafeAreaProvider>
      <View>
        {teams.map((team, i) => (
          <ListItem
            key={i}
            bottomDivider
            onPress={() => navigation.navigate('ManageTeam', {team})}>
            <Avatar
              source={{
                uri: 'https://cdn.vectorstock.com/i/500p/62/57/protection-shield-vector-47706257.jpg',
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{team.name}</ListItem.Title>
              <Icon
                name="arrow-forward-outline"
                type="ionicon"
                containerStyle={{position: 'absolute', right: 0}}
              />
            </ListItem.Content>
          </ListItem>
        ))}
      </View>

      <View style={{position: 'absolute', bottom: 20, right: 20}}>
        <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
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
        </Dialog>
        <FAB
          icon={{name: 'add', color: 'white'}}
          color="blue"
          size="large"
          onPress={() => toggleDialog1()}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default Teams;

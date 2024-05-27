import { Input, Icon, Dialog, ListItem, Avatar, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const CreateTournament = ({ navigation }) => {

  interface Tournament {
    name: string,
    sport: Esportes,
  }

  enum Esportes {
    NONE,
    FUTEBOL,
    VOLLEY,
    PINGPONG
  }

  let selectedSport: Esportes;
  let tournament: Tournament = {
    name: '',
    sport: Esportes.NONE
  };

  const [visible1, setVisible1] = useState(false);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };

  const setSport = (id: number) => {
    selectedSport = id;
    toggleDialog1
  }

  const userlist = [
    {
      type: Esportes.FUTEBOL,
      name: 'Futebol',
      avatar_url: 'https://static.vecteezy.com/system/resources/thumbnails/008/957/248/small/football-icon-clipart-soccer-in-flat-animated-illustration-on-white-background-vector.jpg',
    },
    {
      type: Esportes.VOLLEY,
      name: 'Volley',
      avatar_url: 'https://img.freepik.com/premium-vector/volleyball-clipart-volleyball-vector-volleyball-illustration-sports-vector-sports-clipart-sport_844323-313.jpg',
    },
    {
      type: Esportes.PINGPONG,
      name: 'Ping Pong',
      avatar_url:
        'https://cdn.pixabay.com/photo/2022/05/23/16/05/table-tennis-7216580_1280.png',
    },
  ];

  return (
    <SafeAreaProvider>
      <Input
        containerStyle={{ paddingTop: 50 }}
        label="Nome do campeonato"
        leftIcon={<Icon name="key" size={20} />}
        placeholder="Super Liga"
        value={tournament.name}
      />
      <Button onPress={toggleDialog1}></Button>

      <Dialog
        isVisible={visible1}
        onBackdropPress={toggleDialog1}
      >
        <Dialog.Title title="Escolha o esporte" />
        {userlist.map((l, i) => (
          <ListItem
            key={i}
            containerStyle={{
              marginHorizontal: -10,
              borderRadius: 8,
            }}
            onPress={() => {tournament.sport = l.type}}
          >
            <Avatar rounded source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title style={{ fontWeight: '700' }}>
                {l.name}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </Dialog>
    </SafeAreaProvider>
  );
};

export default CreateTournament;
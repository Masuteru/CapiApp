import { Input, Icon, Dialog, ListItem, Avatar, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const CreatePlayer = ({ navigation }) => {

  interface Player {
    name: string,
    playerNumber: string;
  }

  let player: Player = {
    name: '',
    playerNumber: '',
  };


  return (
    <SafeAreaProvider>
      <Input
        containerStyle={{ paddingTop: 50 }}
        label="Nome do jogador"
        placeholder="Insira o nome..."
        value={player.name}
      />
      <Input
        containerStyle={{ paddingTop: 50 }}
        label="Número do jogador"
        placeholder="Insira o número..."
        keyboardType='numeric'
        value={player.playerNumber}
      />


    </SafeAreaProvider>
  );
};

export default CreatePlayer;
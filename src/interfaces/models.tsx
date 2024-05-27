export interface Player {
  id: number;
  name: string;
  teamId: number;
}

export interface Team {
  id: number;
  name: string;
  players: Player[];
}

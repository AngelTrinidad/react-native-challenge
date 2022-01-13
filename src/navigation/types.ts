export type PublicStack = {
  ToDo: undefined;
  Home: undefined;
};
export enum PublicStackScreen {
  Home = "Home",
  ToDo = "ToDo",
}

export type AuthStack = {
  List: undefined;
  Detail: {
    id: string;
  };
  Wallet: undefined;
  Account: undefined;
  Partners: undefined;
};

export enum AuthStackScreen {
  List = "List",
  Detail = "Detail",
  Wallet = "Wallet",
  Account = "Account",
  Partners = "Partners",
}

export interface IUser {
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    games_played: number,
    wins: number,
    loss: number,
    win_rate: number,
    loss_rate: number,
    _id: string,
    _v: string    

    //add password confirmation
}
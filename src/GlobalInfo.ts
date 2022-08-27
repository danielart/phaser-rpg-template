// https://blog.ourcade.co/posts/2020/phaser3-how-to-communicate-between-scenes/

class GlobalInfo extends Phaser.Events.EventEmitter {
    _gameProgress: {
        [index: string]: any
    }

    constructor() {
        super()

        // initial state from global info
        this._gameProgress = {
            // habilities to unblock
            canBark: false,
            canSniff: false,
            coins: 0,
            health: 100
            // here all info you want global
        }


        Object.keys(this._gameProgress).forEach(key => {
            this.on(key, (args: boolean) => {
                this._gameProgress[key] = args
            })
        })

    }
}

export default new GlobalInfo()
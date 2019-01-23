interface EventObject {
    [key:string]: any;
}
class Event{
    private _Events : EventObject = {} ;

    public $on ( eventName : string , fn : Function ) : { off : Function } {
        if(!this._Events.hasOwnProperty(eventName))
            this._Events[eventName] = [];

        this._Events[eventName].push( fn ) ;

        return {
            off : () => {
                this._Events = (this._Events[eventName] as Array<Function>).filter( item => item !== fn) ;
                console.log(this) ;
            }
        };
    }

    public $emit( eventName : string , data : any ) : void {
        const _arr = this._Events[eventName] as Array<Function>;
        if(!_arr || _arr.length === 0 )
            return;

        _arr.forEach( item => {
            item.call(this , data) ;
        })
    }
};

export const $Event = new Event ;
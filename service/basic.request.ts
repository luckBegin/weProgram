class BuildHeader {
	private header : { [ key : string ] : string | Function } = {} ;

	public build : Function = ( key : string , value : string ) :BuildHeader => {
		this.header[key] = value ;
		return this ;
	}

	public getHeader() : object {
		return this.header ;
	}
}

class BuildRequest {
	static build : Function = ( method : string , url : string ,  data ? : any ) : Promise<any> => {
		return new Promise<any>( ( (resolve, reject) => {
			const option = new BuildHeader()
				.build( { url : url , method : method })
				.build( { success  : ( data : any ) : void => { resolve( data ) } } )
				.build( { error :  ( err : any ) : void => { reject(err ) } } ) ;

			if(data)
				option.build( { data : data } ) ;

			wx.request( option.getHeader() as any ) ;
		}));

	}
}

export class HTTP {
	static GET : Function = ( url : string , data? : object) : Promise<any> => {
		return BuildRequest.build('get' , url , data )
	};

	static POST : Function = ( url :string , data ?: object ) : Promise<any> => {
		return BuildRequest.build("POST" , url , data) ;
	}
	static DELETE : Function = ( url : string , data ?: object) : Promise<any> => {
		return BuildRequest.build(url , data ) ;
	}

	static PUT : Function = (url :string , data ?: object ) : Promise<any> => {
		return BuildRequest.build(url , data) ;
	}
}
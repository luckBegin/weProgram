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
export const request = {
	GET : ( url : string , paras ?: object ) : Promise<any> => {
		return new Promise<any>( ( (resolve, reject) => {
			const header = new BuildHeader()
				.build( { url : url })
			 	.build( { success  : ( data : any ) : void => { resolve( data ) } } )
				.build( { error :  ( err : any ) : void => { reject(err ) } } ) ;

			if(paras)
				header.build( { data : paras } ) ;


		}));
	},
	POST : ( url : string , paras ?: object ) : Promise<any> => {
		return new Promise<any>( ( (resolve, reject) => {
			const header = new BuildHeader()
				.build( { url : url })
				.build( { success  : ( data : any ) : void => { resolve( data ) } } )
				.build( { error :  ( err : any ) : void => { reject(err ) } } ) ;

			if(paras)
				header.build( { data : paras } ) ;

			wx.request( header.getHeader() as any )
		}));
	}
}
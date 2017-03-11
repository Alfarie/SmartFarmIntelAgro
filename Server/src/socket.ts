import * as socketIo from "socket.io"
import * as db from './db';
export class Socket {
	public io: any;
	private db: any;

	constructor(io: any){
		this.io = io;
		this.db = new db.Database();
		this.listen();
	}

	private listen(): void{
		this.io.on("connection" ,(socket: any) => {
			console.log("client connected")
			
			
			socket.on("join" , ()=>{
				console.log("join");
				socket.join('0x01');
				this.updateToWebServer()
			});

			socket.on("REP_DATA" , (data:any)=> {
				this.db.setSensor(data);
				this.io.to('0x01').emit("REP_DATA" , data);
			});
			socket.on("REQ_CH" , (data:any)=>{
				console.log("REQ_CH" + data);
				this.io.to('0x01').emit("REQ_CH" , data);
			})
			socket.on("UPDATE_CONFIG" , (data:any)=>{
				this.db.updateConfig(data);
				this.updateToWebServer()
			})
			socket.on("UPDATE_TIMER" , (timer:any)=>{
				console.log("UPDATE_TIMER" , timer);
				this.db.updateTimer(timer);
				this.updateToWebServer();
			})
			socket.on("UPDATE_CHANNEL" , (ch:any)=>{
				console.log("UPDATE_CHANNEL" , ch);
				this.db.updateChannel(ch);
				this.updateToWebServer();
			})
			socket.on("disconnect" , () => {
				console.log("disconnect");
			})
		})
	}

	private updateToWebServer(){

		this.db.getConfig((err:any, res:any)=>{
					if(err){
						console.log("ERROR" , err);
						return;
					}
					// console.log(res);
					this.io.to('0x01').emit("REP_CONFIG", res[0]);
				})

				this.db.getTimer((err:any,res:any)=>{
					if(err){
						console.log("ERROR",err);
						return;
					}
					// console.log(res);
					this.io.to('0x01').emit('REP_TIMER', res[0]);
				})

				this.db.getChannel((err:any, res:any)=>{
					if(err){
						console.log("ERROR", err);
						return;
					}
					// console.log(res);
					this.io.to('0x01').emit('REP_CHANNEL', res[0]);
				})
	}
	
}
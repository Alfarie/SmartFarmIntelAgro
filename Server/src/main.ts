import * as express from "express";
import * as socketIo from 'socket.io';
import * as http from "http";
import * as serverStatic from "serve-static";
import * as path from "path";
import * as mongodb from 'mongodb';


import * as Socket from './socket';
import * as routes from './routes';

class Server {
	public app: any;
	private server: any;
	private io: any;
	private mongo: any;
	private root: string;
	private port: number;
	private router: any;

	public static bootstrap(): Server{
		return new Server();
	}

	constructor(){
		this.app = express();

		this.server = http.createServer(this.app);

		this.configure();

		this.socket();

		this.listen();

	}

	private configure(): void{
		this.port = process.env.PORT || 3000;

        this.root = path.join(path.resolve(__dirname, '../build/dist'));
        
        this.router = new routes.Routes();

        this.app.use(express.static(this.root));
        this.app.use('/data', this.router.router);

        this.app.get('/' , (req:any,res:any)=>{
        	res.sendFile('icon.ico');
        	res.end();
        })

	}


	private socket(): void{
		this.io = socketIo(this.server);
		let socket = new Socket.Socket(this.io);	
	}

	private listen(): void{
		this.server.listen(this.port);

		this.server.on("error" , (error:any) => {
			console.log("ERROR" , error);
		});

		this.server.on("listening" , () =>{
			console.log("listening on port : %s" , this.port );
		})
		

	}
}

let serve = Server.bootstrap();
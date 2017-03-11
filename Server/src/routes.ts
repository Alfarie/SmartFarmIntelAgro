import * as express from 'express';
import * as db from './db';
import * as path from 'path';


export class Routes{
	private db: db.Database;
	public router: any;
	private root:any;
	constructor(){
		this.db= new db.Database();
		this.router = express.Router();
		this.root = path.join(path.resolve(__dirname, '../build/dist'));
		this.routeConfig();
	}

	private routeConfig(){
		this.router.get('/getSensor' , (req:any,res:any)=>{
			console.log("REQUEST : /getSensor");
			var data = this.db.getSensor(10, (err:any , result:any)=>{
					if(err){
						console.log("ERROR DB :" , err);
						res.end();
					}
					else{
						res.send(result);
						res.end();
					}
					
				});
		});


		this.router.get('/home', (req:any, res:any)=>{
			res.sendFile('icon.ico')
			res.end();	
		})
	}

	




}
import * as mongodb from 'mongodb';

export class Database {
	private dbUrl: string = "mongodb://localhost:27017/db"
	private mongoClient: any = mongodb.MongoClient;
	private data:any = null;
	constructor(){
		this.init();
	}

	private init(): void{
		this.mongoClient.connect(this.dbUrl , (err:any, db:any)=>{
			console.log('database initializing');
			
			if(err){
				console.log(err);
			}
			else{
				db.close();
			}
			// db.createCollection('Users', (err:any, collection:any) =>{
	  //           if (err) {
	  //               console.log('Colelctions Users is already exists');
	  //           }
	  //       });
	  //       db.createCollection('Sensors', (err:any, collection:any)=> {
	  //           if (err) {
	  //               console.log('Collection Sensors is already exists');
	  //           }
	  //       });
	  //       db.createCollection('Channel', (err:any, collection:any)=> {
	  //           if (err) {
	  //               console.log('Collection Channel is already exists');
	  //           }
	  //           var chCol = db.collection('Channel');
	  //           var stageList = [];
	  //           for(var i=0 ; i<4;i++){
	  //           	var stage = {
	  //           		'stage' :false
	  //          		}
	  //           	stageList.push(stage);
	  //           }
	  //           var channelDoc = {
	  //           	'chid':1,
	  //           	'stageList' : stageList
	  //           }
	  //           chCol.find({'configid':1}).toArray((err:any, res:any)=>{
	  //       		if(res.length == 0){
	  //       			console.log("insert config");
	  //       			chCol.insert(channelDoc, {w:1} , (err:any , result:any)=>{});
	  //       		}
	  //       	})

	  //       });
	  //       db.createCollection('Config' , (err:any , collection:any)=>{
	  //       	if(err){
	  //       		console.log('Collection Config is already exists');
	  //       	}
	  //       	var config = db.collection('Config');
	  //       	var configList = [];
	  //       	for(var i = 0 ; i < 4 ; i++){
	  //       		let chList = {
		 //        		'vpd': {
		 //        			'isuse': false,
		 //        			'from': 0,
		 //        			'to': 0
		 //        		},
		 //        		'soil':{
		 //        			'isuse':false,
		 //        			'from': 0,
		 //        			'to': 0
		 //        		}
	  //       		}
	  //       		configList.push(chList);
	  //       	}
	  //       	let configData = {
	  //       		'configid':1,
	  //       		'mode': 'manual',
	  //       		'configList': configList
	  //       	}
	  //       	config.find({'configid':1}).toArray((err:any, res:any)=>{
	  //       		if(res.length == 0){
	  //       			console.log("insert config");
	  //       			config.insert(configData, {w:1} , (err:any , result:any)=>{});
	  //       		}
	  //       	})
	  //       });

	  //       db.createCollection('Timer' , (err:any, collection:any)=>{
	  //       	if(err){
	  //       		console.log('Collection Config is already exists');
	  //       	}
			// 	var timerCollection = db.collection('Timer');
			// 	let timer = [
			// 		{
			// 			'from': '10:05',
			// 			'to': '11:05'
			// 		}
			// 	];

			// 	let Timer ={
			// 		'timerid':1,
			// 		'timer': timer
			// 	}

			// 	timerCollection.find({'timerid':1}).toArray((err:any, res:any)=>{
	  //       		if(res.length == 0){
	  //       			console.log("insert config");
	  //       			timerCollection.insert(Timer, {w:1} , (err:any , result:any)=>{});
	  //       		}
	  //       	})


	  //       })
		})
	}

	public getSensor(limit:number,callback:any){
		this.mongoClient.connect(this.dbUrl , (err:any , db:any)=>{
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:' , err);
				this.data = null;
			}
			else{
				var sensorCollection = db.collection('Sensors');
				sensorCollection.find().limit(limit).toArray(callback)
			}
			db.close();
		})
		
	}
	public setSensor(data:any): void{
		this.mongoClient.connect(this.dbUrl , (err:any ,db:any)=>{
			if (err) {
	            console.log('Unable to connect to the mongoDB server. Error:', err);
	        } else {
	            var sensorCollection = db.collection('Sensors');
	            sensorCollection.insert(data, {w:1} , (err:any , result:any)=>{})
	            db.close();
	        }
	        db.close();
		})
	}


	public getConfig(callback:any):void{
		this.mongoClient.connect(this.dbUrl , (err:any ,db:any)=>{
			if (err) {
	            console.log('Unable to connect to the mongoDB server. Error:', err);
	        } else {
	            var config = db.collection('Config');
	            config.find().toArray(callback);
	            db.close();
	        }
	        db.close();
		})
	}

	public getTimer(callback:any):void {
		this.mongoClient.connect(this.dbUrl, (err:any,db:any)=>{
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			}
			else{
				var timer = db.collection('Timer');
				timer.find().limit(1).toArray(callback);
				db.close();
			}
			db.close();
		})
	}

	public updateConfig(data:any):void{
		this.mongoClient.connect(this.dbUrl, (err:any,db:any)=>{
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
				db.close();
			}
			else{
				var config = db.collection('Config');
				config.remove({'configid':1});
				config.insert(data , {w:1} ,(err:any, db:any)=>{

				})
				db.close();
			}
			
		})
	}

	public updateTimer(data:any):void{
		this.mongoClient.connect(this.dbUrl, (err:any,db:any)=>{
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
				db.close();
			}
			else{
				var timer = db.collection('Timer');
				timer.remove({'timerid':1});
				timer.insert(data , {w:1} ,(err:any, db:any)=>{
				})
				db.close();
			}
			
		})
	}

	public updateChannel(data:any):void {
		this.mongoClient.connect(this.dbUrl, (err:any,db:any)=>{
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
				db.close();
			}
			else{
				var ch = db.collection('Channel');
				ch.remove({'chid':1});
				ch.insert(data , {w:1} ,(err:any, db:any)=>{
				})
				db.close();
			}
			
		})
	}

	public getChannel(callback:any):void {
		this.mongoClient.connect(this.dbUrl, (err:any,db:any)=>{
			if(err){
				console.log('Unable to connect to the mongoDB server. Error:', err);
			}
			else{
				var ch = db.collection('Channel');
				ch.find({'chid':1}).toArray(callback);
			}
			db.close();
			
		})
	}


}
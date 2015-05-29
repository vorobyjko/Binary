use BinaryMongoDB

db.People.find( {"scores.score" : {$gt : 90, $lt : 95} } ).pretty()

db.People.aggregate([
	{
		$unwind : "$scores"
	},
	
	{
		$match : {
			"scores.type" : "exam",
			"scores.score" : { $gt : 90 }
		}
	}
]).pretty()

db.People.update(
	{ 
		"name" : "Vinnie Auerbach" 
	},
	
	{
		$set : {
			"accepted" : "true"
		}
	},
	
	{ multi : true }
)

db.People.find({"name" : "Vinnie Auerbach"}).pretty()


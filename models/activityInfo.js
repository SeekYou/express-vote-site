const mongoose =require('mongoose')

const activitySchema=mongoose.Schema({
	activityTitle: {type: String},
	activityNo: ObjectId,
	createTime: {type: Date,default: Date.now},
	endTime: {type: Date,default: Date.now},
	backgroundImgUrl: String,
	isDelete: Boolean
})

const Activity=module.exports=mongoose.model('Activity',activitySchema)
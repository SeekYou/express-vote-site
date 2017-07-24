const mongoose = require('mongoose')

const signSchema = mongoose.Schema({
	signNo: Number,
	signName: String,
	signDesc: String,
	signImgUrl: String,
	signTime: {type: Date,default: Date.now},
	isDelete: Boolean
})

const Sign=module.exports=mongoose.model('Sign',signSchema)
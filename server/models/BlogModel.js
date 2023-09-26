const mongoose = require('mongoose');



const BlogSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true
        },
        BlogPostImage:{
            type:String,
            required:true
        },
        BlogComment:{
            type:Array,
            required:true,
            default:[]
        },
        BlogLikes:{
            type:Array,
            required:true,
            default:[]
        },
        BlogDescription:{
            type:String,
            required:true
        },
        createdAt:{
            type:String,
            required:true
        },
        updatedAt:{
            type:String,
            required:true
        },
        
})


module.exports = mongoose.model('blogapi',BlogSchema)
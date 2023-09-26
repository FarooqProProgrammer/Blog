const BlogModel = require('../models/BlogModel')


const BlogPost = async (req, res) => {

    try {

        const {
            title,
            BlogPostImage,
            BlogComment,
            BlogLikes,
            BlogDescription,
            createdAt,
            updatedAt,
        } = req.body;


        const BlogSave = new BlogModel({
            title,
            BlogPostImage: req.file.path,
            BlogComment,
            BlogLikes,
            BlogDescription,
            createdAt,
            updatedAt,
        })

        await BlogSave.save();

        res.send({ message: 'Blog Save Successfully' })

    } catch (error) {
        console.log(error)
    }


}


module.exports = {
    BlogPost
}
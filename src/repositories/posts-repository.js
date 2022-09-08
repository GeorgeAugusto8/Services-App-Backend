const mongoose = require('mongoose');
const Post = mongoose.model('Post');
const ServiceProvider = mongoose.model('ServiceProvider');

exports.getPosts = async (index, user) => {
    var posts = await Post.find({})
    var newPosts = posts.reverse().slice((index - 1) * 4, index * 4)
    newPosts = newPosts.map(p => {
        return {
            text: p.text,
            images: p.images,
            userID: p.userID,
            userName: p.userName,
            userImage: p.userImage,
            likes: p.likes.length,
            liked : p.likes.includes(user._id),
            _id: p._id,
            date: p.date
        }
    })
    return newPosts

}

exports.post = async (data, user) => {
    console.log(data)
    const serviceProvider = await ServiceProvider.findById(user._id)
    const post = new Post({
        text: data.text,
        images: data.images,
        userID: user._id,
        userName: serviceProvider.name,
        userImage: serviceProvider.userImage ? serviceProvider.userImage : null,
        likes: []
    })
    return post.save()
}

exports.like = async (data, user) => {
    var post = await Post.findById(data.postID)

    console.log(post)

    if (post.likes && post.likes.includes(user._id)) {
        return null
    } else {
        var likes = post.likes
        likes.push(user._id)
        console.log(likes)
        return Post.findByIdAndUpdate(data.postID, {
            $set: {
                likes: likes
            }
        })
    }
}

exports.deleteLike = async (data, user) => {
    var post = await Post.findById(data.postID)
    var likes = post.likes.filter( l => l.toString() !== user._id.toString() )

    return Post.findByIdAndUpdate(data.postID, {
        $set: {
            likes: likes
        }
    })
}
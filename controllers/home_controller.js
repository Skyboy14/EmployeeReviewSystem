const User = require('../models/user');
const Review = require('../models/review');


module.exports.home = async function (req, res) {
    try {
        // Checking for authorization
        if (!req.isAuthenticated()) {
            return res.redirect('/users/sign-in');
        }
        let user = await User.findById(req.user.id);
        let review = await Review.find({ reviewer: req.user.id });

        let recipent = [];
        for (let i = 0; i < user.userToReview.length; i++) {
            let userName = await User.findById(user.userToReview[i]);
            recipent.push(userName);
        }
        // Taking all the necessary imformation of the reviewers and passing it in homePage
        let reviews = [];
        for (let i = 0; i < review.length; i++) {
            let reviewUser = await User.findById(review[i].reviewed);
            if (reviewUser != null) {
                let currUser = {
                    name: reviewUser.name,
                    content: review[i].content
                }
                reviews.push(currUser);
            }
        }

        // Render the page and pass them as the argument
        return res.render('home', {
            title: "ERS | HOME",
            recipent: recipent,
            reviews: reviews,
            user: user
        });

    } catch (err) {
        console.log(err);
        return res.redirect('back');
    }
}
const User = require('../models/user'); // requring user

// redering the sign-IN page
module.exports.signIn = function (req, res) {
    return res.render('sign_in', {
        title: 'ERS | SignIn'
    });
}
// creating the session
module.exports.createSession = async function (req, res) {
    return res.redirect('/');
}

// used for the sign-Up page
module.exports.signUp = function (req, res) {
    return res.render('sign_up', {
        title: 'ERS | SignUp'
    });
}

// creating the new user
module.exports.create = async function (req, res) {
    if (req.body.password != req.body.confirmPassword) {
        return res.redirect('back');
    }
    let user = await User.findOne({ email: req.body.email });
    const DBEmpty = await User.collection.countDocuments();

    var setAdmin = false;

    if (DBEmpty === 0) {
        setAdmin = true;
    }

    if (!user) {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: setAdmin
        });
        return res.redirect('/users/sign-in');
    }
    return res.redirect('back');
}

// used for logging Out
module.exports.destroySession = function (req, res, done) {
    return req.logout((err) => {
        if (err) {
            return done(err);
        }
        return res.redirect('/users/sign-in');
    });

}

// forget password page
module.exports.forgetPasswordPage = function (req, res) {
    return res.render('forget_password', {
        title: 'Forget Password'
    });
}
// created new password.
module.exports.forgetPasswordLink = async function (req, res) {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.redirect('/users/signUp');
    }
    if (req.body.password == req.body.confirmPassword) {
        user.password = req.body.password;
        await user.updateOne({ password: req.body.password });
        return res.redirect('/users/sign-in');
    }
    return res.redirect('back');

}

// Adding employe
module.exports.addEmployeee = async function (req, res) {
    if (req.body.password != req.body.confirmPassword) {
        return res.redirect('back');
    }
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            isAdmin: false
        });

        return res.redirect('/admin/view-employee');
    }
    return res.redirect('back');
}

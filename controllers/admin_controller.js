const Users = require('../models/user');

// assigning Task
module.exports.assignWork = async function (req, res) {
    let employe = await Users.find({});

    return res.render('admin', {
        title: 'ERS | Assign Task',
        employe: employe
    });
}

//  the list of employee woking in the company.
module.exports.showEmployeeList = async function (req, res) {
    if (!req.isAuthenticated()) {
        return res.redirect('/users/sign-in');
    }
    if (req.user.isAdmin == false) {
        return res.redirect('/');
    }
    let employeList = await Users.find({});

    return res.render('employee', {
        title: "ERS | Employe-List",
        employes: employeList
    });
}

// set the reviewer and reviewer.
module.exports.setReviewrAndReviewe = async function (req, res) {
    try {
        // first checking if the req is made correct or not.
        if (!req.isAuthenticated()) {
            return res.redirect('/users/sign-in');
        } else {
            let employee = await Users.findById(req.user.id);

            if (employee.isAdmin == false) {
                return res.redirect('/users/sign-in');
            }

            else if (req.body.sender == req.body.reciver) {
                return res.redirect('back');
            }
            // After checking all the authentication 
            else {
                let sender = await Users.findById(req.body.sender);
                let reciver = await Users.findById(req.body.reciver);
                sender.userToReview.push(reciver);
                sender.save();
                reciver.reviewRecivedFrom.push(sender);
                reciver.save();

                return res.redirect('back');
            }
        }


    } catch (err) {
        console.log("Errror in setting up the user ", err);
    }

}
//making the new Admin
module.exports.newAdmin = async function (req, res) {
    try {
        // checking the authentication
        if (!req.isAuthenticated()) {
            return res.redirect('/users/sign-in');
        }
        // Checking for authorization
        if (req.user.isAdmin == false) {
            return res.redirect('/');
        }
        // Making the user admin.
        if (req.user.isAdmin) {
            let user = await Users.findById(req.body.selectedUser);
            if (!user) {
                return res.redirect('back');
            }
            user.isAdmin = "true";
            user.save();
            return res.redirect('back');
        }

    } catch (err) {
        console.log(err);
        return res.redirect('back');
    }
}

// deleting the employee
module.exports.deleteEmployee = async function (req, res) {
    try {
        // Authentication and Authoriztion chekcing
        if (!req.isAuthenticated()) {
            return res.redirect('users/sign-in');
        }

        if (!req.user.isAdmin) {
            return res.redirect('/');
        }
        // Deleting the user.
        let employee = await Users.deleteOne({ _id: req.params.id });
        return res.redirect('back');

    } catch (err) {
        console.log(err);
        return res.redirect('back');
    }
}

// add employee
module.exports.addEmployee = function (req, res) {
    return res.render('addEmployee', {
        title: 'ERS | Add New Employee'
    });
}
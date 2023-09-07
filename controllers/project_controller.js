const Project = require('../models/projectSchema');
const Issue = require('../models/issueSchema');

const home = async (req, res) => {
    try {
        let projects = await Project.find({});
        return res.render('Home', {
            Title: 'Issue Tracker',
            Page: 'Home Page',
            projects,
            Contributer: 'Sanjeevani Tumdam'
        })
    } catch (error) {
        console.log(error);
        return;

    }
}


const open_project = async (req, res) => {
    try {
        let project = await Project.findById(req.params.id).populate({ path: 'issues' })
        if (project) {
            res.json({ message: 'got it' })
        }

    } catch (error) {
        console.log(error);
        return;

    }
}

const create_issue = async (req, res) => {
    try {
        let project = await Project.findById(req.params.id).populate({ path: 'issues' })

        if (project) {
            let issue = await Issue.create({
                title: req.body.title,
                author: req.body.author,
                label: req.body.label,
                description: req.body.description
            })
            project.issues.push(issue)
        }

    } catch (error) {
        console.log(error);
        return;

    }
}

const create_project = async (req, res) => {
    try {
        Project.create({
            name: req.body.name,
            author: req.body.author,
            description: req.body.description

        })
        res.json({ message: "project" })

        // return req.redirect('back')

    } catch (error) {
        console.log(error);
        return;

    }
}

module.exports = {
    home, open_project, create_issue, create_project
}
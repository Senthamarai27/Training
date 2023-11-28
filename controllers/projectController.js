const ProjectModel = require('../models/projectModel');
const IssueModel = require('../models/issueModel');
const asyncHandler = require('express-async-handler');
const projectModel = require('../models/projectModel');

//Home page to display all projects
const homePage = asyncHandler(async(req,res)=>{
    let allProjects = await ProjectModel.find({}).sort('-createdAt');
    res.render('homePage', {title:"Issue Tracker || Home", allProjects});
})

//Create Project page
const createProjectPage = asyncHandler(async(req,res)=>{
    res.render('createProject',{title:"Issue Tracker || Create Project"});
})

//Create Project (saving data from form)
const createProject = asyncHandler(async (req,res)=>{
    const project = await projectModel.create({
        projectName:req.body.projectName,
        description:req.body.description,
        authorName:req.body.authorName
    });
    await project.save();
    res.redirect('/');
})

//Create project details page
const projectDetails = asyncHandler(async(req,res)=>{
    const project = await ProjectModel.findById(req.params.id).populate({ path:"issues"});
    res.render('projectDetails',{title:"Issue Tracker || Details",project});

})

//Create issue Page
const createIssuePage = asyncHandler(async(req,res)=>{
    const project = await ProjectModel.findById(req.params.id);
    res.render('createIssue',{title:"Issue Tracker || Create Issue",project});
}) 

//Create issue and save in project
const createIssue = asyncHandler(async(req,res)=>{
    const project = await ProjectModel.findById(req.params.id);
    const issue = await IssueModel.create({
        title:req.body.title,
        description:req.body.description,
        label:req.body.label,
        issueAuthor:req.body.author
    });

    //Adding issue in project
    project.issues.push(issue);
    await project.save();
    await issue.save();
    res.redirect('back');
})

//Exporting all controller function
module.exports = {homePage,createProjectPage,createProject,projectDetails,createIssuePage,createIssue};

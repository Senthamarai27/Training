const express = require('express');

//importing all controller functions
const {homePage, createProjectPage, createProject, projectDetails, createIssuePage, createIssue} = require('../controllers/projectController');

//importing express router
const router = express.Router();

//route or home page
router.route('/').get(homePage);

//route to create project page and create project
router.route('/create_Project').get(createProjectPage).post(createProject);

//route to project details page
router.route('/project_details/:id').get(projectDetails);

//route to create issue page and create issue
router.route('/create_issue/:id').get(createIssuePage).post(createIssue);

//exporting all routes
module.exports = router;

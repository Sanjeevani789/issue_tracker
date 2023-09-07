const express = require('express');
const { home, open_project, create_issue, create_project } = require('../controllers/project_controller');
const router = express.Router();





router.get('/', home);
router.get('/project/:id', open_project);
router.post('/project/:id', create_issue);
router.post('/project', create_project);
module.exports = router;

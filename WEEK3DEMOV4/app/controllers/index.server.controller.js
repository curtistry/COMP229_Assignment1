/*File Name: index.server.controller.js*/
/*Student Name: Curtis Carpio*/
/*Student ID: 301322854*/
/*Date: October 4th, 2023*/

exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};

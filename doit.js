
var fs = require('fs');
var ejs = require('ejs');
var util = require('util');

var data = {
    analytics: {
        doit: true,
        account: "UA-38457954-1",
        domain: "healthjobsboard.com"
    },
    sharethis: {
        doit: true,
        publisher: "ac833be5-7cb5-4ed1-bdf1-99791d69bee2",
        position: "left"
    },
    tabs: [
        {
            active: true,
            title: "Category 1",
            machineName: "categ1",
            tabs: [
                {
                    active: true,
                    title: "Group Name 1",
                    machineName: "name1",
                    links: [
                        { query: "job-query-1", title: "Job Title 1"},
                        { query: "job-query-2", title: "Job Title 2"},
                        { query: "job-query-3", title: "Job Title 3"},
                    ]
                },
                {
                    active: false,
                    title: "Group Name 2",
                    machineName: "name2",
                    links: [
                        { query: "job-query-1", title: "Job Title 1"},
                        { query: "job-query-2", title: "Job Title 2"},
                        { query: "job-query-3", title: "Job Title 3"},
                    ]
                },
                {
                    active: false,
                    title: "Group Name 3",
                    machineName: "name3",
                    links: [
                        { query: "job-query-1", title: "Job Title 1"},
                        { query: "job-query-2", title: "Job Title 2"},
                        { query: "job-query-3", title: "Job Title 3"},
                    ]
                }
            ]
        },
        {
            active: false,
            title: "Category 2",
            machineName: "categ2",
            tabs: [
                {
                    active: true,
                    title: "Group Name 1",
                    machineName: "name1",
                    links: [
                        { query: "job-query-1", title: "Job Title 1"},
                        { query: "job-query-2", title: "Job Title 2"},
                        { query: "job-query-3", title: "Job Title 3"},
                    ]
                },
                {
                    active: false,
                    title: "Group Name 2",
                    machineName: "name2",
                    links: [
                        { query: "job-query-1", title: "Job Title 1"},
                        { query: "job-query-2", title: "Job Title 2"},
                        { query: "job-query-3", title: "Job Title 3"},
                    ]
                },
                {
                    active: false,
                    title: "Group Name 3",
                    machineName: "name3",
                    links: [
                        { query: "job-query-1", title: "Job Title 1"},
                        { query: "job-query-2", title: "Job Title 2"},
                        { query: "job-query-3", title: "Job Title 3"},
                    ]
                }
                
            ]
        },
        {
            active: false,
            title: "Category 3",
            machineName: "categ3",
            tabs: [
                {
                    active: true,
                    title: "Group Name 1",
                    machineName: "name1",
                    links: [
                        { query: "job-query-1", title: "Job Title 1"},
                        { query: "job-query-2", title: "Job Title 2"},
                        { query: "job-query-3", title: "Job Title 3"},
                    ]
                },
                {
                    active: false,
                    title: "Group Name 2",
                    machineName: "name2",
                    links: [
                        { query: "job-query-1", title: "Job Title 1"},
                        { query: "job-query-2", title: "Job Title 2"},
                        { query: "job-query-3", title: "Job Title 3"},
                    ]
                },
                {
                    active: false,
                    title: "Group Name 3",
                    machineName: "name3",
                    links: [
                        { query: "job-query-1", title: "Job Title 1"},
                        { query: "job-query-2", title: "Job Title 2"},
                        { query: "job-query-3", title: "Job Title 3"},
                    ]
                }
                
            ]
        },
    ]
};

util.log('start');
var headertext = fs.readFileSync('header.ejs', 'utf8');
util.log('read header.ejs');
var header = ejs.render(headertext, data);
util.log('rendered');
fs.writeFileSync('header.html', header, 'utf8');
util.log('written');

var footertext = fs.readFileSync('footer.ejs', 'utf8');
util.log('read footer.ejs');
var footer = ejs.render(footertext, data);
util.log('rendered');
fs.writeFileSync('footer.html', footer, 'utf8');
util.log('written');
util.log('end');

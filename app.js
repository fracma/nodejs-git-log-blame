/* const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
}) */

//gitBlameExample();
gitBlame()

function gitBlameExample() {
  const gitlog = require('gitlog');

  const options =
  {
    repo: __dirname + '/'
    , number: 20
    , author: 'jvanhouteghem'
    , fields:
      ['hash'
        , 'abbrevHash'
        , 'subject'
        , 'authorName'
        , 'authorDateRel'
      ]
    , execOptions:
    {
      maxBuffer: 1000 * 1024
    }
  };

  // Asynchronous (with Callback)
  gitlog(options, function (error, commits) {
    // Commits is an array of commits in the repo
    console.log(commits)
  });

  // Synchronous
  let commits = gitlog(options);
  console.log(commits);
}

function gitBlameExample2() {
  var gitBlame = require('git-blame');
  var path = require('path');

  var repoPath = path.resolve(process.env.REPO || (__dirname + '/.git'));
  var file = process.env.FILE || 'package.json';
  var rev = process.env.REV || 'HEAD';

  gitBlame(repoPath, {
    file: file,
    rev: rev
  }).on('data', function (type, data) {
    // type can be 'line' or 'commit'
    console.log(type, data);
  }).on('error', function (err) {
    console.error(err.message);
    process.exit(1);
  }).on('end', function () {
    console.log('±±±±±±±±±±±±±±±±±±');
    console.log("That's all, folks!");
  });
}


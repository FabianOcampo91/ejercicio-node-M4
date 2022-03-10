const fs = require('fs')
const request = require('request')

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\npromp > ')
}

const pwd = (file) => {
    done(process.cwd())
}

const date = (file) => {
    done(Date())
}


const echo = (file) => {
    done(arg)
}

const curl = (file) => {
    request(file, (err, res, body) => {
        done(body)
    })
}


const ls = (file) => {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        let  res = '\n';
        files.forEach((file) => {
          res = res + file.toString() + "\n";
        })
        done(res)
      });
}


module.exports = {
    pwd,
    date,
    ls,
    echo,
    curl,
    done
}
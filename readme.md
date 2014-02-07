#Tumblr Backup

A command line tool to download the contents of your Tumblr blog to your computer for safe keeping. Written in Node.

Right now it's a command line tool. Once this is fleshed out I'll look at working on GUI options.

##Downloading

If you have git, do a git clone:

```
git clone git@github.com:cphoniball/tumblrbackup.git tumblrbackup
```

Otherwise download the tumblrbackup.js file from this repository.

##To use

You'll need to install Node if you don't have it already. See [this page](http://nodejs.org/download/) for instructions. Then make sure you're in the same directory you downloaded the script to and do the following:

```bash
./tumblrbackup.js http://myblog.tumblr.com downloads
```
The first argument you pass in should be the http address of your blog. The second, optional argument is the directory that the downloaded content will end up in. It defaults to 'downloads'.

Use the --verbose option to get information about the downloads as they are happening.
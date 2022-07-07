`python -m SimpleHTTPServer 8005`

## Deploy
`git checkout master` you can avoid this line if you are in master...

`git subtree split --prefix app -b gh-pages` create a local gh-pages branch containing the splitted output folder

`git push -f origin gh-pages:gh-pages` force the push of the gh-pages branch to the remote gh-pages branch at origin

`git branch -D gh-pages` delete the local gh-pages because you will need it: ref

## New

`git checkout gh-pages` go to the gh-pages branch
`git rebase master` bring gh-pages up to date with master
`git push origin gh-pages` commit the changes
`git checkout master` return to the master branch

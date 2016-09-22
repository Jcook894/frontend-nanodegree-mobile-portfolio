## My Optimizations


### How to run.


1. Open up terminal and install ngrok

    npm install ngrok  

2. On a separate terminal screen cd into the directory with all your files and run :
    python -m SimpleHTTPServer 8080

3. Now, back on the original terminal screen, run:
    ngrok http 8080

  & now you should be able to run a local server.
  

### Gulpfile


1. Used gulp to minify and compress all my files.
2. Used Gulp to open up a local server to host all my files.
3. Also used gulp to help me with pagespeed insights.



#### Optimizing the frame rate.
1. I found the variables that needed to come out of for loops that cause the frame rate to drop. You can find those variables in main.js line 514-515
2. I also found the bug where the time to resize pizza on the page was was taking too long. those variables are found in main.js lines 453-456

#### Minor Optimizations
* Made minor Optimizations by moving around script tags to where they belong and adding the height and width attr. to every image.

# Image processing api

# Project overview:

- user enter a valid image name, width and height in in the browser :
  example http://localhost:3000/api/images/?filename=encenadaport&width=600&height=400
  the response should be the same image with that width and height which is saved in
  another thumb folder to be presented instead of reprocessed once again .

# Project walkthrough:

- setting the main structure and the main libraries installement like eslint and prettier
  and express.

- setting the main routes in express and the picturing the main end points.

- install sharp library which is responsible for resizing the picture.

- making a middleware which take the queries of the user from the url:

  - check the validity of the inputs first if the name of the image
    exist or not and then if the width and height are valid numbers: - if not return the proper error message. - if everything checks go the next middleware.

  - check if the needed image wiht the specfic width and height allready exist in the thumb folder:
    - if it do exist send that picture
    - if not send that inputs (image name, width, height) to the sharp function to be processed ,
      saved in the thumb folder and then send to the user .

# Notes:

- # about ts-node:
- i found error to start code with ts-node (ts-node' is not recognized as an internal or external command),
  and when i googled it found that the solution is to install ts-node globally (npm install -g ts-node) if you
  faced such error you can consider that approach.

- # about jasmine:
- found some issues with testing my endpoint with the last version of jasmine 4.0.2 and when i googled the issue
  the main thing i understood is to revert back to an older version of jasmine which worked (v 3.10.2) so if you faced the same
  problem you can do the same.

- # failed trial:
- tried to dynamically list the images in the image folder (so that the user can know easily the images name) using fs.readdir and
  although it worked in the terminal and listed all the images but when send to the browser it kept going as a promise object and
  tried some ways which all failed so committed to the simple approach at least for now.

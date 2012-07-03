== Start the server

You need to be in the root folder

    staticmatic preview .

(on ruby 1.9, try

    LANG=UTF-8 staticmatic preview .

== Build the site

Some HTML hrefs need to be manually edited in the SITE folder before deployment (CSS & images paths)

    staticmatic build .

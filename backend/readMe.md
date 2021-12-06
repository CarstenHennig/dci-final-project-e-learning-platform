# URLs to access backend

1) PUT http://localhost:9000/posts/writePost to write a post
2) GET http://localhost:9000/posts/getPost to get all users posts
3) POST http://localhost:9000/users/login to login a user 
4) POST http://localhost:9000/users/register to register new users
5) PUT "http://localhost:9000/uploads" to upload a single image
6) GET "http://localhost:9000/" + filename to retrieve an image from Database
7) DELETE a user: http://localhost:9000/users/61a60237cf7160d6f56f1589
8) EDIT  USER PROFILE: PUT  http://localhost:9000/editUsers/[component]/[userId]

## Example: to edit the address for the user with id "61a619a59abc09ee1dbffd4e" you would have the url as

http://localhost:9000/editUsers/address/61a619a59abc09ee1dbffd4e
    
	{"city" : "Ndungalleh",
    "street" : "Nchukro New Layout",
    "zip": "15632",
    "country" : "Ndungallehnia"}

	================== VIDEO GALLERY =================

8) CREATE VIDEO GALLERY: Post  http://localhost:9000/galleries/register/  
9) LOG IN TO VIDEO GALLERY using email: POST http://localhost:9000/galleries/login
	
10) EMBED A VIDEO: PUT http://localhost:9000/galleries/createClip
11) DISPLAY ALL USER'S GALLERIES: GET http://localhost:9000/galleries/getClips
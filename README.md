.............................................#Documentation................................................................


#npm install - To install all dependencies.
#npm run server - To start the server.

1) API Endpoints :-

#Authentication Routes (auth.routes.js)................................................................

    *POST /api/auth/signup

        Description: User signup.
        Status Codes:
            201: Successfully signed up.
            400: Bad request (e.g., passwords don't match, username already exists).
            500: Internal server error.
        Error Messages: 
            "Passwords don't match", 
            "Username already exists", 
            "Internal Server Error".


    *POST /api/auth/login

    Description: User login.
    Status Codes:
        200: Successfully logged in.
        400: Bad request (e.g., invalid username or password).
        500: Internal server error.
    Error Messages: "Invalid username or password", 
                    "Internal Server Error".    


    *POST /api/auth/logout

    Description: User logout.
    Status Codes:
        200: Successfully logged out.
        500: Internal server error.
    Error Messages:
        "Internal Server Error".



#Message Routes (message.routes.js)................................................................

    *GET /api/messages/:id

        Description: Retrieve messages with a specific user.
        Status Codes:
            200: Successfully retrieved messages.
            500: Internal server error.
        Error Messages:
            "Internal Server Error"


    *POST /api/messages/send/:id

        Description: Send a message to a specific user.
        Status Codes:
            201: Successfully sent message.
            500: Internal server error.
        Error Messages:
            "Internal Server Error"



#User Routes (user.routes.js)................................................................

    *GET /api/users/

        Description: Retrieve users for the sidebar.
    Status Codes:
        200: Successfully retrieved users.
        500: Internal server error.
    Error Messages:
        "Internal Server Error"



2) Middleware :---------------------------------

    *Authentication Middleware (protectRoute.js)............

        Description: Middleware to protect routes by verifying JWT tokens and checking user authentication.
        Status Codes:
            401: Unauthorized (No token provided or invalid token).
            404: User not found.
            500: Internal server error.
        Error Messages:
            "Unauthorized - No Token Provided"
            "Unauthorized - Invalid Token"
            "User not found"
            "Internal Server Error"



3) Socket Functions (socket.js) : --------------------------------

    *getReceiverSocketId()
        Description: Get the socket ID of a specific user for real-time communication.



4) Mongoose Models :--------------------------------

    *User Model (user.model.js)
        fullName: String
        username: String (unique)
        password: String (hashed)
        gender: String (enum: ["male", "female"])
        profilePic: String (default: "")


    *Message Model (message.model.js)

        senderId: ObjectId (ref: "User")      [It contains the userid of the sender]
        receiverId: ObjectId (ref: "User")    [It contains the userid of the receiver]
        message: String

    *Conversation Model (conversation.model.js)

        participants: Array of ObjectIds (ref: "User")
        messages: Array of ObjectIds (ref: "Message")



5) Other Utilities :--------------------------------

    JWT Token Generation (generateToken.js)
    Description: Generate JWT tokens and set them as cookies.
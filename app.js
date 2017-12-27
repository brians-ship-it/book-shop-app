var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    methodOverride  = require("method-override"),
    Book            = require("./models/index");
    
// seeding
// var seedDB = require("./seeds");
// seedDB();
    
mongoose.connect("mongodb://localhost/books-trial", {useMongoClient: true});
mongoose.Promise = global.Promise; 

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));


// routes
app.get('/', function(req, res){
    // res.send('The main PAGE');
    res.redirect('/index');
});

// index route
app.get('/index', function(req, res){
    Book.find({}, function(err, allBooks){
        if(err) {
            console.log(err);
        } else {
            res.render('index', {books: allBooks});
        }
    })
});
// add new book
app.post('/index', function(req, res){
    Book.create(req.body.book, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
        // console.log(newlyCreated);
        // redirect
        res.redirect('/index');        
        }
    });
});

// new - show form to add new book
app.get('/index/new', function(req, res){
    res.render("new");
});

// SHOW - shows more info about one book
app.get('/index/:id', function(req, res){
    //find the book with provided ID
    Book.findById(req.params.id, function(err, foundBook){
        if(err){
            console.log(err);
        } else {
            res.render('show', {book: foundBook});
        }
    });
});

// Edit
app.get('/index/:id/edit', function(req, res){
    Book.findById(req.params.id, function(err, foundBook){
       if(err) {
           res.redirect('/index');
           console.log(err);
       } else {
           res.render('edit', {book: foundBook});
       }
    });
});


// Update 
app.put("/index/:id", function(req, res){
    Book.findByIdAndUpdate(req.params.id, req.body.book, function(err, updatedBook){
        if(err) {
            res.redirect("/index");
            console.log(err);
        } else {
            res.redirect("/index/" + req.params.id);
        }
    }); 
});

// Delete
app.delete("/index/:id", function(req, res){
    Book.findByIdAndRemove(req.params.id, function(err) {
        if(err){
            res.redirect("/index");
        } else {
            res.redirect("/index");
        }
    });
});

app.get("*", function(req, res){
    res.send("Ooops. This page doesn't exist");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server initiated");
});
    

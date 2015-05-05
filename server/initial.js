/**
 * Created by Олександр on 27.04.2015.
 */

/** Adding quotations to database if empty*/
if (Quotes.find().count() === 0) {
    Quotes.insert({
        highlight: 'Debugging is twice as hard',
        continuation: 'as coding. If you write code as cleverly as possible, you are, by definition, not smart enough to debug it',
        author: 'Brian Kernighan'
    });
    Quotes.insert({
        highlight: 'Should array indices start at 0 or 1?',
        continuation: 'My compromise of 0.5 was rejected without, I thought, proper consideration',
        author: 'Stan Kelly-Bootle'
    });
    Quotes.insert({
        highlight: 'The best method for accelerating a computer',
        continuation: 'is the one that boosts it by 9.8 m/s\xB2',
        author: 'Anonymous'
    });
    Quotes.insert({
        highlight: 'First, solve the problem.',
        continuation: 'Then, write the code',
        author: 'John Johnson'
    });
}

/** Adding posts to database if empty*/

if (Posts.find().count()===0) {
    Posts.insert({
        address:'bio',
        title:'My biography',
        cut:'Short history of my life',
        text:'Short history of my life that will be filled later',
        author:'lsheva',
        date: new Date()
    });
    Posts.insert({
        address:'portfolio',
        title:'Portfolio',
        cut:'There are a lot of different way to express oneself creativity',
        text:'There are a lot of different way to express oneself creativity. Photography, music, dancing... This will be all here, but... maybe I should change a name of this post',
        author:'lsheva',
        date: new Date()
    });
    Posts.insert({
        address:'webdeveloping',
        title:'WebDeveloping',
        cut:'When I first learned about the Meteor, I saw someone write, Meteor is to Node.js as Rails is to Ruby, and I think thats a good comparison. A few years ago, Rails was the hot new...',
        text:'When I first learned about the Meteor JavaScript framework, I saw someone write, Meteor is to Node.js as Rails is to Ruby, and I think thats a good comparison. A few years ago, Rails was the hot new thing on the web, sprinkling some useful magic through the development process to make programming on the web more approachable and pleasant. Out of the countless new frameworks that have spawned as of late though, none have made me feel the way Rails did as much as Meteor - a framework that you should seriously consider using for your coming projects. Heres a few reasons why.One of the frustrating parts of being a web developer is the need to wear a variety of hats. You need to think about the front-end, the back-end, and the database, and then theres another million details that squeeze out the last inch of your mental capacity. Meteor simplifies this process by shrinking the scope of what you need to consider, allowing you to build and manage the front-end, the back-end, and the database with nothing but JavaScript.',
        author:'David Turnbull',
        date:new Date()
    });
    Posts.insert({
        address:'meteor-hits-windows',
        title:'Meteor hits Windows',
        cut:'Windows support had been the most-requested feature for the framework, which now also works with MongoDB 3.0',
        text:'Until now, developers who wanted to build Web and mobile apps via the Meteor JavaScript framework had to do so via either Mac or Linux clients. That changes today with the release of Meteor 1.1, which features support for Windows clients as well as the MongoDB 3.0 database.The one group that was left out [when version 1.0 launched late last year] were developers who use Windows, which is about half the total market of developers, said Matt DeBergalis, co-founder of the Meteor project and vice president at Meteor Development Group, which oversees the technology. Developers who used Windows as their primary development platform and wanted to leverage Meteor had to do so either via a virtual machine or some other complicated solution.',
        author:'Paul Krill',
        date:new Date()
    });
    Posts.insert({
        address:'mongodb-30-mature',
        title:'MongoDB 3.0, for mature audiences',
        cut:'The new MongoDB features document-level locking, better write performance, big memory support, and more. At last, MongoDB is all grown up',
        text:'NoSQL databases have ridden the hype cycle traced by any new technology. Some new feature or capability -- seamless multiserver scaling, in this case -- spawns a host of new startups.None of them begins with a mature product. When these startups are quizzed about missing features that incumbent products have had for years, the answer is usually something like a lot of people dont need that. Then they implement that stuff and pull a Steve Jobs -- Now with cut and paste! -- causing fans to marvel at their brilliance and party like its 1979.',
        author:'Andrew C. Oliver',
        date: new Date()
    });
}

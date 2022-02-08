const Author = require('./Author');
const Article = require('./Article');
const Comment = require('./Comment');



//AUTHOR to ARTICLE
Author.hasMany(Article, {
    foreignKey: 'author_id',
    onDelete: 'SET NULL',
});

Article.belongsTo(Author, {
    foreignKey: 'author_id',
});


//ARTICLE to COMMENT
Article.hasMany(Comment, {
    foreignKey: 'article_id',
    onDelete: 'SET NULL',
})

Comment.belongsTo(Article, {
    foreignKey: 'article_id',
})


//AUTHOR to COMMENT
Author.hasMany(Comment, {
    foreignKey: 'author_id',
    onDelete: 'SET NULL',
});

Comment.belongsTo(Author, {
    foreignKey: 'author_id',
    as: 'commenter'
});



module.exports = { Author, Article, Comment };
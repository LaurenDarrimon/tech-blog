const Author = require('./Author');
const Article = require('./Article');
const Comment = require('./Comment');



//AUTHOR to ARTICLE
Author.hasMany(Article, { as: 'Instruments' }, {
    foreignKey: 'author_name',
    onDelete: 'SET NULL',
});

Article.belongsTo(Author, {
    foreignKey: 'author_name',
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
    foreignKey: 'author_name',
    onDelete: 'SET NULL',
});

Comment.belongsTo(Author, {
    foreignKey: 'author_name',
    as: 'commenter'
});



module.exports = { Author, Article, Comment };
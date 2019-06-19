module.exports = (sequelize, DataTypes) => {
    const Poem = sequelize.define('Poem', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        noun1: DataTypes.STRING,
        noun2: DataTypes.STRING,
        noun3: DataTypes.STRING,
        adj1: DataTypes.STRING,
        adj2: DataTypes.STRING,
        adj3: DataTypes.STRING,
        adverb1: DataTypes.STRING,
        adverb2: DataTypes.STRING,
        adverb3: DataTypes.STRING,
        prep1: DataTypes.STRING,
        prep2: DataTypes.STRING,
        prep3: DataTypes.STRING,
        verb1: DataTypes.STRING,
        verb2: DataTypes.STRING,
        verb3: DataTypes.STRING,
    })
    


    return Poem
}






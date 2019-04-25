module.exports = function(sequelize, DataTypes) {
    const Wish = sequelize.define("Wish", {
      
      text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      granted: {
        type: DataTypes.BOOLEAN
      }
     
    });
    Wish.associate = function(models) {
      //a wish should belong to a profile
      //without a profile, a wish cannot be created - foreign key constraint
      Wish.belongsTo(models.Profile, {
        foreignKey: {
          allowNull: false
        }
      })
    }
    return Wish;
  };

 
  
  //   Post.associate = function(models) {
  //     // We're saying that a Post should belong to an Author
  //     // A Post can't be created without an Author due to the foreign key constraint
  //     Post.belongsTo(models.Author, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  //   };
  
  //   return Post;
  //};
import { Model, DataTypes, BuildOptions } from 'sequelize';
import { createStore } from '../../utils';

const sequelize = createStore();

export class Post extends Model{
    public id!: number;
    public title!: string;
    public description!: string;
    public imageUrl!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Post.init(
{
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl:{
        type:DataTypes.STRING,
        allowNull: false
    }
},
{
    tableName: 'Post',
    sequelize: sequelize    
}
);

export type PostModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Post;
  };
  
  export default Post as PostModelStatic;
  
import { Author } from './author';

export class Post{
    id : number;
    title : string;
    textInput : string;
    postedAt : Date;
    authorId? : number;
    successful: boolean;
}
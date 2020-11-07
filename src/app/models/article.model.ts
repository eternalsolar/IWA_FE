export class Article {
    title: string;
    link: string;
    image: string;
    excerpt: string;
    content: string;
    constructor(title: string = '', link: string = '', image: string = '', excerpt: string = '', content: string = '') {
        this.title = title;
        this.link = link;
        this.image = image;
        this.excerpt = excerpt;
        this.content = content;
    }

    

    
}
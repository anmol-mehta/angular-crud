export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export class User {
    id: number;
    userName: string;
    name: string;
    email: string;
    address: Address;
    phone: number;
    website: string;
    company: Company
}

export class Address {
    street: string;
    suite: string;
    city: string;
    zipCode: number;
}

export class Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export class PostWithUserInfo {
    postInfo: Post;
    userInfo: User;
    comments: Comments[];
}

export class Comments {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
##Blog Question 1: The significance of union and intersection types in Typescript.
Answer:
Union Types: Union type is a typescript type that act like logically or, get more than one type and we can choose one of the type from many types. Symbol of union is: |
Example:
Let x: string | number;
X = “Asif”
X = 22
Here x is string type of number type and we can assign string or number in x variable.

Intersection Type: Intersection is opposite of union where intersection accept more than one types and we have to implement all of the types other wise typescript show error.
Example:
type NormalUser = {
name: string;
email: string;
}
type AdminUser = {
admin: “admin”
}
Type AdminUser = User & Admin;
Const admin: AdminUser = {
name: “Asif”,
email: “asif@gmail.com”,
admin: “admin”
}

Here Admin user have to implement all the type of NormalUser and AdminUser.

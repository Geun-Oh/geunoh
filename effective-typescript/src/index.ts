interface Person {
    first: string;
    last: string;
}

const p: Person = { first: "Jane", last: "Jacobs" };

const email = (p: Person, subject: string, body: string): Response => {
    return new Response()
}

class Cylinder {
    radius = 1;
    height = 1;
}

function calculateVolume(shape: unknown) {
    if(shape instanceof Cylinder) {
        shape; // It's type is Cylinder!
        shape.radius; // It's type is number!
    }
}

type t1 = typeof p
type t2 = typeof email

type t = typeof Cylinder
const type = typeof Cylinder
type v = InstanceType<typeof Cylinder>

console.log(type)

const v1 = typeof p
const v2 = typeof email
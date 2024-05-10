import { json } from "stream/consumers"

export async function GET(request:Request) {

    let cloud = "some text"
    let pass = "some test"
    let data:Object = {
        "cloud":cloud,
        "password":pass
    };

    return data

}
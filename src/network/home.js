import {httpService} from "./request";

export function getHomeMultiData() {
    return httpService({
        url: "/home/multidata"
    })
}
import {httpService} from "./request";

export function getHomeMultiData() {
    return httpService({
        url: "/home/multidata"
    })
}

export function getGoodsData(goods_type, page) {
    return httpService({
        url: "home/data",
        params: {
            type: goods_type,
            page: page
        }
    })
}
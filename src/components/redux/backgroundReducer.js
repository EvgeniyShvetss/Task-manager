import {} from "./types";

const initialState = [
    {img: "https://sites.google.com/site/prirodanaha/_/rsrc/1468741750018/home/%D0%96%D0%B8%D0%B2%D0%B0%D1%8F-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0.jpg",},
    {img: "http://cdn11.overnature.net/3200/863.jpg"},
    {img: "https://w-dog.ru/wallpapers/10/14/426721039464376/gory-sneg-zima-ozero-doma-bereg-priroda-pasmurno.jpg"},
    {img: "https://w-dog.ru/wallpapers/10/15/424757584451248/yuzhnaya-islandiya-skandinaviya-zima-okean-bereg-gory-ldiny.jpg"},


];

export const backgroundReducer = (state = initialState, action) => {
    switch (action.type) {



        default: return state;
    }
};
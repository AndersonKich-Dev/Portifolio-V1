
export function toogleAnimation(pageYOffset, innerHeight, offsetTop, positionFather){
    const windowTop =  pageYOffset + (((innerHeight + 200) * 3)/4);

    return  windowTop > positionFather ?  true : false
}



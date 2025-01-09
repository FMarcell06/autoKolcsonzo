function szamitKoltseget(obj) {
    let autoTipusKoltseg
    if (obj.autoTipus == "gazdaságos"){
        autoTipusKoltseg = 3000
    }else if(obj.autoTipus == "családi"){
        autoTipusKoltseg = 5000
    }else{
        autoTipusKoltseg = 10000
    }
    let biztositasKoltseg
    if(obj.extraBiztositas){
        biztositasKoltseg = 1000
    }else{
        biztositasKoltseg = 0
    }
    let kedvezmeny
    if(obj.kolcsonzesiIdo >= 7){
        kedvezmeny = 0.9
    }else{
        kedvezmeny = 1
    }

    return (autoTipusKoltseg + biztositasKoltseg)*obj.kolcsonzesiIdo*kedvezmeny
}
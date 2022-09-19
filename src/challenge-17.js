export default function countPackages(carriers, carrierID) {
    for (const [name, value, sub_carriers] of carriers) {
        if (name !== carrierID) continue
        
        let result = value;

        for (const carrier_id of sub_carriers)
            result += countPackages(carriers, carrier_id);
    
        return result
    }

    return -1
}

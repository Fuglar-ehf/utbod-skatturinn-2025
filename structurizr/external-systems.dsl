
thjodskra = softwareSystem "Þjóðskrá" "Iceland National Registry" "Existing System" {
    thjodskraApi = container "Þjóðskrá API" {
        description "Provides information about people"
        tags "Existing System"
    }
    
    thjodskraXRoad = container "Þjóðskrá X-Road Security Server" {
        description "Provides secure data exchange between systems"
        technology "X-Road"
        tags "Existing System"
    }
}
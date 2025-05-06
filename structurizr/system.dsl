
taxReturnPortal = softwareSystem "Tax Return Portal" "Enables users to file their tax returns online" {
    taxReturnApplication = container "Tax Return Application" {
        description "Coordinates tax return processes"
        technology "React"
    }

    skatturApi = container "Skattur API" {
        description "Provides tax return data"
        technology "Express.js"
    }

    skatturDb = container "Skattur DB" {
        description "Database for tax return data"
        technology "PostgreSQL"
        tags "Database"
    }
}